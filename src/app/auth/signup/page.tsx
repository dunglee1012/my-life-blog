"use client";
import { translate } from "@/locales/locale";
import { useSignUp } from "@/hooks/auth/useSignUp";
import SocialAuthButton from "@/components/SocialAuthButton";
import FullScreenLoading from "@/components/FullScreenLoading";
import FormInput from '@/components/FormInput';

export default function SignUpPage() {
    const {
        email, password, user, setEmail, setPassword, setUser,
        emailError, passwordError, userError, setEmailError, setPasswordError, setUserError,
        error, handleSignUp, loading
    } = useSignUp();

    if (loading) {
        return <FullScreenLoading />;
    }

    return (
        <div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">{translate("signup.welcome_title")}</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignUp} className="space-y-6">
                    <SocialAuthButton
                        text1={translate("signup.google_title")}
                        text2={translate("signup.linkden_title")}
                        text3={translate("signup.facebook_title")}
                    />

                    <label htmlFor="email" className="text-center block text-sm/6 font-medium text-gray-900">
                        {translate("signup.or")}
                    </label>

                    {/* Email*/}
                    <FormInput
                        label={translate("signup.email")} name="email" value={email}
                        error={emailError} placeholder="Enter Email" inputClassName=""
                        onChange={(val) => {
                            setEmail(val);
                            if (emailError && val.trim() !== "") {
                                setEmailError("");
                            }
                        }}
                    />

                    {/* Password*/}
                    <FormInput
                        label={translate("signup.password")} name="password" type="password" value={password}
                        error={passwordError} placeholder="Enter Password" inputClassName=""
                        onChange={(val) => {
                            setPassword(val);
                            if (passwordError && val.trim() !== "") {
                                setPasswordError("");
                            }
                        }}
                    />
                    {/* FirstName*/}
                    <div className="flex flex-row gap-4">
                        <FormInput
                            label={translate("signup.firstname")} name="firstname" value={user.firstname}
                            error={userError.firstnameError} placeholder="Enter First Name" type="text" inputClassName=""
                            onChange={(val) => {
                                setUser({ ...user, firstname: val });
                                if (userError.firstnameError && val.trim() !== "") {
                                    setUserError(prev => ({ ...prev, firstnameError: "" }));
                                }
                            }}
                        />

                        {/* LastName*/}
                        <FormInput
                            label={translate("signup.lastname")} name="lastname" value={user.lastname}
                            error={userError.lastnameError} placeholder="Enter Last Name" type="text" inputClassName=""
                            onChange={(val) => {
                                setUser({ ...user, lastname: val });
                                if (userError.lastnameError && val.trim() !== "") {
                                    setUserError(prev => ({ ...prev, lastnameError: "" }));
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row gap-4">
                        <FormInput
                            label={translate("signup.phone")} name="phone" type="text" value={user.phone}
                            error={userError.phoneError} placeholder="Enter Phone Number" inputClassName=""
                            onChange={(val) => {
                                setUser({ ...user, phone: val });
                                if (userError.phoneError && val.trim() !== "") {
                                    setUserError(prev => ({ ...prev, phoneError: "" }));
                                }
                            }}
                        />
                        <FormInput
                            label={translate("signup.dob")} name="dob" value={user.dob}
                            error={userError.dobError} type="date" inputClassName="!w-[200px] max-w-[183px]"
                            onChange={(val) => {
                                setUser({ ...user, dob: val });
                                if (userError.dobError && val.trim() !== "") {
                                    setUserError(prev => ({ ...prev, dobError: "" }));
                                }
                            }}
                        />
                    </div>
                    {/* Phone Number*/}


                    <div className="flex flex-row gap-4">
                        {/* Age dropdown – 1/4 dòng */}
                        <div className="w-3/10">
                            <FormInput
                                label={translate("signup.age")}
                                name="age"
                                type="dropdown"
                                value={user.age}
                                options={Array.from({ length: 100 }, (_, i) => (i + 1).toString())}
                                placeholder="Age"
                                error={userError.ageError}
                                inputClassName="border-r-[5px] border-r-transparent h-[36px]"
                                onChange={(val) => {
                                    setUser({ ...user, age: val });
                                    if (userError.ageError && val.trim() !== "") {
                                        setUserError(prev => ({ ...prev, ageError: "" }));
                                    }
                                }}
                            />
                        </div>

                        {/* Address */}
                        <div className="w-7/10">
                            <FormInput
                                label={translate("signup.address")}
                                name="address"
                                value={user.address}
                                error={userError.addressError}
                                placeholder="Enter your address"
                                type="text"
                                inputClassName=""
                                onChange={(val) => {
                                    setUser({ ...user, address: val });
                                    if (userError.addressError && val.trim() !== "") {
                                        setUserError(prev => ({ ...prev, addressError: "" }));
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}


                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 
                            font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {translate("signup.submit")}
                    </button>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">{translate("signup.already_member")}
                        <a href="/auth" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            {translate("signup.login")}
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
