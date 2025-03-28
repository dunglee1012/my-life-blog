"use client";
import { useRouter } from "next/navigation";
import "@/styles/frontpage.css";
import { translate } from "@/locales/locale";


export default function FrontPage() {
    const router = useRouter();

    return (
        <main className="relative w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="absolute inset-0 flex w-full h-full gap-2">
                <div className="w-1/3 h-full">
                    <img src="/asset/image1.jpg" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/3 h-full">
                    <img src="/asset/image1.jpg" alt="Image 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/3 h-full">
                    <img src="/asset/image1.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div className="bg-white w-3/5 text-center p-6 shadow-lg">
                    <h2 className="font-ptserif text-5xl font-bold text-gray-900">
                        {translate("front_page.title")}
                    </h2>
                </div>
            </div>
        </main>
    );
}
