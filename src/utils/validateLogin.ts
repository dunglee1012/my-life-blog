import { translate } from "@/locales/locale";

export interface LoginValidationResult {
    isValid: boolean;
    errors: {
        email?: string;
        password?: string;
    };
}

export const validateLogin = (email: string, password: string): LoginValidationResult => {
    const errors: Record<string, string> = {};
    let isValid = true;

    if (!email) {
        errors.email = translate("error.error_missing");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = translate("error.error_invalid_email");
        isValid = false;
    }

    if (!password) {
        errors.password = translate("error.error_password_missing");
        isValid = false;
    } else if (password.length < 8) {
        errors.password = translate("error.error_password_invalid");
        isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)) {
        errors.password = translate("error.error_password_regex");
        isValid = false;
    }

    return { isValid, errors };
};

export const validateEmail = (email: string): LoginValidationResult => {
    const errors: Record<string, string> = {};
    let isValid = true;

    if (!email) {
        errors.email = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email format.";
        isValid = false;
    }

    return { isValid, errors };
};