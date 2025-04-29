import { db } from "@root/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { User } from "@/interfaces/user"
const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
};
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
            dob: data.dob.toDate().toLocaleDateString("en-US", dateFormat),
            createAt: data.createAt instanceof Timestamp ? data.createAt.toDate() : new Date(),
        };
        return userProfile;
    }
    return null;
};

export const createUser = async (user: User): Promise<User | null> => {
    const { uid, email, firstname, lastname, phone, address, age, dob } = user;

    const userProfile: User = {
        uid,
        email,
        firstname,
        lastname,
        phone,
        address,
        age,
        dob: new Date(),
        createAt: new Date()
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