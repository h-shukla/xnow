import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import smile from "@/assets/smile.svg";

const XNowTestimonials = () => {
    // Stats data
    const stats = {
        clients: "15,000+",
        products: "27,000+",
        years: "4",
        rating: "5.0",
    };

    const testimonials = [
        {
            id: 1,
            content:
                "XNow has helped me create amazing websites with ease! The templates are modern and the customer support is outstanding. I'll definitely be using their services again.",
            author: "Krishna K.",
            company: "Tech Solutions",
            avatar: t1,
            bgColor: "bg-red-50",
            iconColor: "text-red-500",
            avatarType: "custom",
        },
        {
            id: 2,
            content:
                "Building my website has never been this smooth and efficient. XNow's drag-and-drop interface saved me countless hours of development time.",
            author: "Sandesh K.",
            company: "Web Innovations",
            avatar: t2,
            bgColor: "bg-blue-50",
            iconColor: "text-blue-500",
            avatarType: "custom",
        },
        {
            id: 3,
            content:
                "XNow transformed our digital presence effortlessly! Our conversions increased by 45% after launching our new site. Highly recommended!",
            author: "Anglekha S.",
            company: "Creative Studio",
            avatar: t3,
            bgColor: "bg-yellow-50",
            iconColor: "text-yellow-500",
            avatarType: "custom",
        },
    ];

    // Custom avatar components with improved visuals
    const AvatarIcon = ({ type, avatar }) => {
        if (type === "google") {
            return (
                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Star size={24} color="#4285F4" fill="#4285F4" />
                </div>
            );
        } else {
            return (
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                        src={avatar}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            );
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white w-full py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="mb-20 md:mb-32">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        {/* Left Side with Stats */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center mr-3 shadow-md">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <Badge className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 text-sm font-medium">
                                    XNow Apps
                                </Badge>
                            </div>

                            <div className="mb-4">
                                <p className="text-lg text-gray-600">
                                    Over{" "}
                                    <span className="font-bold text-black">
                                        {stats.clients} clients
                                    </span>
                                </p>
                            </div>

                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                We created over <br />
                                <span className="text-red-500 underline decoration-red-500 decoration-4">
                                    {stats.products}
                                </span>{" "}
                                stunning <br />
                                and quality <br />
                                products over <br />
                                {stats.years} years with <br />
                                satisfaction.
                            </div>

                            <div className="mt-8 relative">
                                <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white shadow-sm">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Middle with Award Winning Product */}
                        <div className="w-full md:w-1/4">
                            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
                                <div className="mr-4">
                                    <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center shadow-sm">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 15L8.5 17L9.5 13L6.5 10.5L10.5 10L12 6.5L13.5 10L17.5 10.5L14.5 13L15.5 17L12 15Z"
                                                fill="#FFB800"
                                                stroke="#FFB800"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">
                                        awwwards.
                                    </h3>
                                    <p className="text-gray-600">
                                        Winning Product
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side with Client Reviews Rating */}
                        <div className="w-full md:w-1/4">
                            <div className="flex items-center">
                                <div className="mx-1">
                                    <img
                                        src={smile}
                                        alt="smile"
                                        className="w-[100px] h-[100px]"
                                    />
                                </div>

                                <div className="bg-white border border-gray-200 rounded-full px-8 py-3 shadow-md">
                                    <div className="flex items-center">
                                        <Star
                                            size={28}
                                            className="mr-3 text-yellow-400"
                                            fill="currentColor"
                                        />
                                        <div className="flex flex-col">
                                            <div className="flex items-center">
                                                <span className="font-bold text-gray-900">
                                                    {stats.rating}
                                                </span>
                                                <div className="flex ml-2">
                                                    {[...Array(5)].map(
                                                        (_, i) => (
                                                            <Star
                                                                key={i}
                                                                size={20}
                                                                className="text-yellow-400"
                                                                fill="currentColor"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                Client Reviews
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-20">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12">
                        Positive reviews <br />
                        from our clients
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={`${testimonial.bgColor} rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100`}
                            >
                                <div className="mb-4 text-4xl text-gray-400">
                                    ❝
                                </div>
                                <p className="text-gray-700 mb-8 text-lg">
                                    {testimonial.content}
                                </p>
                                <div className="flex items-center">
                                    <AvatarIcon
                                        type={testimonial.avatarType}
                                        avatar={testimonial.avatar}
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold text-gray-900 text-lg">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-gray-600">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default XNowTestimonials;
