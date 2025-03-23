import React from "react";

const LoadingIndicator = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-red-500 animate-spin"></div>
            </div>
        </div>
    );
};

export default LoadingIndicator;
