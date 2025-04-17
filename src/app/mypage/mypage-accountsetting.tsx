export default function AccountSetting() {
    return (
        <>
            <h1 className="text-xl font-bold">Account Setting</h1>
            <h6 className="text-gray-600 font-medium mb-6">
                * It's our responsibility to protect your privacy
            </h6>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium">Full Name</label>
                    <input
                        type="text"
                        value="Nguyễn Văn A"
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        value="nguyenvana@email.com"
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Phone Number</label>
                    <input
                        type="text"
                        value="0123 456 789"
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Address</label>
                    <input
                        type="text"
                        value="123 Đường ABC, Quận 1, TP.HCM"
                        className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
                        readOnly
                    />
                </div>
            </div>
        </>
    );
}
