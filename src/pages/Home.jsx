import React, { useState, useEffect } from "react";
import {
    CharacterController,
    CharacterProvider,
} from "@/context/CharacterContext";
import { FixedCanvasContainer } from "@/components/ThreeJSCanvas";
import { HeroSection } from "@/components/Hero";
import LoadingIndicator from "@/components/LoadingIndicator";
import XNowTestimonials from "@/components/XNowTestimonials";
import XNowFAQs from "@/components/XNowFAQs";
import PricingDisplay from "@/components/PricingDisplay";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <CharacterProvider>
            <FixedCanvasContainer />
            <div>
                <section className="snap-start">
                    <HeroSection />
                </section>
                <section className="snap-start">
                    <CharacterController />
                </section>

                <section className="snap-start">
                    <PricingDisplay />
                </section>

                <section className="snap-start">
                    <XNowTestimonials />
                </section>

                <section className="snap-start">
                    <XNowFAQs />
                </section>
            </div>
        </CharacterProvider>
    );
};

export default Home;
