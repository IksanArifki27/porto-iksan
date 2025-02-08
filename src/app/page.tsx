"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Myskill from "@/components/Myskill";
import Portofolio from "@/components/Portofolio";

const LadingPorto = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />

      <Hero />
      <Myskill />
      <Skill />
      <Portofolio />
      <Footer />
    </>
  );
};

export default LadingPorto;
