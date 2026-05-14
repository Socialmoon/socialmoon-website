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
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './config';

let adminDb: any = null;
try {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const adminModule = require('./admin');
    adminDb = adminModule.adminDb;
  }
} catch {
  adminDb = null;
}

type LocalDatabase = Record<string, Record<string, any>>;

const useLocalServerStore = () => typeof window === 'undefined' && !adminDb;

async function getLocalDbPath() {
  const path = await import('node:path');
  return path.join(process.cwd(), '.data', 'socialmoon-db.json');
}

async function readLocalDb(): Promise<LocalDatabase> {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const filePath = await getLocalDbPath();

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw || '{}');
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    return {};
  }
}

async function writeLocalDb(data: LocalDatabase) {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const filePath = await getLocalDbPath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function withId(id: string, data: any) {
  return { id, _id: data?._id || id, ...data };
}

export class FirebaseDB {
  static async getDocument(collectionName: string, docId: string): Promise<any> {
    if (adminDb) {
      const docRef = adminDb.collection(collectionName).doc(docId);
      const snap = await docRef.get();
      if (snap.exists) return withId(snap.id, snap.data());
      return null;
    }

    if (useLocalServerStore()) {
      const localDb = await readLocalDb();
      const docData = localDb[collectionName]?.[docId];
      return docData ? withId(docId, docData) : null;
    }

    const docRef = clientDoc(db, collectionName, docId);
    const docSnap = await clientGetDoc(docRef);
    return docSnap.exists() ? withId(docSnap.id, docSnap.data()) : null;
  }

  static async getCollection(collectionName: string, _constraints: QueryConstraint[] = []): Promise<any[]> {
    if (adminDb) {
      const snap = await adminDb.collection(collectionName).get();
      return snap.docs.map((docItem: any) => withId(docItem.id, docItem.data()));
    }

    if (useLocalServerStore()) {
      const localDb = await readLocalDb();
      return Object.entries(localDb[collectionName] || {}).map(([id, data]) => withId(id, data));
    }

    const collectionRef = clientCollection(db, collectionName);
    const q = _constraints.length > 0 ? clientQuery(collectionRef, ..._constraints) : collectionRef;
    const querySnapshot = await clientGetDocs(q);
    return querySnapshot.docs.map((docItem) => withId(docItem.id, docItem.data()));
  }

  static async setDocument(collectionName: string, docId: string, data: any) {
    if (adminDb) {
      const docRef = adminDb.collection(collectionName).doc(docId);
      await docRef.set(data, { merge: true });
      return withId(docId, data);
    }

    if (useLocalServerStore()) {
      const localDb = await readLocalDb();
      localDb[collectionName] = localDb[collectionName] || {};
      localDb[collectionName][docId] = { ...(localDb[collectionName][docId] || {}), ...data };
      await writeLocalDb(localDb);
      return withId(docId, localDb[collectionName][docId]);
    }

    const docRef = clientDoc(db, collectionName, docId);
    await clientSetDoc(docRef, data, { merge: true });
    return withId(docId, data);
  }

  static async addDocument(collectionName: string, data: any) {
    if (adminDb) {
      const collectionRef = adminDb.collection(collectionName);
      const docRef = await collectionRef.add(data);
      return withId(docRef.id, data);
    }

    if (useLocalServerStore()) {
      const localDb = await readLocalDb();
      const docId = createId();
      localDb[collectionName] = localDb[collectionName] || {};
      localDb[collectionName][docId] = data;
      await writeLocalDb(localDb);
      return withId(docId, data);
    }

    const collectionRef = clientCollection(db, collectionName);
    const docRef = await clientAddDoc(collectionRef, data);
    return withId(docRef.id, data);
  }

  static async updateDocument(collectionName: string, docId: string, data: any) {
    if (adminDb) {
      const docRef = adminDb.collection(collectionName).doc(docId);
      await docRef.update(data);
      return withId(docId, data);
    }

    if (useLocalServerStore()) {
      const localDb = await readLocalDb();
      localDb[collectionName] = localDb[collectionName] || {};
      localDb[collectionName][docId] = { ...(localDb[collectionName][docId] || {}), ...data };
      await writeLocalDb(localDb);
      return withId(docId, localDb[collectionName][docId]);
    }

    const docRef = clientDoc(db, collectionName, docId);
    await clientUpdateDoc(docRef, data);
    return withId(docId, data);
  }

  static async deleteDocument(collectionName: string, docId: string) {
    if (adminDb) {
      const docRef = adminDb.collection(collectionName).doc(docId);
      await docRef.delete();
      return { success: true };
    }

    if (useLocalServerStore()) {
      const localDb = await readLocalDb();
      if (localDb[collectionName]) delete localDb[collectionName][docId];
      await writeLocalDb(localDb);
      return { success: true };
    }

    const docRef = clientDoc(db, collectionName, docId);
    await clientDeleteDoc(docRef);
    return { success: true };
  }

  static async queryDocuments(collectionName: string, conditions: QueryConstraint[]) {
    return this.getCollection(collectionName, conditions);
  }
}

export { db };
