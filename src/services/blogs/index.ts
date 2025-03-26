import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Blog } from "@/interfaces/blog";

export const fetchBlogs = async (): Promise<Blog[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.Title,
                category: data.Category,
                description: data.Description,
                title_image: data["Title Image"],
                content: data.Content || [],
                date_created: data["Date Created"]?.toDate().toISOString() || "",
                read_time: data["Read Time"],
            };
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const fetchBlogById = async (id: string) => {
    try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No such blog!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching blog:", error);
        throw error;
    }
};
