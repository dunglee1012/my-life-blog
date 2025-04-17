import { useEffect, useState } from "react";
import { useFireBaseAuthState } from "@/hooks/auth/useAuth";
import { getUserProfile } from "@/services/users/userService";

export const useUserProfile = () => {
    const { user, loading: authLoading } = useFireBaseAuthState();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authLoading) {
            if (user) {
                getUserProfile(user.uid).then((data) => {
                    setProfile(data);
                }).finally(() => {
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        }
    }, [user, authLoading]);

    return { profile, loading };
};
