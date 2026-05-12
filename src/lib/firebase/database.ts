import {
  collection as clientCollection,
  doc as clientDoc,
  getDoc as clientGetDoc,
  getDocs as clientGetDocs,
  setDoc as clientSetDoc,
  addDoc as clientAddDoc,
  updateDoc as clientUpdateDoc,
  deleteDoc as clientDeleteDoc,
  query as clientQuery,
  where as clientWhere,
  orderBy as clientOrderBy,
  limit as clientLimit,
  QueryConstraint
} from 'firebase/firestore';
import { db } from './config';

// Try to load Admin SDK firestore when running on server and service account is provided
let adminDb: any = null;
try {
  if (typeof window === 'undefined') {
    // require at runtime so client bundles don't include admin SDK
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const adminModule = require('./admin');
    adminDb = adminModule.adminDb;
  }
} catch (e) {
  // admin not available — keep using client SDK
}

/**
 * Firebase Firestore helper functions
 * These replace MongoDB operations with Firestore equivalents
 */

export class FirebaseDB {
  /**
   * Get a single document by ID
   */
  static async getDocument(collectionName: string, docId: string): Promise<any> {
    try {
      if (adminDb) {
        const docRef = adminDb.collection(collectionName).doc(docId);
        const snap = await docRef.get();
        if (snap.exists) return { id: snap.id, ...snap.data() };
        return null;
      }

      const docRef = clientDoc(db, collectionName, docId);
      const docSnap = await clientGetDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }
      return null;
    } catch (error) {
      console.error(`Error getting document from ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get all documents from a collection
   */
  static async getCollection(collectionName: string, constraints: QueryConstraint[] = []): Promise<any[]> {
    try {
      if (adminDb) {
        // Admin SDK: get all docs and optionally warn that client QueryConstraints are ignored
        const snap = await adminDb.collection(collectionName).get();
        if (constraints.length > 0) {
          console.warn('Query constraints supplied to getCollection are ignored when using Admin SDK.');
        }
        return snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));
      }

      const collectionRef = clientCollection(db, collectionName);
      const q = constraints.length > 0 ? clientQuery(collectionRef, ...constraints) : collectionRef;
      const querySnapshot = await clientGetDocs(q);

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error getting collection ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Set/Create a document with specific ID
   */
  static async setDocument(collectionName: string, docId: string, data: any) {
    try {
      if (adminDb) {
        const docRef = adminDb.collection(collectionName).doc(docId);
        await docRef.set(data, { merge: true });
        return { id: docId, ...data };
      }

      const docRef = clientDoc(db, collectionName, docId);
      await clientSetDoc(docRef, data, { merge: true });
      return { id: docId, ...data };
    } catch (error) {
      console.error(`Error setting document in ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Add a new document (auto-generated ID)
   */
  static async addDocument(collectionName: string, data: any) {
    try {
      if (adminDb) {
        const collectionRef = adminDb.collection(collectionName);
        const docRef = await collectionRef.add(data);
        return { id: docRef.id, ...data };
      }

      const collectionRef = clientCollection(db, collectionName);
      const docRef = await clientAddDoc(collectionRef, data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Update an existing document
   */
  static async updateDocument(collectionName: string, docId: string, data: any) {
    try {
      if (adminDb) {
        const docRef = adminDb.collection(collectionName).doc(docId);
        await docRef.update(data);
        return { id: docId, ...data };
      }

      const docRef = clientDoc(db, collectionName, docId);
      await clientUpdateDoc(docRef, data);
      return { id: docId, ...data };
    } catch (error) {
      console.error(`Error updating document in ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Delete a document
   */
  static async deleteDocument(collectionName: string, docId: string) {
    try {
      if (adminDb) {
        const docRef = adminDb.collection(collectionName).doc(docId);
        await docRef.delete();
        return { success: true };
      }

      const docRef = clientDoc(db, collectionName, docId);
      await clientDeleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error(`Error deleting document from ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Query documents with conditions
   */
  static async queryDocuments(
    collectionName: string, 
    conditions: QueryConstraint[]
  ) {
    try {
      if (adminDb) {
        // Admin SDK: we don't attempt to map client QueryConstraint objects to admin queries.
        // Fetch all documents and return; callers using constraints will be served full data.
        const snap = await adminDb.collection(collectionName).get();
        return snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));
      }

      const collectionRef = clientCollection(db, collectionName);
      const q = clientQuery(collectionRef, ...conditions);
      const querySnapshot = await clientGetDocs(q);

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error querying ${collectionName}:`, error);
      throw error;
    }
  }
}

export { db };
