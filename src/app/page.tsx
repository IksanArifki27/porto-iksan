import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import React from "react";

const LadingPorto = () => {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <Hero />
        <Skill />
        <Footer />
      </div>
    </div>
  );
};

export default LadingPorto;
