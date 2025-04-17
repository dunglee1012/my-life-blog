import { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "@root/firebaseConfig";


export type TabType = 'profile' | 'settings';
export const useMyPage = () => {

    const [selectedTab, setSelectedTab] = useState<TabType>('profile');
    useEffect(() => {
        const hash = window.location.hash.replace('#', '') as TabType;
        if (hash) {
            setSelectedTab(hash);
        }
    }, []);

    const handleChangeTab = (tab: TabType) => {
        setSelectedTab(tab);
        window.location.hash = tab;
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            sayGoodbye();
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        } catch (error) {
            console.error("Sign out error: ", error);
        }
    };

    function sayGoodbye() {
        alert("See you again, I'm gonna miss you 😢😢😢");
    }

    return {
        selectedTab, handleChangeTab, handleSignOut
    }
};
