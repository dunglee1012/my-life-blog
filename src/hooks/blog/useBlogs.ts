import { useEffect, useState } from "react";
import { fetchBlogs } from "@/services/blogs";
import { Blog } from "@/interfaces/blog";

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs();
                setBlogs(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to fetch blogs.");
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    return { blogs, error, loading };
};
