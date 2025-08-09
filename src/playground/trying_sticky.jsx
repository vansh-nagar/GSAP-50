import React from "react";

const Trying_sticky = () => {
  return (
    <div>
      <div className=" bg-neutral-900 h-[100vh] w-full grid grid-cols-2 ">
        <div className=" flex justify-center items-center  h-[90vh] bg-green-500 sticky top-10 writing-mode-vertical-rl [text-orientation:mixed]">
          Hello how are you
        </div>
        <div className="bg-amber-200 "></div>
      </div>
      <div className="bg-indigo-400 h-screen w-full z-50"></div>
      <div class="absolute bottom-0 right-0 writing-mode-vertical-rl [text-orientation:mixed]">
        Hello World
      </div>
    </div>
  );
};

export default Trying_sticky;
