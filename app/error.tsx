'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white text-center p-4">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">System Malfunction</h2>
            <p className="text-white/50 mb-8 max-w-md">
                An unexpected error has occurred in the digital fabric.
            </p>
            <button
                onClick={reset}
                className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors uppercase tracking-wide text-sm"
            >
                Reboot System
            </button>
        </div>
    );
}
