"use client"
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/services/blogs";
import { Blog } from "@/interfaces/blog";
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
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl m-auto">

            <div className="w-full md:w-3/4 sm:w-full p-4 flex flex-col">
                <div className="text-center md:h-20 p-4 m-4">
                    <h1 className="text-4xl font-bold">From the blog</h1>
                    <p className="text-lg text-gray-500">All the blogs so far...</p>
                </div>
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

            {/* Vertical Divider */}
            <div className="w-px bg-gray-300 mx-4 hidden md:block"></div>

            <div className="w-full md:w-1/4 sm:4/4 p-4 flex flex-col">
                <div className="md:h-20 p-4 m-4">
                    <h1 className="text-4xl font-bold">Latest</h1>
                    <p className="text-lg text-gray-500">Don't miss the news</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                    {leatestPosts.map((blog) => (
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
            </div>
        </div>

    );
}

export const leatestPosts = [
    {
        id: "1",
        title: "Transform your winter blues into winter creativity",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        title_image: "/home/image1.jpg",
        date: "March 21, 2025",
        date_created: "2 min",
    },
    {
        id: "12",
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        title_image: "/home/image1.jpg",
        date: "March 21, 2025",
        date_created: "2 min",
    },
    {
        id: "123",
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        title_image: "/home/image1.jpg",
        date: "March 21, 2025",
        date_created: "2 min",
    },
]