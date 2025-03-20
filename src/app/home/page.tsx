

export default function Homepage() {
    return (
        <main className="flex flex-col w-full center">
            {/* Image banner */}
            <div className="w-full justify-center items-center flex flex-col">
                <img src="/home/home-banner.jpg" alt="banner" className="w-full max-w-screen-xl mx-auto" />
                <p className="items-center text-center text-2xl">Hello and Welcome, feel free to see something, or hang around</p>
            </div>
            {/* Blog Section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Latest blog</h2>
                <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {leatestPosts.map((post) => (
                        <div key={post.id} className="group w-full max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl overflow-hidden">
                            {/* Image Section */}
                            <div className="flex items-center">
                                <img src={post.image} alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover h-48 lg:h-64" />
                            </div>
                            {/* Content Section */}
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                {/* Date Section */}
                                <span className="text-indigo-600 font-medium mb-3 block">{post.date}</span>

                                {/* Title Section */}
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{post.title}</h4>

                                {/* Description Section */}
                                <p className="text-gray-500 leading-6 mb-10">{post.description}</p>

                                {/* Read more link */}
                                <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">
                                    Read more...
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Blogs</h2>
                <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {leatestPosts.map((post) => (
                        <div key={post.id} className="group w-full max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl overflow-hidden">
                            {/* Image Section */}
                            <div className="flex items-center">
                                <img src={post.image} alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover h-48 lg:h-64" />
                            </div>
                            {/* Content Section */}
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                {/* Date Section */}
                                <span className="text-indigo-600 font-medium mb-3 block">{post.date}</span>
                                {/* Title Section */}
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{post.title}</h4>
                                {/* Description Section */}
                                <p className="text-gray-500 leading-6 mb-10">{post.description}</p>
                                {/* Read more link */}
                                <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">
                                    Read more...
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    );
}

export const leatestPosts = [
    {
        id: 1,
        title: "Transform your winter blues into winter creativity",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 2,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 3,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
]

export const blogPosts = [
    {
        id: 1,
        title: "Transform your winter blues into winter creativity",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 2,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 3,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 4,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 5,
        title: "Transform your winter blues into winter creativity",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 6,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 7,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    },
    {
        id: 8,
        title: "5 reasons to wake up at 5am",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences.",
        image: "/home/image1.jpg",
        date: "Mar 22, 2023",
        Time: "2 min",
    }
];
