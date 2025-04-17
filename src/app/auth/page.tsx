"use client";
import { translate } from "@/locales/locale";
import { useLogin } from "@/hooks/auth/useLogin";
import Link from "next/link";

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
		<div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-30">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto" />
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					{translate("login.welcome_title")}
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleLogin} className="space-y-6">
					<div>
						<label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
							{translate("login.username")}
						</label>
						<div className="mt-2">
							<input
								id="email" name="email" type="email" autoComplete="email" value={email}
								className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
								outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
								focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								onChange={(e) => {
									setEmail(e.target.value);
									if (emailError && e.target.value.trim() !== "") {
										setEmailError("");
									}
								}}
							/>
							{emailError && (<p className="mt-1 text-sm text-red-500">{emailError}</p>)}
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
								{translate("login.password")}
							</label>
							<div className="text-sm">
								<Link href="/auth/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
									{translate("login.forgot_password")}
								</Link>
							</div>
						</div>
						<div className="mt-2">
							<input id="password" name="password" type="password" autoComplete="current-password" value={password}
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
							{translate("login.submit")}
						</button>
					</div>

					<div className="flex flex-col gap-2">
						<button className="justify-center flex items-center bg-white border border-gray-300 rounded-lg 
						shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
						focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
							<img src="/asset/icon-google-color.svg" className="h-6 w-6 mr-2" />
							<span>{translate("login.google_title")}</span>
						</button>

						<button className="justify-center flex items-center bg-white border border-gray-300 rounded-lg 
						shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
						focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
							<img src="/asset/icon-linkden-color.svg" className="h-6 w-6 mr-2" />
							<span>{translate("login.linkden_title")}</span>
						</button>

						<button className="justify-center flex items-center bg-white border border-gray-300 rounded-lg 
						shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
						focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
							<img src="/asset/icon-facebook-color.svg" className="h-6 w-6 mr-2" />
							<span>{translate("login.facebook_title")}</span>
						</button>
					</div>

				</form>
			</div>

			<div>
				<p className="mt-10 text-center text-sm/6 text-gray-500">{translate("login.not_a_member")} 
					<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						{translate("login.sign_up")}
					</a>
				</p>
			</div>

		</div>
	);
}
