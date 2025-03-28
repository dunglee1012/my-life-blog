import { translate } from "@/locales/locale";

export default function Footer() {
    const linkClass = "font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900";

    return (
        <div className="relative bottom-0 left-0 w-full bg-white shadow-md py-4 flex justify-center space-x-10 z-50">
            <a href="/about" className={linkClass}>
                {translate("footer.about_me")}
            </a>
            <a href="/contact" className={linkClass}>
                {translate("footer.contact")}
            </a>
        </div>
    );
}
