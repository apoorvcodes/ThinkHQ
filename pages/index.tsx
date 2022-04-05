import type { NextPage } from "next";
import Feat from "../components/Features";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
const Home: NextPage = () => {
  return (
    <div className=" bg-moon w-full min-h-screen text-white">
      <Navbar />
      <Hero />
      <Wave />
      <Feat />
    </div>
  );
};

export default Home;
