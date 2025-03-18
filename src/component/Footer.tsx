
export default function Footer() {
    const linkClass = "font-bold rounded-lg px-3 py-2 color: var(--foreground) hover:bg-gray-100 hover:text-gray-900";
    return (
        <div className="flex justify-center space-x-10">
            <a href="/about" className={linkClass}>About Me</a>
            <a href="/contact" className={linkClass}>My Contact</a>
        </div>
    );
};