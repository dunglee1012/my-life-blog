import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@root/firebaseConfig";
import { translate } from "@/locales/locale";
import { validateLogin } from "@/utils/validateLogin";

export const useSignUp = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
        age: "",
        created_at: new Date(),
    });

    const [userError, setUserError] = useState({
        firstnameError: "",
        lastnameError: "",
        phoneError: "",
        addressError: "",
        ageError: "",
    });

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset error states
        setEmailError("");
        setPasswordError("");
        setUserError({
            firstnameError: "",
            lastnameError: "",
            phoneError: "",
            addressError: "",
            ageError: "",
        });
        setError("");

        // Validate email and password
        const { isValid, errors } = validateLogin(email, password);
        if (!isValid) {
            if (errors.email) setEmailError(errors.email);
            if (errors.password) setPasswordError(errors.password);
            return;
        }

        // Validate user profile (e.g., firstname, lastname, etc.)
        const { isProfileValid, profileErrors } = validateProfile(user);
        if (!isProfileValid) {
            setUserError(profileErrors); // Set profile-specific errors
            return;
        }

        setLoading(true);

        try {
            // Create a new user in Firebase Authentication
            await createUserWithEmailAndPassword(auth, email, password);

            // Redirect to home page
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

    return {
        email,
        password,
        emailError,
        passwordError,
        user,
        userError,
        error,
        setEmail,
        setPassword,
        setUser,
        setUserError,
        handleSignUp,
        loading,
    };
};

// Dummy validateProfile function for illustration
const validateProfile = (user: any) => {
    let isValid = true;
    const profileErrors: any = {};

    // Check if user profile fields are filled out
    if (!user.firstname) {
        isValid = false;
        profileErrors.firstnameError = "First name is required.";
    }
    if (!user.lastname) {
        isValid = false;
        profileErrors.lastnameError = "Last name is required.";
    }
    if (!user.phone) {
        isValid = false;
        profileErrors.phoneError = "Phone number is required.";
    }
    if (!user.address) {
        isValid = false;
        profileErrors.addressError = "Address is required.";
    }
    if (!user.age) {
        isValid = false;
        profileErrors.ageError = "Age is required.";
    }

    return { isProfileValid: isValid, profileErrors };
};
