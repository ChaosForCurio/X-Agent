'use client';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Background grain effect is global so strict layout here */}

            <div className="z-10 flex flex-col items-center text-center p-4">
                <h1 className="text-[15vw] font-black leading-none tracking-tighter opacity-10 select-none">
                    404
                </h1>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-center mb-8">
                        Void Detected
                    </h2>
                    <Link
                        href="/"
                        className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm"
                    >
                        Return to Signal
                    </Link>
                </div>
            </div>
        </div>
    );
}
