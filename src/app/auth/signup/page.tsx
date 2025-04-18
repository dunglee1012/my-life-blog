"use client";
import { translate } from "@/locales/locale";
import { useSignUp } from "@/hooks/auth/useSignUp";
import SocialAuthButton from "@/components/SocialAuthButton";
import FullScreenLoading from "@/components/FullScreenLoading";

export default function SignUpPage() {
    const {
        email,
        emailError,
        error,
        password,
        passwordError,
        setEmail,
        setEmailError,
        setPassword,
        setPasswordError,
        handleSignUp,
        loading
    } = useSignUp();

    if (loading) {
        return <FullScreenLoading />;
    }

    return (
        <div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-30">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    {translate("signup.welcome_title")}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignUp} className="space-y-6">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            {translate("signup.email")}
                        </label>
                        <div className="mt-2">
                            <input
                                id="email" name="email" value={email}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                                outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                                focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (passwordError && e.target.value.trim() !== "") {
                                        setEmailError("");
                                    }
                                }}
                            />
                            {emailError && (<p className="mt-1 text-sm text-red-500">{emailError}</p>)}
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                {translate("signup.password")}
                            </label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={password}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                                outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                                focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (passwordError && e.target.value.trim() !== "") {
                                        setPasswordError("");
                                    }
                                }}
                            />
                            {passwordError && (<p className="mt-1 text-sm text-red-500">{passwordError}</p>)}
                        </div>
                    </div>

                    {/* FirstName */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="firstname" className="block text-sm/6 font-medium text-gray-900">
                                {translate("signup.firstname")}
                            </label>
                        </div>
                        <div className="mt-2">
                            <input id="firstname" name="firstname" value={user.firstname}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                                outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                                focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (passwordError && e.target.value.trim() !== "") {
                                        setPasswordError("");
                                    }
                                }}
                            />
                            {passwordError && (<p className="mt-1 text-sm text-red-500">{passwordError}</p>)}
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 
                            font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {translate("signup.submit")}
                        </button>
                    </div>

                    <SocialAuthButton
                        text1={translate("signup.google_title")}
                        text2={translate("signup.linkden_title")}
                        text3={translate("signup.facebook_title")}
                    />

                    <div>
                        <p className="mt-10 text-center text-sm/6 text-gray-500">{translate("signup.already_member")}
                            <a href="/auth" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                {translate("signup.login")}
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
