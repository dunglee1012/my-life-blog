import { translate } from "@/locales/locale";
import { useUserProfile } from "@/hooks/user/hookUser";

export default function Navbar() {
	const linkClass = "font-bold rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900";
	const { profile } = useUserProfile();

	return (
		<nav className="flex items-center w-full bg-white shadow-md sticky top-0 z-50 px-10 space-x-4">
			<div className="flex-none w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
				<form className="w-full">
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<img className="w-4 h-4" src="/asset/icon-search.png" alt="Search Icon" />
						</div>
						<input
							type="search" id="default-search" required
							className="block w-full p-2 pl-10 text-sm text-gray-900 border border-transparent bg-gray-100 rounded-lg hover:border-black hover:ring-1 focus:border-black focus:ring-1 focus:ring-black outline-none"
							placeholder="Searching for something?"
						/>
						<button type="submit" className="absolute right-2 bottom-1 bg-black hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-3 py-1">
							Search</button>
					</div>
				</form>
			</div>

			<div className="flex-grow flex space-x-4">
				<a href="/home" className={linkClass}>{translate("nav_bar.home")}</a>
				<a href="/blog" className={linkClass}>{translate("nav_bar.blog")}</a>
				<a href="/about" className={linkClass}>{translate("nav_bar.about")}</a>
			</div>

			<div className="relative z-50">
				<input type="checkbox" id="menu-toggle" className="peer hidden" />
				<label htmlFor="menu-toggle" className="cursor-pointer p-2">
					<img src="/asset/icon-menu.png" alt="Menu" className="w-5 h-5" />
				</label>

				<div className="right-[-30px] absolute top-full right-0 mt-2 m-inline-10 hidden peer-checked:flex flex-col bg-white border rounded shadow-lg p-2 space-y-2 z-[9999] w-20">
					<div className="block md:hidden">
						<a href="/home" className={linkClass}>{translate("nav_bar.home")}</a>
						<a href="/blog" className={linkClass}>{translate("nav_bar.blog")}</a>
						<a href="/about" className={linkClass}>{translate("nav_bar.about")}</a>
					</div>
					<a href="#" className="flex justify-center"><img src="/asset/icon-fb.png" className="w-10 h-10 object-contain" alt="Facebook" /></a>
					<a href="#" className="flex justify-center"><img src="/asset/icon-instagram.png" className="w-10 h-10 object-contain" alt="Instagram" /></a>
					<a href="#" className="flex justify-center"><img src="/asset/icon-linkedin.png" className="w-10 h-10 object-contain" alt="LinkedIn" /></a>
					<a href="#" className="flex justify-center"><img src="/asset/icon-github.png" className="w-10 h-10 object-contain" alt="GitHub" /></a>
					<a href={profile ? "/mypage" : "/auth"} className="flex justify-center">
						<img src="/asset/icon-secret.png" className="w-10 h-10 object-contain" alt="Profile" />
					</a>

					{profile ? (
						<a href="/mypage" className="flex justify-center">
							<img src="/asset/icon-profile.png" className="w-10 h-10 object-contain" alt="Profile" />
						</a>
					) : (
						<a href="/auth" className="flex justify-center">
							<img src="/asset/icon-secret.png" className="w-10 h-10 object-contain" alt="Profile" />
						</a>)}
				</div>
			</div>
		</nav>
	);
}