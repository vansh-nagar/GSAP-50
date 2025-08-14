import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const VideoScreenAnimation = () => {
  const first = useRef(null);
  const second = useRef(null);
  const img = useRef(null);

  const handleFlip = () => {
    const state = Flip.getState(".main");
    // Move the image into the second div
    second.current.appendChild(img.current);
    Flip.from(state, { duration: 1, ease: "power4.inOut" });
  };

  useEffect(() => {
    handleFlip();
  }, []);

  return (
    <div className="">
      <button
        onClick={handleFlip}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded absolute bottom-4 right-1/2 z-50"
      >
        Flip Image
      </button>
      <div ref={first} className="h-screen w-full object-cover absolute">
        <img
          ref={img}
          src="https://i.pinimg.com/1200x/76/45/f2/7645f2ba3d5c8f8b21b58eb3fb69ca26.jpg"
          alt="Flippable"
          className="main"
        />
      </div>
      <div
        ref={second}
        className="bg-black h-40 w-40 fixed bottom-4 left-4 object-contain"
      ></div>
    </div>
  );
};

export default VideoScreenAnimation;
