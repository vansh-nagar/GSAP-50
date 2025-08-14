import React, { useEffect } from "react";
import Lenis from "lenis";
import Animation1 from "./animations/1_card_animation";
import Trying_sticky from "./playground/trying_sticky";
import InertiaCards from "./animations/2_inertia_animation";
import InfiniteScrollImageAnimation from "./animations/3_infiniteScrollImage_animation";
import VideoScreenAnimation from "./animations/4_videoScreen_animation";
import StickyTextAnimation from "./animations/stickyText_animation";
import SmoothScrollerr from "./animations/5_smooth_scroller";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out for smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <SmoothScrollerr />
    </div>
  );
};

export default App;
