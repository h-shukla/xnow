import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon, MailIcon, BoltIcon, ShieldIcon } from "lucide-react";

const XNowMailPricing = () => {
    // Data defined as an object of objects
    const pricingData = {
        basic: {
            name: "Basic Plan",
            price: "Free forever",
            description:
                "XNow Mail Basic gives you essential email functionality for personal use.",
            icon: MailIcon,
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
            buttonText: "Sign Up Free",
            buttonStyle:
                "bg-white text-red-600 border border-red-600 hover:bg-red-50",
            features: [
                "5GB storage space",
                "Basic spam filtering",
                "Mobile app access",
            ],
        },
        pro: {
            name: "Pro Plan",
            price: "$4.99/month",
            description:
                "Enhanced email experience with additional storage and features.",
            icon: BoltIcon,
            iconBg: "bg-red-200",
            iconColor: "text-red-600",
            buttonText: "Start Pro Trial",
            buttonStyle: "bg-red-600 text-white hover:bg-red-700",
            features: [
                "50GB storage space",
                "Advanced spam filtering",
                "No ads experience",
            ],
        },
        enterprise: {
            name: "Enterprise",
            price: "$12.99/month per user",
            description:
                "Complete email solution for businesses with advanced security.",
            icon: ShieldIcon,
            iconBg: "bg-red-600",
            iconColor: "text-white",
            buttonText: "Contact Sales",
            buttonStyle: "bg-red-600 text-white hover:bg-red-700",
            cardStyle: "border-red-200 bg-gradient-to-br from-white to-red-50",
            features: [
                "Unlimited storage",
                "Advanced security features",
                "Email encryption & DLP",
            ],
        },
        proo: {
            name: "proo",
            price: "$12.99/month per user",
            description:
                "Complete email solution for businesses with advanced security.",
            icon: ShieldIcon,
            iconBg: "bg-red-600",
            iconColor: "text-white",
            buttonText: "Contact Sales",
            buttonStyle: "bg-red-600 text-white hover:bg-red-700",
            cardStyle: "border-red-200 bg-gradient-to-br from-white to-red-50",
            features: [
                "Unlimited storage",
                "Advanced security features",
                "Email encryption & DLP",
            ],
        },
        promax: {
            name: "promax",
            price: "$12.99/month per user",
            description:
                "Complete email solution for businesses with advanced security.",
            icon: ShieldIcon,
            iconBg: "bg-red-600",
            iconColor: "text-white",
            buttonText: "Contact Sales",
            buttonStyle: "bg-red-600 text-white hover:bg-red-700",
            cardStyle: "border-red-200 bg-gradient-to-br from-white to-red-50",
            features: [
                "Unlimited storage",
                "Advanced security features",
                "Email encryption & DLP",
            ],
        },
        promaxultra: {
            name: "promaxultra",
            price: "$12.99/month per user",
            description:
                "Complete email solution for businesses with advanced security.",
            icon: ShieldIcon,
            iconBg: "bg-red-600",
            iconColor: "text-white",
            buttonText: "Contact Sales",
            buttonStyle: "bg-red-600 text-white hover:bg-red-700",
            cardStyle: "border-red-200 bg-gradient-to-br from-white to-red-50",
            features: [
                "Unlimited storage",
                "Advanced security features",
                "Email encryption & DLP",
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen w-full py-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center md:items-start mb-12">
                    <div className="flex items-center space-x-2 mb-4">
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                            New Features
                        </Badge>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Empower <br />
                            Your Online Presence
                        </h1>

                        <p className="text-gray-600 text-lg">
                            with our Robust VPS Solutions loaded with powerful
                            features.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Dynamically generate cards from pricingData */}
                    {Object.entries(pricingData).map(([key, plan]) => {
                        const IconComponent = plan.icon;
                        return (
                            <Card
                                key={key}
                                className={`border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col ${
                                    plan.cardStyle || ""
                                }`}
                            >
                                <CardHeader className="pb-2">
                                    <div
                                        className={`w-12 h-12 rounded-full ${plan.iconBg} flex items-center justify-center mb-3`}
                                    >
                                        <IconComponent
                                            className={`h-5 w-5 ${plan.iconColor}`}
                                        />
                                    </div>
                                    <CardTitle className="text-xl font-bold">
                                        {plan.name}
                                    </CardTitle>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {plan.price}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <div>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {plan.description}
                                        </p>
                                        <div className="space-y-2 mb-6">
                                            {plan.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start"
                                                >
                                                    <CheckIcon className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button
                                        className={`w-full ${plan.buttonStyle}`}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default XNowMailPricing;
