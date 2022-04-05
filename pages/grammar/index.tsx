import type { NextPage } from "next";
import { useEffect } from "react";
const Grammar: NextPage = () => {
  useEffect(() => {
    console.log(process.env.KEY);
  }, []);
  return <div className=" bg-moon w-full min-h-screen text-white">OK Hi</div>;
};

export default Grammar;
