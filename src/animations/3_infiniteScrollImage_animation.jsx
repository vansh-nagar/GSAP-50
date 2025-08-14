import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Images = [
  "https://cdn.cosmos.so/848d5b45-1e0b-4bd8-a582-5730fb1ec300?format=jpeg",
  "https://cdn.cosmos.so/2fb66eee-6b50-4104-957a-71109fc8dfe4?format=jpeg",
  "https://cdn.cosmos.so/5d9fa2ce-8cbe-4776-b04e-9c0f780f7332?format=jpeg",
  "https://cdn.cosmos.so/5db7ea50-fd48-4df1-9822-7c87a469d1ea?format=jpeg",
  "https://cdn.cosmos.so/4da6fd5a-0c50-47b7-bb62-553aede04e9b?format=jpeg",
];

const InfiniteScrollImageAnimation = () => {
  const container = useRef(null);
  const text = useRef(null);

  useGSAP(() => {
    const images = gsap.utils.toArray(".imgs");

    gsap.from(images, {
      scale: 0,
      stagger: 0.09,
      ease: "power4.in",
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        pin: true,
        start: "top top",
        end: `+=${images.length * 800}px`, // Adjust based on the number of images
      },
    });

    const split = SplitText.create(text.current, { type: "words, chars" });

    gsap.to(split.chars, {
      y: () => Math.random() * 100, // random y between 0 and 100 for each char
      stagger: 0.05,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div className="sticky top-0 w-full h-[90vh] justify-center items-center flex text-black text-xs bg-[#c4c4c4] radialGradient">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 700"
          opacity="0.65"
          className="absolute"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="linearRGB"
            >
              <feTurbulence
                type="turbulence"
                baseFrequency="0.2"
                numOctaves="4"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="5"
                specularConstant="0.7"
                specularExponent="20"
                lightingColor="#ffffff"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="53"></feDistantLight>
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="700" height="700" fill="#ffffff00"></rect>
          <rect
            width="700"
            height="700"
            fill="#ffffff"
            filter="url(#nnnoise-filter)"
          ></rect>
        </svg>
        <div className="absolute top-10 left-10 text-2xl font-light text-[#21212190]">
          Sueña en grande, trabaja más duro, repite ------ todos los días <br />
          Programando el futuro, una línea a la vez <br />
          Donde las ideas toman vuelo y los píxeles bailan <br />
          ----
          <br />
          Rompe las reglas, construye leyendas
        </div>

        <div className="absolute left-2/3 top-1/3 text-[#21212190] text-4xl">
          09.08--2025
        </div>

        <div className="verticalText absolute right-4 bottom-4 text-3xl text-[#21212190]">
          Create every day and change the world.
        </div>
      </div>
      <div ref={container} className="sticky h-screen w-full bg-[#c4c4c4] ">
        <div ref={text} className="text-7xl text-[#21212190]">
          SCROLL DOWN
        </div>
        {Images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="w-full h-screen object-cover absolute imgs scale-150"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollImageAnimation;
