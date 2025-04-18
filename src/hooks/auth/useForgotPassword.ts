import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@root/firebaseConfig";
import { translate } from "@/locales/locale";
import { validateEmail } from "@/utils/validateLogin";

export const useForgotPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setEmailError("");

        const { isValid, errors } = validateEmail(email);

        if (!isValid) {
            if (errors.email) setEmailError(errors.email);
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            router.push("/auth");
        } catch (err: any) {
            let message = translate("error.error_default");

            if (err.code === "auth/user-not-found") {
                message = translate("error.error_user_not_found");
            } else if (err.code === "auth/wrong-password") {
                message = translate("error.error_wrong_password");
            } else if (err.code === "auth/invalid-email") {
                message = translate("error.error_invalid_email");
            } else if (err.code === "auth/invalid-credential") {
                message = translate("error.error_invalid_credential");
            } else if (err.code === "auth/too-many-requests") {
                message = translate("error.error_too_many_requests");
            }

            setError(message);
        }
    };

    return {
        email,
        error,
        emailError,
        setEmail,
        setEmailError,
        handleForgotPassword,
    };
};
