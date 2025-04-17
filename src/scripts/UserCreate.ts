import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
    credential: applicationDefault(),
});

const auth = getAuth();
const db = getFirestore();

const users = [
    {
        email: "alice@example.com",
        password: "alice123",
        firstname: "Alice",
        lastname: "Nguyen",
        age: 25,
    },
    {
        email: "bob@example.com",
        password: "bob123",
        firstname: "Bob",
        lastname: "Tran",
        age: 30,
    },
    {
        email: "carol@example.com",
        password: "carol123",
        firstname: "Carol",
        lastname: "Pham",
        age: 22,
    },
];

const createUsers = async () => {
    for (const user of users) {
        const userRecord = await auth.createUser({
            email: user.email,
            password: user.password,
            displayName: `${user.firstname} ${user.lastname}`,
        });

        console.log(`✅ Auth created for ${user.email}`);

        await db.collection("users").doc(userRecord.uid).set({
            uid: userRecord.uid,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            createdAt: new Date(),
        });

        console.log(`✅ Firestore profile created for ${user.email}`);
    }

    console.log("🎉 Done seeding users with profiles!");
};

createUsers().catch(console.error);
