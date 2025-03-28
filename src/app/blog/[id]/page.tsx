"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBlogById } from "@/services/blogs";
import { Blog } from "@/interfaces/blog";

export default function BlogDetail() {
    const params = useParams();
    const id = params?.id as string;

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;

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

    if (loading)
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
            </div>
        );

    if (!blog)
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-lg text-red-500 font-semibold">404 - Blog Not Found</p>
            </div>
        );

    return (
        <div className="max-w-full md:max-w-4xl lg:max-w-5xl h-auto mx-auto p-6">
            <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
            <p className="text-base md:text-lg mt-4">{blog.description}</p>
            <p className="text-gray-600 mt-2">{blog.date_created}</p>
            <p className="mt-4">{blog.description}</p>
            <div className="mt-6 space-y-4">
                {blog.content.map((item, index) => (
                    <div key={index}>
                        {item.type === "text" && <p>{item.value}</p>}
                        {item.type === "image" && (
                            <img src={item.value} alt="Blog Image" className="w-full h-auto rounded-lg" />
                        )}
                        {item.type === "video" && (
                            <iframe
                                src={item.value}
                                className="w-full aspect-video rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}