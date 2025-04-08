// utils/validateLogin.ts

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
        errors.email = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email format.";
        isValid = false;
    }

    if (!password) {
        errors.password = "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
        isValid = false;
    }

    return { isValid, errors };
};
