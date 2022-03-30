import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <div className="pl-4 pr-4 md:pl-24 md:pr-24 bg-moon w-full min-h-screen text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
