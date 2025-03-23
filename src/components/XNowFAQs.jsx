import React, { useState } from "react";
import customer_react from "@/assets/faqimg.webp";
import dashboard from "@/assets/dashboard.png";

const XNowFAQs = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is XNow?",
            answer: "XNow is a comprehensive IT services provider offering solutions in software development, cloud infrastructure, cybersecurity, IT consulting, and digital transformation for businesses of all sizes.",
        },
        {
            question: "Why should I choose XNow?",
            answer: "XNow combines technical expertise with industry knowledge to deliver tailored IT solutions. With over 500 successful projects, 24/7 support, and a team of certified professionals, we help you achieve your business goals through technology.",
        },
        {
            question: "What services does XNow offer?",
            answer: "We offer a wide range of services including custom software development, cloud migration and management, cybersecurity solutions, IT infrastructure setup and maintenance, data analytics, and digital transformation consulting.",
        },
        {
            question: "Do you provide support after implementation?",
            answer: "Yes, we provide comprehensive post-implementation support with various service level agreements to choose from. Our dedicated support team is available 24/7 to address any issues and ensure your systems run smoothly.",
        },
        {
            question: "What industries do you serve?",
            answer: "XNow serves clients across multiple industries including healthcare, finance, retail, manufacturing, education, and government sectors. Our solutions are customized to meet industry-specific requirements and challenges.",
        },
        {
            question: "How do you ensure data security?",
            answer: "We implement robust security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like GDPR, HIPAA, and ISO 27001 to ensure your data remains protected.",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-red-50 via-white to-red-50">
            {/* ========== HERO SECTION ========== */}
            <section className="w-full py-16 md:py-24 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-red-100 opacity-50 blur-3xl"></div>
                <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-red-100 opacity-50 blur-3xl"></div>

                <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Left Side: Text */}
                    <div className="md:w-1/2 space-y-8">
                        <div className="inline-block px-3 py-1 bg-red-50 border border-red-100 text-red-600 rounded-full text-sm font-medium mb-2">
                            Enterprise IT Solutions
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                            Why choose{" "}
                            <span className="text-red-500 relative">
                                XN
                                <span className="absolute bottom-1 left-0 w-full h-2 bg-red-100 -z-10 rounded"></span>
                            </span>
                            ow
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Start with our pre-designed solutions to transform
                            your business's digital infrastructure. Select a
                            professionally designed package tailored to your
                            industry needs.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="px-8 py-4 bg-red-500 text-white rounded-lg font-medium shadow-lg shadow-red-200 hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1">
                                Get Started Today
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row gap-8 mt-6 pt-4">
                            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    {/* Lightning Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-gray-800">
                                        500+ Projects
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        Successfully delivered to clients across
                                        multiple industries.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    {/* Star Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519
                        4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588
                        1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518
                        4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1
                        1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
                        1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1
                        1 0 00.951-.69l1.519-4.674z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-gray-800">
                                        4.9 Star Rating
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        Customer satisfaction is our highest
                                        priority.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image Preview / "10x Faster" Badge */}
                    <div className="md:w-1/2 relative">
                        {/* "10x Faster" badge */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium z-20 flex items-center shadow-lg">
                            10x Faster
                            <svg
                                className="w-5 h-5 ml-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21
                    7.02944 21 12C21 16.9706 16.9706 21 12
                    21C7.02944 21 3 16.9706 3 12Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M8 12L11 15L16 9"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Main mockup container */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 relative border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            {/* Image Preview */}
                            <div className="transform transition-transform duration-300 hover:scale-102 hover:-rotate-1 relative">
                                <img
                                    src={dashboard}
                                    alt="XNow Dashboard Preview"
                                    className="w-full h-auto rounded-lg border border-gray-200 shadow-md"
                                />

                                {/* Overlapping Customer React Box */}
                                <div className="absolute -bottom-6 -right-6 z-10 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-white p-1">
                                    <img
                                        src={customer_react}
                                        alt="Customer React Card"
                                        className="w-full max-w-[200px] h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="container mx-auto px-4 py-16 md:py-24 relative">
                {/* Decorative element */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-red-100 opacity-50 blur-3xl"></div>

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* FAQ Heading */}
                        <div className="md:w-1/3 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-600">
                                Find answers to commonly asked questions about
                                our services, expertise, and support procedures.
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="md:w-2/3 space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border-b border-gray-200 pb-4 transition-all duration-300 ${
                                        openFaq === index
                                            ? "bg-red-50 p-4 -mx-4 rounded-lg border-none"
                                            : ""
                                    }`}
                                >
                                    <button
                                        className="flex justify-between items-center w-full text-left font-medium text-gray-800 py-2 focus:outline-none"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span
                                            className={`${
                                                openFaq === index
                                                    ? "text-red-600"
                                                    : ""
                                            }`}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`${
                                                openFaq === index
                                                    ? "bg-red-100"
                                                    : "bg-gray-100"
                                            } w-8 h-8 rounded-full flex items-center justify-center text-red-500`}
                                        >
                                            {openFaq === index ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    {openFaq === index && (
                                        <div className="mt-3 text-gray-600 pl-2 border-l-2 border-red-300">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to transform your IT infrastructure?
                    </h2>
                    <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
                        Partner with XNow for innovative solutions that drive
                        business growth and digital transformation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-all duration-300">
                            Schedule a Demo
                        </button>
                        <button className="px-8 py-4 bg-red-700 text-white rounded-lg font-medium shadow-lg hover:bg-red-800 transition-all duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default XNowFAQs;
