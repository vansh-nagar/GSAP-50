import React, { useEffect } from "react";
import Lenis from "lenis";
import Animation1 from "./animations/1_card_animation";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => t,
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
      <Animation1 />
    </div>
  );
};

export default App;
