"use client";
import { useState, useEffect  } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FullScreenLoading from "./FullScreenLoading";

export default function LayoutClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname.includes("/auth");
    const [ loading, setLoading ] = useState(true);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(() => setReady(true), 100);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    if (!ready) {
        return <FullScreenLoading />;
    }

    return (
        <>
            <Navbar />
            {children}
            {!isLoginPage && <Footer />}
        </>
    );
}
