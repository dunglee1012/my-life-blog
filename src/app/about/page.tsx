export default function About() {
    return (
        <main className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Introduction Section */}
                <section className="text-justify">
                    <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6">About Me</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Hi there! I'm Dung, a junior software developer from SmartOSC. Thank you for visiting my site.
                        This is where I showcase my photography, share my thoughts, and connect with others who share my
                        interests. I hope you enjoy your time here and feel free to reach out if you have any questions or
                        just want to chat.
                    </p>
                    <hr className="border-t-1 border-gray-800 my-8" />
                    {/* Images below the paragraph */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <img src="/asset/image1.jpg" alt="image1" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image2" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image3" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image4" className="w-full h-auto object-cover rounded-lg" />
                    </div>

                    <p className="text-lg text-gray-700 mb-4">
                        My journey into photography started when I was in a charity club of FPT high school, it took times to explore my surroundings and capturing
                        the beauty of human works. Over time, I find joy in the process of creating something
                        beautiful and meaningful, and I hope my work reflects that.
                    </p>

                    <hr className="border-t-1 border-gray-800 my-8" />

                    {/* Images below the paragraph */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <img src="/asset/image1.jpg" alt="image5" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image6" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image7" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image8" className="w-full h-auto object-cover rounded-lg" />
                    </div>

                    <p className="text-lg text-gray-700 mb-4">
                        Outside of capturing the scenery, one of my favorite after that is filming and editing. The process of
                        creating a video is a lot of challenge, and I love the challenge of telling a story through visuals and sound.
                        Christopher Nolan is a huge inspirer, What Christopher Nolan does best in his films is leave the viewer asking questions; he makes the audience wonder, “what in the world just happened?” Often, my mind almost feels twisted and bent out of proportion. For many of his movies, such as “Tenet” or “Inception,” I’ve had to watch a video explaining the plot to me, and once I know what’s really going on, the second watch is one of pure appreciation for Nolan’s art..
                    </p>
                    <hr className="border-t-1 border-gray-800 my-8" />

                    {/* Images below the paragraph */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <img src="/asset/image1.jpg" alt="image9" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image10" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image11" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image12" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <p className="text-lg text-gray-700">
                        I’m constantly striving to improve my craft and learn new techniques in photography, editing, and even
                        in gaming industry (sometimes). There’s always something new to discover, haha. I got 3600 MMR in Dota 2
                        and I'm proud of it, still a noob but always improving. I also love playing triple A games and some other indies.
                    </p>
                    <hr className="border-t-1 border-gray-800 my-8" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <img src="/asset/image1.jpg" alt="image9" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image10" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image11" className="w-full h-auto object-cover rounded-lg" />
                        <img src="/asset/image1.jpg" alt="image12" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <p className="text-lg text-gray-700">
                        And of course, the most important part in the life of a developer is coding. Life at SmartOSC is the first challenge
                        for me haha, and I love it. Currently, I'm working with Next.js and React.js with Firebase. A full-stack developer
                        dream might be some day come true (maybe). Always open to new opportunities and challenges, so feel free to reach out.
                    </p>
                </section>

                {/* CV Section */}
                <section className="">
                    <p className="text-left text-lg text-gray-700 mb-4">Here is my CV:</p>
                    <embed src="/asset/CV_LeNguyenQuangDung_JuniorSoftwareDeveloper.pdf.pdf" type="application/pdf" width="100%" height="600px" />
                </section>
            </div>
        </main>
    );
}