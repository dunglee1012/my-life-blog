"use client"
import PersonalInfo from '@/app/mypage/mypage-personalinformation';
import AccountSetting from '@/app/mypage/mypage-accountsetting';
import { useMyPage } from '@/hooks/mypage/useMyPage';

import { translate } from "@/locales/locale";

export default function MyPage() {

	const {
		selectedTab, handleChangeTab, handleSignOut
	} = useMyPage();

	const renderMyPageContent = () => {
		switch (selectedTab) {
			case 'profile':
				return <PersonalInfo />;
			case 'settings':
				return <AccountSetting />;
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-6xl mx-auto bg-white shadow rounded-lg flex">
				{/* Sidebar */}
				<main className='w-1/4 border-r border-gray-200 p-6'>
					<div>
						<h2 className="px-3 text-xl font-bold mb-4">{translate("mypage.navigate")}</h2>
						<ul className="space-y-2">
							<li>
								<button onClick={() => handleChangeTab('profile')}
								className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
									{translate("mypage.profile")}
								</button>
							</li>
							<li>
								<button onClick={() => handleChangeTab('settings')}
								className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
									{translate("mypage.account_settings")}
								</button>
							</li>
							<li>
								<button onClick={() => handleSignOut()}
								className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
									{translate("mypage.sign_out")}
								</button>
							</li>
						</ul>
					</div>
				</main>

				{/* Dynamic Content */}
				<main className="w-3/4 p-6">{renderMyPageContent()}</main>
			</div>
		</div>
	);
}
