"use client"
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

const FullScreenImage = ({title, src, fullSize = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = (e) => {
        e.stopPropagation();  // This stops the event from bubbling up to the Link
        e.preventDefault();   // Additional safety for default link behavior
        setIsOpen(true);
    };


    return (
        <div className="flex flex-col items-center my-3">
            <div className="relative">
                <img
                    className={`rounded-lg object-contain ${ fullSize ? 'w-[300px] h-[500px]': '' }`}
                    src={src} alt={title}
                    />
                <button
                    onClick={handleButtonClick}
                    className="absolute z-20 w-[31px] h-[31px] top-2 right-2 p-1 bg-white rounded-md shadow-md flex items-center justify-center"
                >
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.16669 7.12484V4.43317C3.16669 3.9898 3.16669 3.76811 3.25297 3.59876C3.32888 3.4498 3.44998 3.32869 3.59894 3.2528C3.76829 3.1665 3.98998 3.1665 4.43335 3.1665H7.12502M3.16669 11.8748V14.5665C3.16669 15.0099 3.16669 15.2316 3.25297 15.4009C3.32888 15.5499 3.44998 15.671 3.59894 15.7469C3.76829 15.8332 3.98998 15.8332 4.43335 15.8332H7.12502M11.875 3.1665H14.5667C15.0101 3.1665 15.2318 3.1665 15.4011 3.25279C15.5501 3.32869 15.6711 3.4498 15.7471 3.59876C15.8334 3.76811 15.8334 3.9898 15.8334 4.43317V7.12484M15.8334 11.8748V14.5665C15.8334 15.0099 15.8334 15.2316 15.7471 15.4009C15.6711 15.5499 15.5501 15.671 15.4011 15.7469C15.2318 15.8332 15.0101 15.8332 14.5667 15.8332H11.875"
                            stroke="#313D4F"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* Modal for fullscreen img */}
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 z-10 flex items-center justify-center"
            >
                <div className="bg-black bg-opacity-50 fixed inset-0"></div>
                <div className="relative p-2 bg-white rounded-lg">
                    <img
                        src={src}
                        alt={title}
                        className="rounded-lg max-h-screen max-w-screen p-4"
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-5 right-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </Dialog>
        </div>
    );
};

export default FullScreenImage;