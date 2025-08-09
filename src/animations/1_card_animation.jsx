import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animation1 = () => {
  const first = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({});
    const cards = gsap.utils.toArray(".card");

    tl.from(cards, {
      y: "100vh",
      stagger: 1,
      ease: "power3.out",
      duration: 1,

      scrollTrigger: {
        trigger: first.current,
        start: "top top",
        end: "3000",
        scrub: 1,
        pin: true,
      },
    });
  });

  const colors = [
    { name: "Pink", class: "bg-pink-300", link: "/card_animation/pink.png" },
    { name: "Blue", class: "bg-blue-300", link: "/card_animation/blue.png" },
    {
      name: "Yellow",
      class: "bg-yellow-200",
      link: "/card_animation/yellow.png",
    },
    { name: "Green", class: "bg-green-200", link: "/card_animation/green.png" },
    {
      name: "Purple",
      class: "bg-purple-200",
      link: "/card_animation/purple.png",
    },
    {
      name: "Orange",
      class: "bg-orange-200",
      link: "/card_animation/orange.png",
    },
  ];

  return (
    <div className="w-full h-full  bg-black">
      <div
        ref={first}
        className="h-screen w-full flex items-center justify-center bg-black relative"
      >
        <div className=" text-white text-9xl font-light">HEY GSAPPPPP</div>
        {colors.map((color, i) => (
          <div
            key={i}
            className={`card absolute h-[400px] w-[300px] rounded-3xl shadow-lg ${color.class} p-4 overflow-hidden
            `}
            style={{
              left: `calc(50% + (${i * 70}px - ${(colors.length / 2) * 70}px))`, // offset X
              transform: `translateX(-50%) rotate(${
                (i - colors.length / 2) * 10
              }deg)`, // fan out rotation
            }}
          >
            <div className=" flex justify-between">
              <div className="text-neutral-700 text-xs">Card {i + 1}</div>
              <div className="text-neutral-700 text-xs">
                Color {color.class}
              </div>
            </div>
            <img
              src={color.link}
              alt={color.name}
              className=" absolute left-0"
            />
          </div>
        ))}
      </div>
      <div className=" h-screen w-full flex justify-center items-center ">
        hi
      </div>
    </div>
  );
};

export default Animation1;
