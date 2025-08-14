import React, { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Trying_sticky = () => {
  const text = useRef(null);

  useGSAP(() => {
    const split = new SplitText(text.current, { type: "chars" });

    gsap.set(split.chars, {
      sticky: true,
      top: 0,
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center", 
    });

    gsap.to(split.chars, {
      y: () => {
        return Math.random() * 100;
      },
      onComplete: () => {
        while (text.current.firstChild) {
          text.current.parentNode.insertBefore(
            text.current.firstChild,
            text.current
          );
        }
      },
    });
  });
  return (
    <div>
      <div className="bg-neutral-900 h-[100vh] w-full grid [grid-template-columns:1fr_2fr] text-white">
        <div className="flex justify-center items-center h-full w-full">
          <div ref={text} className="  sticky top-0 ">
            Hello how are you
          </div>
        </div>

        <div className="bg-amber-200"></div>
      </div>
      <div className="bg-indigo-400 h-screen w-full z-50"></div>
      <div className="absolute bottom-0 right-0 writing-mode-vertical-rl [text-orientation:mixed]">
        Hello World
      </div>
    </div>
  );
};

export default Trying_sticky;
