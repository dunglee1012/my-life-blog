

export default function Homepage() {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl m-auto">

            <div className="w-full md:w-3/4 sm:w-full p-4 flex flex-col">
                <div className="text-center md:h-20 p-4 m-4">
                    <h1 className="text-4xl font-bold">From the blog</h1>
                    <p className="text-lg text-gray-500">All the blogs so far...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-200 ease-in-out bg-gray-50">
                            <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded-lg" />
                            <h2 className="text-xl font-bold mt-3">{post.title}</h2>
                            <p className="text-gray-500 text-sm mt-2">{post.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-gray-600 text-sm">{post.date} - {post.Time}</p>
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition duration-200">More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-gray-300 mx-4 hidden md:block"></div>

            <div className="w-full md:w-1/4 sm:4/4 p-4 flex flex-col">
                <div className="md:h-20 p-4 m-4">
                    <h1 className="text-4xl font-bold">Latest</h1>
                    <p className="text-lg text-gray-500">Don't miss the news</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                    {leatestPosts.map((post) => (
                        <div key={post.id} className="rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-200 ease-in-out bg-gray-50">
                            <img src={post.image} alt={post.title} className="w-full h-36 object-cover rounded-lg" />
                            <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                            <p className="text-gray-500 text-sm mt-2">{post.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-gray-600 text-sm">{post.date} - {post.Time}</p>
                                <a href="#" className="text-blue-600 font-semibold"> more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

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
