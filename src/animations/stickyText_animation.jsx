import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const StickyTextAnimation = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  // Removed secondaryTextRef and secondaryContent as per request for "only the text i am here currentlyu"
  const textContent = "i am here currentlyu";

  useGSAP(() => {
    // Pin the container for the duration of the animation
    const pinTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top", // You may want to adjust this to be longer like "+=2000"
      pin: true,
      pinSpacing: false,
      markers: true, // For debugging
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1, // Smoothly links the animation to the scroll
      },
    });

    // Split and animate the first line of text
    const splitText = new SplitText(textRef.current, { type: "chars" });
    gsap.set(splitText.chars, {
      y: 1000,
      x: () => gsap.utils.random(-500, 500),
      rotate: () => gsap.utils.random(-360, 360),
      opacity: 0,
    });

    timeline.to(splitText.chars, {
      y: 0,
      x: 0,
      rotate: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power2.out",
    });

    // Removed animation for secondary text as per request
  });

  return (
    <div className="bg-black w-full text-white font-mono">
      {/* Spacer to allow scrolling before the animation starts */}
      <div className="h-[85vh] w-full"></div>

      <div
        ref={containerRef}
        className="w-full flex flex-col justify-center items-center text-8xl"
      >
        <div
          ref={textRef}
          className="h-screen flex justify-center items-center text-center"
        >
          {textContent}
        </div>
        {/* Removed secondary text div as per request */}
      </div>

      {/* Spacer to allow scrolling after the animation ends */}
      <div className="h-screen w-full"></div>
    </div>
  );
};

export default StickyTextAnimation;
