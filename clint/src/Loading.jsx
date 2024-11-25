import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 z-10 w-full h-screen bg-[#fff] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <svg
                    className="w-16 h-16 text-gray-600 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
                <p className="mt-4 text-lg text-gray-500">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
