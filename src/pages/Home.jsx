import React, { useState, useEffect } from "react";
import {
    CharacterController,
    CharacterProvider,
} from "@/context/CharacterContext";
import { FixedCanvasContainer } from "@/components/ThreeJSCanvas";
import { HeroSection } from "@/components/Hero";
import XNowMailPricing from "@/components/XNowMailPricing";
import LoadingIndicator from "@/components/LoadingIndicator";
import XNowTestimonials from "@/components/XNowTestimonials";
import XNowFAQs from "@/components/XNowFAQs";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (e.g., character and assets loading)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        // Cleanup timeout if the component unmounts early
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <CharacterProvider>
            <div>
                <FixedCanvasContainer />
                <HeroSection />
                <CharacterController />
                <XNowMailPricing />
                <XNowTestimonials />
                <XNowFAQs />
            </div>
        </CharacterProvider>
    );
};

export default Home;
