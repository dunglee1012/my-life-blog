"use client"
import { formatDate, truncateText, capitalizeFirstLetter } from "@/utils/helper";
import BlogCard from "@/components/BlogCard";
import { translate } from "@/locales/locale";
import { useUserProfile } from "@/hooks/user/hookUser";
import FullScreenLoading from "@/components/FullScreenLoading";
import { useBlogs } from '@/hooks/blog/useBlogs';

export default function Homepage() {
    const {
        blogs,
        error,
        loading
    } = useBlogs();
    const { profile } = useUserProfile();

    if (loading) {
        return (<FullScreenLoading />
        );
    }

    return (
        <main className="flex flex-col w-full center mb-10">
            <div className="w-full justify-center items-center flex flex-col">
                {profile ? (
                    <p className="items-center text-center text-3xl mt-8">
                        {translate("homepage.welcome_user")} {profile.firstname} {profile.lastname}!
                    </p>
                ) : ("")}
                <img src="/asset/home-banner.jpg" alt="banner" className="w-full max-w-screen-xl mx-auto" />
                <p className="items-center text-center text-2xl">
                    {translate("homepage.title")}
                </p>
            </div>
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
                    {translate("homepage.section_blog_latest")}
                </h2>

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
            </div>
        </main >
    );
};