"use client"
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/services/blogs";
import { Blog } from "@/interfaces/blog";
import { formatDate, truncateText, capitalizeFirstLetter } from "@/utils/helper";
import BlogCard from "@/components/BlogCard";
import { translate } from "@/locales/locale";

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
                console.error("Error fetching blogs:", error);
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
                <img src="/asset/home-banner.jpg" alt="banner" className="w-full max-w-screen-xl mx-auto" />
                <p className="items-center text-center text-2xl">
                    { translate("homepage.title") }
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
                    { translate("homepage.section_blog_latest") }
                </h2>
                {loading ? (
                    <p className="text-center text-gray-500 text-lg">
                        { translate("homepage.page_loading") }
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {blogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                title={capitalizeFirstLetter(blog.title)}
                                description={truncateText(blog.description)}
                                title_image={blog.title_image}
                                date_created={formatDate(blog.date_created)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main >
    );
};