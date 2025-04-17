import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@root/firebaseConfig";
import { translate } from "@/locales/locale";
import { validateLogin } from "@/utils/validateLogin";

export const useLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setEmailError("");
        setPasswordError("");

        const { isValid, errors } = validateLogin(email, password);

        if (!isValid) {
            if (errors.email) setEmailError(errors.email);
            if (errors.password) setPasswordError(errors.password);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/home");
        } catch (err: any) {
            let message = translate("login.error_default");

            if (err.code === "auth/user-not-found") {
                message = translate("login.error_user_not_found");
            } else if (err.code === "auth/wrong-password") {
                message = translate("login.error_wrong_password");
            } else if (err.code === "auth/invalid-email") {
                message = translate("login.error_invalid_email");
            } else if (err.code === "auth/invalid-credential") {
                message = translate("login.error_invalid_credential");
            } else if (err.code === "auth/too-many-requests") {
                message = translate("login.error_too_many_requests");
            }

            setError(message);
        }
    };

    return {
        email,
        password,
        error,
        emailError,
        passwordError,
        setEmail,
        setEmailError,
        setPassword,
        setPasswordError,
        handleLogin,
    };
};
