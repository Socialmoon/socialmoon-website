import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let adminApp: any = null;
let adminDb: any = undefined;

const getServiceAccount = () => {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  }

  if (
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
  ) {
    return {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
  }

  return null;
};

if (typeof window === 'undefined') {
  try {
    const serviceAccount = getServiceAccount();
    const hasServerCredentials = !!serviceAccount || !!process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (hasServerCredentials) {
      if (!getApps().length) {
        adminApp = initializeApp({
          credential: serviceAccount ? cert(serviceAccount) : applicationDefault(),
        });
      } else {
        adminApp = getApps()[0];
      }

      adminDb = getFirestore(adminApp);
    }
  } catch (error) {
    console.warn('Error initializing Firebase Admin:', error);
    adminApp = null;
    adminDb = undefined;
  }
}

export { adminApp, adminDb };
