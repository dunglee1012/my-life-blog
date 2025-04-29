import FullScreenLoading from "@/components/FullScreenLoading";
import { useUserProfile } from "@/hooks/user/hookUser";
import { translate } from "@/locales/locale";

export default function PersonalInfo() {

    const { profile, loading } = useUserProfile();
    console.log(profile);

    if (loading) {
        return (<FullScreenLoading/>
        );
    }
    
    return (
        <>
            <h1 className="text-xl font-bold">{translate("mypage.personal_info")}</h1>
            <h6 className="text-gray-600 font-medium mb-6">
                {translate("mypage.personal_info_response")}
            </h6>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium">{translate("mypage.full_name")}</label>
                    <input
                        type="text"
                        value={`${profile?.firstname} ${profile?.lastname}`}
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">{translate("mypage.email")}</label>
                    <input
                        type="email"
                        value={profile?.email}
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">{translate("mypage.phone_number")}</label>
                    <input
                        type="text"
                        value={profile?.phone}
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">{translate("mypage.address")}</label>
                    <input
                        type="text"
                        value={profile?.address}
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">{translate("mypage.age")}</label>
                    <input
                        type="text"
                        value={profile?.age}
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">{translate("mypage.dob")}</label>
                    <input
                        type="text"
                        value={profile?.dob}
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
            </div>
        </>
    );
}
