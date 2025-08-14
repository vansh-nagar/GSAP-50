import React, { useReducer, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollerr = () => {
  const containerRef = useRef(null);
  const i1 = useRef(null);
  const i2 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        triggers: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(i1.current, { y: -200, ease: "none" }, 0);
    tl.to(i2.current, { y: -100, ease: "none" }, 0);
  });

  return (
    <div className="    bg-[#a5a5a5] text-9xl text-[#ffffff57]   ">
      <div className=" h-screen w-full"></div>
      PARALLAX EFFECT
      <div
        ref={containerRef}
        className=" flex justify-center items-start h-screen w-full  "
      >
        <div className=" relative mt-10 border-2">
          <img
            src="https://cdn.cosmos.so/493d0389-aea0-4144-8cdf-3fdaff93b364.?format=jpeg"
            alt=""
          />
          <img
            ref={i1}
            className=" absolute  bottom-[-20%] right-[50%] w-80"
            src="https://cdn.cosmos.so/e7624081-8784-4096-a44c-b6421e1a2b6f?format=jpeg"
            alt=""
          />
          <img
            ref={i2}
            src="https://cdn.cosmos.so/ba5f8f19-38cd-4da5-a947-46a53c3a7e56?format=jpeg"
            className=" absolute h-56 top-10 right-[-50%]"
            alt=""
          />
        </div>
      </div>
      <div className=" h-screen w-full"></div>
    </div>
  );
};

export default SmoothScrollerr;
