import React, { useState, useEffect } from "react";
import { Signal, Wifi, Battery } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; //eslint-disable-line
import Lottie from "lottie-react";

// Import your Lottie JSON animations
import lottieAnimation1 from "@/assets/phonecarousel1.json";
import lottieAnimation2 from "@/assets/phonecarousel2.json";

const mockData = {
    item1: {
        lottie: lottieAnimation1,
        price: "$19.99",
        textLines: ["First item line 1", "First item line 2"],
    },
    item2: {
        lottie: lottieAnimation2,
        price: "$29.99",
        textLines: ["Second item line 1", "Second item line 2"],
    },
};

const items = Object.values(mockData);

const ProductDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animStage, setAnimStage] = useState(0); // 0: show animation, 1: show price, 2: show text
    const [loading, setLoading] = useState(false);

    const currentItem = items[currentIndex];

    useEffect(() => {
        // Restart the animation sequence for the current item
        setAnimStage(0);
        const priceTimer = setTimeout(() => setAnimStage(1), 1500); // after 1.5s, animate price in
        const textTimer = setTimeout(() => setAnimStage(2), 3000); // after another 1.5s, animate text in

        return () => {
            clearTimeout(priceTimer);
            clearTimeout(textTimer);
        };
    }, [currentIndex]);

    const handleNext = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            setLoading(false);
        }, 1000); // 1-second loading delay
    };

    const handlePrev = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + items.length) % items.length
            );
            setLoading(false);
        }, 1000); // 1-second loading delay
    };

    return (
        <div className="relative flex h-screen w-full items-center justify-center bg-gray-100 overflow-hidden">
            {/*
        1) The stage is placed absolutely in the center (behind everything).
           It won't move when we shift the phone card.
      */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Bottom Platform Layer */}
                <motion.div
                    className="h-244 w-dvw rounded-t-4xl bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600/80 shadow-md"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Middle Platform Layer */}
                <motion.div
                    className="absolute top-184 h-32 w-290 rounded-t-full bg-gradient-to-b from-white to-gray-600/60 shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                />
                {/* Middle Shadow */}
                <div className="absolute top-185 h-8 w-300 translate-y-28 rounded-full bg-gray-900/80 blur-md"></div>
            </div>

            {/*
        2) Left section: phone card & navigation.
           We wrap them in a flex container to keep buttons around the phone.
      */}
            <div className="relative z-10 mr-8 flex items-center">
                {/* Previous button */}
                <button
                    onClick={handlePrev}
                    disabled={loading}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:bg-red-600 disabled:opacity-50 mr-2 "
                >
                    &#8592;
                </button>

                {/* The phone card */}
                <motion.div
                    className="h-[600px] w-[300px] overflow-hidden rounded-[32px] border-8 border-gray-100 bg-white/90 backdrop-blur-lg shadow-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    {/* Status Bar */}
                    <div className="flex h-10 w-full items-center justify-between bg-gray-50 px-5 pt-2">
                        <div className="text-sm font-medium">9:41</div>
                        <div className="flex items-center space-x-2">
                            <Signal className="h-4 w-4" />
                            <Wifi className="h-4 w-4" />
                            <Battery className="h-4 w-4" />
                        </div>
                    </div>

                    {/* Lottie Animation Container */}
                    <div className="flex h-1/2 items-center justify-center pt-6">
                        {/* Circular glow effect */}
                        <div className="absolute top-1/4 left-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-red-100 to-purple-100 opacity-60 blur-xl" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="h-full w-full"
                            >
                                <Lottie
                                    animationData={currentItem.lottie}
                                    loop={true}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Price Display */}
                    <AnimatePresence>
                        {animStage >= 1 && (
                            <motion.div
                                key="price"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mt-8 text-center text-3xl font-bold text-red-500 drop-shadow-[0_4px_3px_rgba(0,0,0,0.2)]"
                            >
                                {currentItem.price}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Text Lines */}
                    <AnimatePresence>
                        {animStage >= 2 && (
                            <motion.div
                                key="text"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mt-6 text-center"
                            >
                                {currentItem.textLines.map((line, index) => (
                                    <p
                                        key={index}
                                        className="my-2 text-lg text-gray-800"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    disabled={loading}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:bg-red-600 disabled:opacity-50 ml-2"
                >
                    &#8594;
                </button>
            </div>

            {/*
        3) Right section: title.
           Placed in the same row (flex) to the right of the phone.
      */}
            <div className="relative z-10 ml-8 max-w-lg bottom-60">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    <span className="text-red-500">Empower</span> Your Online
                    Presence with
                    <br /> our Robust VPS Solutions loaded with powerful
                    features.
                </h1>
            </div>
        </div>
    );
};

export default ProductDisplay;
