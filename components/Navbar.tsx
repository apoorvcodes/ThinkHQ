import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        return;
      }
      setIsMobile(true);
    });
  }, []);
  return (
    <div className="flex pt-6   pb-6 justify-between items-center">
      <div className="flex flex-row space-x-4 justify-center items-center">
        <div className="font-bold text-2xl md:text-3xl p-2 text-white bg-prime rounded-md">
          HQ
        </div>
        <div className="font-bold text-2xl md:text-4xl  text-prime">
          ReThink
        </div>
      </div>
      {isMobile ? (
        <div className="flex flex-row space-x-4 items-center">
          <div className="text-lg font-bold ">
            <FaGithub />
          </div>
          <div className="text-sm font-bold text-white bg-prime p-1 ">
            GET STARTED{" "}
          </div>{" "}
        </div>
      ) : (
        <div className="flex flex-row space-x-4 items-center">
          <div className="text-xl font-bold ">GITHUB</div>
          <div className="text-xl font-bold text-white bg-prime p-2 ">
            GET STARTED{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Navbar;
