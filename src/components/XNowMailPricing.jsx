import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon, MailIcon, BoltIcon, ShieldIcon } from "lucide-react";

const XNowMailPricing = () => {
    return (
        <div className="bg-gray-50 min-h-screen w-full py-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center md:items-start mb-16">
                    <div className="flex items-center space-x-2 mb-4">
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                            New Features
                        </Badge>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Easy to solution, <br />
                            loaded with powerful <br />
                            features.
                        </h1>

                        <p className="text-gray-600 text-lg">
                            We love connecting you to your emails with our
                            simple and powerful interface.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Free Plan */}
                    <Card className="border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1 z-10">
                        <CardHeader className="pb-4">
                            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <MailIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Basic Plan
                            </CardTitle>
                            <p className="text-gray-500 mt-2">Free forever</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-6">
                                XNow Mail Basic gives you essential email
                                functionality for personal use.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "5GB storage space",
                                    "Basic spam filtering",
                                    "Mobile app access",
                                    "Limited customer support",
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center">
                                        <CheckIcon className="h-5 w-5 text-red-500 mr-2" />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full bg-white text-red-600 border border-red-600 hover:bg-red-50">
                                Sign Up Free
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="border border-gray-200 hover:shadow-xl hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="pb-4">
                            <div className="w-14 h-14 rounded-full bg-red-200 flex items-center justify-center mb-4">
                                <BoltIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Pro Plan
                            </CardTitle>
                            <p className="text-gray-500 mt-2">$4.99/month</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-6">
                                Enhanced email experience with additional
                                storage and features.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "50GB storage space",
                                    "Advanced spam filtering",
                                    "No ads experience",
                                    "Custom domain support",
                                    "Priority customer support",
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center">
                                        <CheckIcon className="h-5 w-5 text-red-500 mr-2" />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                                Start Pro Trial
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="border border-red-200 bg-gradient-to-br from-white to-red-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="pb-4">
                            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mb-4">
                                <ShieldIcon className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Enterprise
                            </CardTitle>
                            <p className="text-gray-500 mt-2">
                                $12.99/month per user
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-6">
                                Complete email solution for businesses with
                                advanced security.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Unlimited storage",
                                    "Advanced security features",
                                    "Email encryption & DLP",
                                    "Team collaboration tools",
                                    "Admin console & analytics",
                                    "24/7 dedicated support",
                                    "Multiple domain management",
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center">
                                        <CheckIcon className="h-5 w-5 text-red-500 mr-2" />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                                Contact Sales
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default XNowMailPricing;
