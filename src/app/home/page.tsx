"use client"
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/services/blogs";
import { Blog } from "@/interfaces/blog";
import { formatDate, truncateText, capitalizeFirstLetter } from "@/utils/helper";
import BlogCard from "@/components/BlogCard";

export default function Homepage() {
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

    return (
        <main className="flex flex-col w-full center">
            <div className="w-full justify-center items-center flex flex-col">
                <img src="/home/home-banner.jpg" alt="banner" className="w-full max-w-screen-xl mx-auto" />
                <p className="items-center text-center text-2xl">Hello and Welcome, feel free to see something, or hang around</p>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Latest blog</h2>
                {loading ? (
                    <p className="text-center text-gray-500 text-lg">Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {blogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                title={blog.title}
                                description={blog.description}
                                title_image={blog.title_image}
                                date_created={blog.date_created}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main >
    );
};