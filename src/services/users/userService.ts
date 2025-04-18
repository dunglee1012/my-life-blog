import { db } from "@root/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "@/interfaces/user"

export const getUserProfile = async (uid: string): Promise<User | null> => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
        const data = snap.data();

        const userProfile: User = {
            uid: data.uid,
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            address: data.address,
            email: data.email,
            age: data.age,
            created_at: data.created_at.toDate(),
        };
        return userProfile;
    }
    return null;
};

export const createUser = async (user: User): Promise<User | null> => {
    const { uid, email, firstname, lastname, phone, address, age } = user;

    const userProfile: User = {
        uid,
        email,
        firstname,
        lastname,
        phone,
        address,
        age,
        created_at: new Date()
    };

    try {
        const ref = doc(db, "users", uid);
        await setDoc(ref, userProfile);
        return userProfile;
    } catch (error) {
        console.error("Error creating user: ", error);
        return null;
    }
};