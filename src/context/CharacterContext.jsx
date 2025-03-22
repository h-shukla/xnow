// CharacterContext.jsx
import React, { useEffect, useState } from "react";

// 1) Create the context
export const CharacterContext = React.createContext(null);

// Global component to handle character movement
export const CharacterController = () => {
    const { character, scene, renderer, camera } =
        React.useContext(CharacterContext);

    useEffect(() => {
        if (!character) return;

        // Handle mouse movement to control character rotation
        const handleMouseMove = (e) => {
            if (!character) return;
            // Calculate mouse position as normalized device coordinates (-1 to +1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            // Rotate character based on mouse X position
            character.rotation.y = x * 2;
        };

        // Handle scroll to move character up/down
        const handleScroll = () => {
            if (!character) return;
            // Get scroll position as percentage of page
            const scrollPercent =
                window.scrollY /
                (document.body.scrollHeight - window.innerHeight);
            // Move character based on scroll position
            character.position.y = scrollPercent * 2; // Scale for visual effect

            if (renderer && camera) {
                renderer.render(scene, camera);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [character, scene, renderer, camera]);

    return null; // This is just a controller, no UI
};

// 2) Create the provider component
export const CharacterProvider = ({ children }) => {
    const [character, setCharacter] = useState(null);
    const [scene, setScene] = useState(null);
    const [renderer, setRenderer] = useState(null);
    const [camera, setCamera] = useState(null);

    return (
        <CharacterContext.Provider
            value={{
                character,
                setCharacter,
                scene,
                setScene,
                renderer,
                setRenderer,
                camera,
                setCamera,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
