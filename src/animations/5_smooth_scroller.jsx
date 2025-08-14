import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
];

const SmoothScrollerr = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = new SmoothScroller(scrollerRef.current, {
      smooth: 1.2,
    });
  useEffect(() => {
    const el = scrollerRef.current;

    const handleScroll = () => {
      const scrollY = el.scrollTop;
      document.querySelectorAll(".parallax-img").forEach((img, i) => {
        img.style.transform = `translateY(${scrollY * (0.2 + i * 0.1)}px)`;
      });
    };

    el.addEventListener("scroll", handleScroll);

    // Optional: Smooth scrolling with GSAP
    gsap.to(el, {
      scrollTop: el.scrollHeight,
      duration: 0,
      ease: "power1.inOut",
      overwrite: "auto",
    });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);
      style={{
        height: "100vh",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div style={{ height: "200vh", padding: "40px 0" }}>
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              margin: "60px auto",
              width: "400px",
              height: "300px",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={src}
              alt={`parallax-${i}`}
              className="parallax-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.2s",
                willChange: "transform",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothScrollerr;
