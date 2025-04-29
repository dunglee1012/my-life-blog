"use client";
import { translate } from "@/locales/locale";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";
import FormInput from "@/components/FormInput";

const ForgotPasswordPage = () => {
	const {
		email,
		error,
		emailError,
		setEmail,
		setEmailError,
		handleForgotPassword,
	} = useForgotPassword();
	
	return (
		<div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto" />
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					{translate("forgot_password.welcome_title")}
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleForgotPassword} className="space-y-6">
					<FormInput
						label={translate("forgot_password.email")} name="email" type="text" value={email}
						error={emailError} placeholder="Enter Your Email Here" inputClassName=""
						onChange={(val) => {
							setEmail(val);
							if (emailError && val.trim() !== "") {
								setEmailError("");
							}
						}}
					/>

					{error && <p className="text-sm text-red-500">{error}</p>}

					<div>
						<button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 
							font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 
							focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							{translate("forgot_password.send_reset_link")}
						</button>
					</div>
				</form>
			</div>

			<div className="text-center mt-10">
				<p className="text-sm/6 text-gray-500">{translate("login.not_a_member")}
					<a href="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						{translate("forgot_password.sign_up")}
					</a>
				</p>
				<p className="text-sm/6 text-gray-500">
					<a href="/auth" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						{translate("forgot_password.login")}
					</a>
				</p>
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
