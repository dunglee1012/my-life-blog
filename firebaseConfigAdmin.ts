import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
    initializeApp({
        credential: applicationDefault(),
    });
}

const adminAuth = getAuth();
const adminDb = getFirestore();

export { adminAuth, adminDb };
