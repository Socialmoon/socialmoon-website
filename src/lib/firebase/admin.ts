let admin: any = null;
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

    if (!hasServerCredentials) {
      adminDb = undefined;
    } else {
    // Dynamically require to avoid bundler trying to resolve this on the client
    // Use eval to prevent bundlers from statically analyzing the require call
    // eslint-disable-next-line no-eval
    const req: any = eval('require');
    admin = req('firebase-admin');

    if (!admin.apps.length) {
      if (serviceAccount) {
        adminApp = admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        adminApp = admin.initializeApp();
      }
    } else {
      adminApp = admin.apps[0];
    }

    if (adminApp) {
      adminDb = adminApp.firestore();
    }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Error initializing Firebase Admin (dynamic require):', e);
    admin = null;
    adminApp = null;
    adminDb = undefined;
  }
}

export { admin, adminApp, adminDb };
