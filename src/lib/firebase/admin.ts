let admin: any = null;
let adminApp: any = null;
let adminDb: any = undefined;

if (typeof window === 'undefined') {
  try {
    const hasServerCredentials = !!process.env.FIREBASE_SERVICE_ACCOUNT || !!process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (!hasServerCredentials) {
      adminDb = undefined;
    } else {
    // Dynamically require to avoid bundler trying to resolve this on the client
    // Use eval to prevent bundlers from statically analyzing the require call
    // eslint-disable-next-line no-eval
    const req: any = eval('require');
    admin = req('firebase-admin');

    if (!admin.apps.length) {
      if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        const svc = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);
        adminApp = admin.initializeApp({
          credential: admin.credential.cert(svc),
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
