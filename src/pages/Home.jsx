import React from "react";
import {
    CharacterController,
    CharacterProvider,
} from "@/context/CharacterContext";
import { FixedCanvasContainer } from "@/components/ThreeJSCanvas";
import { HeroSection } from "@/components/Hero";

const ExtraFluff = () => {
    return (
        <div className="min-h-screen bg-white p-10">
            <h2 className="text-3xl font-bold mb-4">Additional Content</h2>
            <p className="mb-6">
                Scroll down to see the 3D model and canvas move horizontally
                based on scroll position. Move your mouse left and right to
                rotate the model.
            </p>
            {/* Add more content sections for scrolling */}
            <div className="mt-20 p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <p className="text-gray-700">
                    Continue scrolling to see the 3D model move horizontally
                    across your screen. This demonstrates how interactive 3D
                    elements can enhance user experience throughout the entire
                    page, not just in the hero section.
                </p>
            </div>
            <div className="mt-20 p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">More Content</h3>
                <p className="text-gray-700">
                    Adding additional sections helps demonstrate the horizontal
                    scrolling effect. As you scroll down, watch how the 3D model
                    moves across the screen.
                </p>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <CharacterProvider>
            <div>
                <FixedCanvasContainer />
                <HeroSection />
                <CharacterController />
                <ExtraFluff />
            </div>
        </CharacterProvider>
    );
};

export default Home;
