"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login" || "/auth/forgotpassword";

    return (
        <>
            <Navbar />
            {children}
            {!isLoginPage && <Footer />}
        </>
    );
}
