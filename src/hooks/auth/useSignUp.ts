import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@root/firebaseConfig";
import { translate } from "@/locales/locale";
import { validateLogin, validateUser } from "@/utils/validateLogin";
import { User } from "@/interfaces/user";
import { createUser } from "@/services/users/userService";

export const useSignUp = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({ firstname: "", lastname: "", phone: "", address: "", age: "" , dob: ""});
    const [userError, setUserError] = useState({ firstnameError: "", lastnameError: "", phoneError: "", addressError: "", ageError: "", dobError: "" });

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(user.dob);
        setError("");
        setEmailError("");
        setPasswordError("");
        setUserError({ firstnameError: "", lastnameError: "", phoneError: "", addressError: "", ageError: "", dobError: "" });

        const  isAllValid = handleValidation();
        
        if (!isAllValid) return console.log("isAllValid",isAllValid);

        try {
            const userCredential  = (await createUserWithEmailAndPassword(auth, email, password)).user;
            
            const userProfile: User = {
                uid: userCredential.uid,
                email,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                address: user.address,
                age: user.age,
                dob: new Date(user.dob),
                createAt: new Date(),
            };
            console.log(userProfile);
            const user1 = await createUser(userProfile);
            
            console.log(user1);
            router.push("/home");
        } catch (err: any) {
            let message = translate("error.error_default");
            if (err.code === "auth/email-already-in-use") {
                message = translate("error.error_email_in_use");
            } else if (err.code === "auth/weak-password") {
                message = translate("error.error_weak_password");
            } else if (err.code === "auth/invalid-email") {
                message = translate("error.error_invalid_email");
            }
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    const handleValidation = (): boolean => {
        const { isValid, errors } = validateLogin(email, password);
        const { isUserValid, errorsUser } = validateUser(user);

        if (!isValid) {
            setEmailError(errors.email || "");
            setPasswordError(errors.password || "");
        }

        if (!isUserValid) {
            setUserError({
                firstnameError: errorsUser.firstname || "",
                lastnameError: errorsUser.lastname || "",
                phoneError: errorsUser.phone || "",
                ageError: errorsUser.age || "",
                addressError: errorsUser.address || "",
                dobError: errorsUser.dob || "",
            });
        }
        console.log("isValid",isValid);
        console.log("isUserValid",isUserValid);
        return isValid && isUserValid;
    };


    return {
        email,
        password,
        emailError,
        passwordError,
        setEmail,
        setEmailError,
        setPassword,
        setPasswordError,
        user,
        userError,
        setUser,
        setUserError,
        handleSignUp,
        error,
        loading,
    };
};