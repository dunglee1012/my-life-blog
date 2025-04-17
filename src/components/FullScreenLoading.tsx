export default function FullScreenLoading() {
    return (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-80 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}
