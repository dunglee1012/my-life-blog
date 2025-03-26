import React from "react";
import { formatDate, capitalizeFirstLetter, truncateText } from "@/utils/helper";
import { useRouter } from "next/router";

interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    title_image: string;
    date_created: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, title_image, date_created }) => {
    const router = useRouter();
    return (
        <div className="rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-200 ease-in-out bg-gray-50 flex flex-col h-full">
            {/* Blog Image */}
            <img src={title_image} alt={title} className="w-full h-56 object-cover rounded-lg" />

            {/* Blog Title & Description */}
            <div className="flex flex-col flex-grow mt-3">
                <h2 className="text-md font-bold">{capitalizeFirstLetter(title)}</h2>
                <p className="text-gray-500 text-sm mt-2">{truncateText(description, 150)}</p>
            </div>

            {/* Bottom Section - Date & Read More Link */}
            <div className="flex justify-between items-center mt-auto pt-4">
                <p className="text-gray-600 text-sm">{formatDate(date_created)}</p>
                <button
                    onClick={() => router.push(`/blog/${id}`)}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
