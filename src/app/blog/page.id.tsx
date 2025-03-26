import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchBlogById } from "@/services/blogs";
import { Blog } from "@/interfaces/blog";

export default function BlogDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!id || typeof id !== "string") return;

            console.log(`Fetching blog for ID: ${id}`);
            try {
                const data = await fetchBlogById(id);
                console.log("Fetched Blog:", data);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (!blog) return <p className="text-center text-red-500">404 - Blog Not Found</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <img src={blog.title_image} alt={blog.title} className="w-full rounded-lg mb-4" />
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-gray-600 mt-2">{blog.date_created}</p>
            <p className="mt-4">{blog.description}</p>
            <div className="mt-6 space-y-4">
                {blog.content.map((item, index) => (
                    <div key={index}>
                        {item.type === "text" && <p>{item.value}</p>}
                        {item.type === "image" && <img src={item.value} alt="Blog Image" className="w-full rounded-lg" />}
                        {item.type === "video" && (
                            <video controls className="w-full rounded-lg">
                                <source src={item.value} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}