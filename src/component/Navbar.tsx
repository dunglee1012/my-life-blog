export default function Navbar() {
    const linkClass = "font-bold rounded-lg px-3 py-2 color: var(--foreground) hover:bg-gray-100 hover:text-gray-900";
    return (
        <nav className="flex justify-center space-x-10">
            <a href="/home" className={linkClass}>My Home</a>
            <a href="/blog" className={linkClass}>My Blog</a>
            <a href="/story" className={linkClass}>My Life Story</a>
            <a href="/education" className={linkClass}>My Education</a>
            <a href="/work" className={linkClass}>My Work</a>
            <a href="/secret" className={linkClass}>My Secret</a>
        </nav>
    );
}
