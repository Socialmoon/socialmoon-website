import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

async function createSuperAdmin() {
  const username = process.env.SUPERADMIN_USERNAME || 'superadmin';
  const password = process.env.SUPERADMIN_PASSWORD;

  if (!password) {
    console.error('❌ SUPERADMIN_PASSWORD env var is required. Add it to .env.local and retry.');
    process.exit(1);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const superAdmin = {
      username,
      password: hashedPassword,
      role: 'superadmin',
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, 'admins'), superAdmin);
    console.log('✅ Superadmin created successfully!');
    console.log('Username:', username);
    console.log('Document ID:', docRef.id);
    console.log('\n⚠️  Keep your password safe and do not share it.');
  } catch (error) {
    console.error('❌ Error creating superadmin:', error);
  }
}

createSuperAdmin();
