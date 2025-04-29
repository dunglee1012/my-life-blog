import { User } from "@/interfaces/user";
import { translate } from "@/locales/locale";
import { formatDate } from './helper';

export interface LoginValidationResult {
    isValid: boolean;
    errors: {
        email?: string;
        password?: string;
    };
}

export interface UserValidationResult {
    isUserValid: boolean;
    errorsUser: {
        firstname?: string;
        lastname?: string;
        phone?: string;
        age?: string;
        address?: string;
        dob? : string;
    };
}

export const validateLogin = (email: string, password: string): LoginValidationResult => {
    const errors: Record<string, string> = {};
    let isValid = true;

    if (!email) {
        errors.email = translate("error.error_missing");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = translate("error.error_password_regex");
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

export const validateUser = (user: any): UserValidationResult => {
    const errorsUser: Record<string, string> = {};
    let isUserValid = true;
    if (!user.firstname || user.firstname.trim() === "") {
        errorsUser.firstname = "What's your name sir?";
        isUserValid = false;
    }else if (!/^[A-Za-z\s]+$/.test(user.firstname)) {
        errorsUser.firstname = "Not a real name";
        isUserValid = false;
    }

    if (!user.lastname || user.lastname.trim() === "") {
        errorsUser.lastname = "What's your family name sir?";
        isUserValid = false;
    }else if (!/^[A-Za-z\s]+$/.test(user.lastname)) {
        errorsUser.lastname = "Not a real name";
        isUserValid = false;
    }

    if (!user.phone || user.phone.trim() === "") {
        errorsUser.phone = "I swear i won't call you at midnight";
        isUserValid = false;
    } else if (!/^(0\d{9,10})$/.test(user.phone.trim())) {
        errorsUser.phone = "Not a valid number";
        isUserValid = false;
    }

    if (!user.age || user.age.toString().trim() === "") {
        errorsUser.age = "Don't be a 'child'";
        isUserValid = false;
    }

    if (!user.address || user.address.trim() === "") {
        errorsUser.address = "You can't be homeless are u?";
        isUserValid = false;
    }

    if (!user.dob || isNaN(new Date(user.dob).getTime())) {
        errorsUser.dob = "Doesn't everyone remember?";
        isUserValid = false;
    }else{ 
        const dobDate = new Date(user.dob);
        const today = new Date();
        if (dobDate  > today) {
            errorsUser.dob = "Are u really from future?";
            isUserValid = false;
        }
    }
    console.log(errorsUser);
    return { isUserValid, errorsUser };
};

