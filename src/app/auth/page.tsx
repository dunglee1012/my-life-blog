"use client";
import { translate } from "@/locales/locale";
import { useLogin } from "@/hooks/auth/useLogin";
import Link from "next/link";
import SocialAuthButton from "@/components/SocialAuthButton";
import FormInput from '@/components/FormInput';

export default function LoginPage() {
	const {
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
	} = useLogin();

	return (
		<div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto" />
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					{translate("login.welcome_title")}
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleLogin} className="space-y-6">
					{/* Email*/}
					<FormInput
						label={translate("login.username")} name="email" value={email}
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
						label={translate("login.password")} name="password" type="password" value={password}
						error={passwordError} placeholder="Enter Password" inputClassName=""
						onChange={(val) => {
							setPassword(val);
							if (passwordError && val.trim() !== "") {
								setPasswordError("");
							}
						}}
					/>
					{/* Error Submit Message*/}
					{error && <p className="text-sm text-red-500">{error}</p>}
					{/* Submit Button*/}	
					<div>
						<button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 
							font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 
							focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							{translate("login.submit")}
						</button>
					</div>
					
					<SocialAuthButton
						text1={translate("login.google_title")}
						text2={translate("login.linkden_title")}
						text3={translate("login.facebook_title")}
					/>
				</form>
			</div>

			<div className="text-center mt-10">
				<p className="text-sm/6 text-gray-500">{translate("login.not_a_member")}
					<a href="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						{translate("login.sign_up")}
					</a>
				</p>
				<p className="text-sm/6 text-gray-500">
					<a href="/auth/forgotpassword" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						{translate("login.forgot_password")}
					</a>
				</p>
			</div>
		</div>
	);
}
