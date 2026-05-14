import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

const hasValue = (value?: string) => Boolean(value && value.trim().length > 0);

export async function GET() {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  let serviceAccountJsonValid = false;
  let serviceAccountHasRequiredFields = false;

  if (serviceAccount) {
    try {
      const parsed = JSON.parse(serviceAccount);
      serviceAccountJsonValid = true;
      serviceAccountHasRequiredFields = Boolean(
        parsed.project_id &&
          parsed.client_email &&
          parsed.private_key,
      );
    } catch {
      serviceAccountJsonValid = false;
    }
  }

  return NextResponse.json({
    firebaseAdminReady: Boolean(adminDb),
    nodeEnv: process.env.NODE_ENV,
    hasFirebaseServiceAccount: hasValue(serviceAccount),
    serviceAccountJsonValid,
    serviceAccountHasRequiredFields,
    hasSplitFirebaseProjectId: hasValue(process.env.FIREBASE_PROJECT_ID),
    hasSplitFirebaseClientEmail: hasValue(process.env.FIREBASE_CLIENT_EMAIL),
    hasSplitFirebasePrivateKey: hasValue(process.env.FIREBASE_PRIVATE_KEY),
    hasGoogleApplicationCredentials: hasValue(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    hasPublicFirebaseProjectId: hasValue(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  });
}
