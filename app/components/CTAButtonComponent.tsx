'use client';

export function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow">
                Get a Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 border border-blue-600 rounded-xl transition shadow">
                Sell My Licenses
            </button>
        </div>
    );
}
