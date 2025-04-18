interface SocialAuthButtonProps {
    text1: string;
    text2: string;
    text3: string;
}

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({ text1, text2, text3  }) => {
    return (
        <div className="flex flex-col gap-2">
            <button className="justify-center flex items-center bg-white border border-gray-300 rounded-lg 
                        shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <img src="/asset/icon-google-color.svg" className="h-6 w-6 mr-2" />
                <span>{text1}</span>
            </button>

            <button className="justify-center flex items-center bg-white border border-gray-300 rounded-lg 
                        shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <img src="/asset/icon-linkden-color.svg" className="h-6 w-6 mr-2" />
                <span>{text2}</span>
            </button>

            <button className="justify-center flex items-center bg-white border border-gray-300 rounded-lg 
                        shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <img src="/asset/icon-facebook-color.svg" className="h-6 w-6 mr-2" />
                <span>{text3}</span>
            </button>
        </div>
    );
};

export default SocialAuthButton;