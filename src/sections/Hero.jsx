import React, { Suspense, useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";

import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import Button from "../components/Button.jsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const textRef = useRef(null);
  const fullText = "Learning & Building Stuff..";

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(textRef.current, {
      duration: 2,
      text: fullText,
      ease: "none",
      onComplete: () => {
        gsap.to(textRef.current, {
          duration: 1,
          opacity: 1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        });
      },
    });

    tl.to(textRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(textRef.current, { text: "" });
      },
    });

    tl.to(textRef.current, {
      duration: 0.5,
      opacity: 1,
      ease: "power2.out",
    });

    return () => tl.kill(); // Clean up the animation on unmount
  }, []);

  return (
    <section id="#home" className="h-screen">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium text-white text-center font-generalsans">
          नमस्ते, I am Sameer... <span className="waving-hand">👋</span>
        </p>

        <p className="hero_tag text-gray_gradient" ref={textRef}></p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />

            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-[-60px] left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
