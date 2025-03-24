import { React, useRef, useEffect, useContext } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CharacterContext } from "@/context/CharacterContext";

export const ThreeJSCanvas = () => {
    const mountRef = useRef(null);
    const characterRef = useRef(null);
    const { setCharacter, setScene, setRenderer, setCamera } =
        useContext(CharacterContext);

    useEffect(() => {
        // Canvas dimensions
        const canvasWidth = window.innerWidth * 0.4;
        const canvasHeight = window.innerHeight * 0.9;

        // Create scene
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            25,
            canvasWidth / canvasHeight,
            0.1,
            1000
        );
        camera.position.set(0, 20, 40);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.shadowMap.enabled = true;

        // Attach renderer to DOM
        if (mountRef.current) {
            mountRef.current.innerHTML = "";
            mountRef.current.appendChild(renderer.domElement);
        }

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // Load model
        const loader = new GLTFLoader();
        loader.load(
            "/robo.glb",
            (gltf) => {
                const model = gltf.scene;
                model.traverse((node) => {
                    if (node.isMesh) {
                        node.castShadow = true;
                    }
                });

                // Scale and position adjustments
                model.scale.set(0.85, 0.85, 0.85);
                // Set initial y position so the head isn't clipped
                model.position.y = -2;
                scene.add(model);

                // Create a shadow mesh beneath the model
                const shadowGeometry = new THREE.CircleGeometry(3, 32); // adjust size as needed
                const shadowMaterial = new THREE.ShadowMaterial({
                    opacity: 0.5,
                });
                const shadowMesh = new THREE.Mesh(
                    shadowGeometry,
                    shadowMaterial
                );
                shadowMesh.rotation.x = -Math.PI / 2; // lie flat on the ground
                shadowMesh.position.y = -2.01; // position just below the model
                shadowMesh.receiveShadow = true;
                scene.add(shadowMesh);

                // Store reference for external usage
                characterRef.current = model;
                setCharacter(model);

                // Optional: use animations if available
                let mixer = null;
                if (gltf.animations && gltf.animations.length) {
                    mixer = new THREE.AnimationMixer(model);
                    const idleAction = mixer.clipAction(gltf.animations[0]);
                    idleAction.play();
                }

                // Levitating effect variables
                const baseY = model.position.y;
                const amplitude = 0.5; // adjust for desired levitation height

                const clock = new THREE.Clock();
                const animate = () => {
                    const delta = clock.getDelta();
                    const elapsed = clock.getElapsedTime();

                    if (mixer) {
                        mixer.update(delta);
                    }

                    // Update model y position to simulate levitation
                    model.position.y = baseY + Math.sin(elapsed) * amplitude;

                    renderer.render(scene, camera);
                    requestAnimationFrame(animate);
                };

                animate();
            },
            undefined,
            (error) => {
                console.error("Error loading model:", error);
            }
        );

        // Save scene, renderer, and camera in context
        setScene(scene);
        setRenderer(renderer);
        setCamera(camera);

        // Resize handler
        const handleResize = () => {
            const newWidth = window.innerWidth * 0.4;
            const newHeight = window.innerHeight * 0.9;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };
        window.addEventListener("resize", handleResize);

        // Mouse movement (Y-rotation)
        const handleMouseMove = (event) => {
            if (characterRef.current) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const maxAngle = Math.PI / 4;
                characterRef.current.rotation.y = mouseX * maxAngle;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listeners and DOM on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [setCharacter, setScene, setRenderer, setCamera]);

    return (
        <div
            ref={mountRef}
            style={{ width: "40vw", height: "90vh" }}
            className="rounded-3xl overflow-hidden"
        />
    );
};

export const FixedCanvasContainer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollY = window.scrollY;
            const sectionHeight = window.innerHeight;
            // Determine which 100vh section you are in:
            const sectionIndex = Math.floor(scrollY / sectionHeight);
            // How far into the current section (0 to 1)
            const sectionProgress = (scrollY % sectionHeight) / sectionHeight;

            // Define the maximum horizontal movement range
            const maxHorizontalMovement = window.innerWidth * 0.6;
            let horizontalOffset;

            if (sectionIndex % 2 === 0) {
                // For even sections: move from left to right
                horizontalOffset = sectionProgress * maxHorizontalMovement;
            } else {
                // For odd sections: move from right to left
                horizontalOffset =
                    maxHorizontalMovement -
                    sectionProgress * maxHorizontalMovement;
            }

            // If you have a vertical offset, you can keep that logic; here we keep it at 0
            containerRef.current.style.transform = `translate(${horizontalOffset}px, 0)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-1/4 left-0 z-10 transition-transform duration-100"
        >
            <div className="absolute w-64 h-64 rounded-full bg-red-200 opacity-30 top-10 left-10 blur-xl  overflow-hidden"></div>
            <ThreeJSCanvas />
        </div>
    );
};
