import { Button } from "@/components/ui/button";
import logolight from "../assets/logolight.png";

export const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-red-50 via-gray-50 to-white overflow-hidden">
            {/* Notification popups */}
            <div className="absolute right-1/6 top-1/8 bg-white p-4 rounded-lg shadow-lg z-10">
                <div className="flex items-center">
                    <div className="mr-3 bg-red-400 rounded-full p-2">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 13L9 17L19 7"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p className="text-sm">Booking successful!</p>
                </div>
            </div>

            <div className="absolute right-1/7 top-1/5 bg-white p-3 rounded-lg shadow-lg z-10">
                <div className="flex items-center space-x-2">
                    <div className="bg-blue-400 rounded-full p-2">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 6v6l4 2"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <p className="text-sm">Task reminder</p>
                </div>
            </div>

            {/* Main container */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    {/* Right side content */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={logolight}
                            alt="Logo"
                            className="max-w-[140px]"
                        />

                        <div className="flex space-x-6 mb-4">
                            <div className="px-4 py-2 bg-white bg-opacity-50 rounded-full">
                                <span className="text-gray-600">
                                    Think vast, be happy
                                </span>
                            </div>
                            <div className="px-4 py-2 bg-white bg-opacity-50 rounded-full">
                                <span className="text-gray-600">
                                    Be smart, it helps
                                </span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Unlock your
                            <br />
                            experience
                            <br />
                            <span className="text-red-500">by XNow</span>
                        </h1>

                        <p className="text-gray-600 text-lg max-w-md">
                            Create tasks with various custom status to keep
                            track of the progress. Uncover high-impact app
                            actions that drive results.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-red-400 hover:bg-red-500 rounded-full px-8 py-6 text-white font-medium shadow-lg transition-all hover:shadow-xl">
                                Download Now
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-300 hover:bg-gray-50 rounded-full px-8 py-6 text-gray-700"
                            >
                                Watch Demo
                            </Button>
                        </div>
                    </div>

                    {/* Left side - empty space where the fixed canvas will appear */}
                    <div className="w-full md:w-1/2 h-[600px]"></div>
                </div>

                {/* Trusted by section */}
                <div className="mt-20">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-gray-500 mb-8 font-medium">
                            Trusted by great companies worldwide
                        </p>
                        <div className="overflow-hidden">
                            <div className="flex animate-marquee gap-12">
                                {[
                                    "Pilot",
                                    "Next",
                                    "Athlete",
                                    "Aloha",
                                    "Walmar",
                                    "Pilot",
                                    "Next",
                                    "Athlete",
                                    "Aloha",
                                    "Walmar",
                                ].map((company, index) => (
                                    <div
                                        key={index}
                                        className="opacity-40 hover:opacity-70 transition-opacity"
                                    >
                                        <div className="flex items-center justify-center h-10 w-24">
                                            <span className="font-bold text-gray-600">
                                                {company}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
