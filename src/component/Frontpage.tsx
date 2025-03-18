'use client';
import { useRouter } from 'next/navigation';

export default function FrontPage() {
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome! I'm thrilled to have you here, let's make some memories.</h1>
            <p className="text-lg text-gray-600 mb-6">What you about to see here is my blog, my life,...story about me. Enjoyyyy!!!</p>

            <button
                onClick={() => router.push('/home')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                Let's goooooo! 🚀
            </button>
        </main>
    );
}