import React from "react";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="pt-16 pl-4 pr-4 md:pl-24 md:pr-24  flex space-y-8 flex-col md:flex-row md:justify-between md:space-x-0">
      <div className="flex flex-col space-y-6 justify-center">
        <div className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-prime">
          One stop AI destination
        </div>
        <div className="text-5xl md:text-9xl font-extrabold text-text">
          ReThink
        </div>
        <div className="text=xl md:text-2xl font-bold text-white">
          Imagine all new posibilities with ReThink, play around with AI based
          on gpt-3
        </div>
        <div className="flex flex-row space-x-6 pt-4">
          <button className="text-xl md:text-2xl font-bold text-white bg-prime p-3 rounded-lg">
            GET STARTED{" "}
          </button>
          <button className="text-xl md:text-2xl font-bold text-white bg-dark p-3 rounded-lg">
            ABOUT GPT-3
          </button>
        </div>
      </div>
      <Image className="pt-6 md:pt-0" src={require("../assets/hero.svg")} />
    </div>
  );
};
