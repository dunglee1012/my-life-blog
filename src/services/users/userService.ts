import { db } from "@root/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const getUserProfile = async (uid: string) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
};
