import { translate } from "@/locales/locale";
import { useUserProfile } from "@/hooks/user/hookUser";

export default function Navbar() {
	const linkClass = "font-bold rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900";
	const { profile } = useUserProfile();

	return (
		<nav className="flex sticky items-center w-full px-6 py-4 space-x-4 bg-white shadow-md">
			{/* Search Bar - Adjusted to w-2/5 */}
			<div className="w-2/5">
				<form className="w-full">
					<div className="relative">
						{/* Search Icon */}
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<img className="w-4 h-4" src="/asset/icon-search.png" alt="Search Icon" />
						</div>
						{/* Search Input */}
						<input
							type="search"
							id="default-search"
							className="block w-full p-2 ps-10 text-sm text-gray-900 border border-transparent bg-gray-100 rounded-lg hover:border-black hover:ring-1 focus:border-black focus:ring-1 focus:ring-black outline-none"
							placeholder="Searching for something?"
							required
						/>
						{/* Search Button */}
						<button
							type="submit"
							className="absolute end-2 bottom-1 bg-black hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-3 py-1"
						>
							Search
						</button>
					</div>
				</form>
			</div>


			{/* Navigation Links - Closer Spacing */}
			<div className="w-2/5 flex space-x-4">
				<a href="/home" className={linkClass}>{translate("nav_bar.home")}</a>
				<a href="/blog" className={linkClass}>{translate("nav_bar.blog")}</a>
				<a href="/about" className={linkClass}>{translate("nav_bar.about")}</a>
			</div>

			<div className="w-1/5 flex space-x-10 justify-end">
				<a href="" className="fillRuletext-gray-500 bg-white hover:bg-gray-100"><img src="/asset/icon-fb.png" /></a>
				<a href="" className="fillRuletext-gray-500 bg-white hover:bg-gray-100"><img src="/asset/icon-instagram.png" /></a>
				<a href="" className="fillRuletext-gray-500 bg-white hover:bg-gray-100"><img src="/asset/icon-linkedin.png" /></a>
				<a href="" className="fillRuletext-gray-500 bg-white hover:bg-gray-100"><img src="/asset/icon-github.png" /></a>
				{profile ?
				(<a href="/mypage" className="fillRuletext-gray-500 bg-white hover:bg-gray-100"><img src="/asset/icon-secret.png" /></a>)
				: (<a href="/auth" className="fillRuletext-gray-500 bg-white hover:bg-gray-100"><img src="/asset/icon-secret.png" /></a>) }
				
			</div>
		</nav>
	);
}
