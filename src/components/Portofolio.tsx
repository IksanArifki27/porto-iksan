"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Portofolio = () => {
  const [current, setCurrent] = useState<number>(0);
  const cards = [
    {
      image: "/image/corel.png",
      title: "Card 1",
      description: "Info which directs to the other page.",
    },
    {
      image: "/image/photoshop.png",
      title: "Card 2",
      description: "Info which directs to the other page.",
    },
    {
      image: "/image/ai.png",
      title: "Card 3",
      description: "Info which directs to the other page.",
    },
    {
      image: "/image/git.png",
      title: "Card 4",
      description: "Info which directs to the other page.",
    },
  ];
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  if (current > cards.length - 3) {
    setCurrent(0);
  }
  return (
    <div className="min-h-screen mx-7 bg-blue-50">
      <div data-aos="fade-down">
        <p className="text-2xl md:text-left text-blue-500 text-center py-5 font-bold">
          Portofolio
        </p>
        <p>
          Welcome to my web development portfolio. On this page, you will find a
          selection of my recent projects. Each project includes a brief
          description of the portfolio I completed and a link to the github
          site. I am always looking for new opportunities to grow and learn as a
          web developer, and I welcome the opportunity to work on challenging
          and interesting projects. If you are interested in discussing a
          potential project or collaboration, please feel free to contact me.
          Thanks for visiting my portfolio!
        </p>
      </div>
      <div className="mt-2" data-aos="fade-right">
        <div className="w-11/12 ">
          <div className="relative">
            <div className="flex space-x-4  ">
              {cards.slice(current, current + 3).map((card, index) => (
                <div
                  className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md"
                  key={index}
                >
                  <img
                    className="w-full h-52 object-cover mb-4 rounded-lg"
                    src={card.image}
                    alt="Card"
                  />
                  <div className="flex justify-between">
                    <h3 className="text-xl font-medium">{card.title}</h3>
                    <p className="text-blue-400"> View </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
              <button
                className="w-12 h-12 rounded-full bg-gray-300  relative right-4 "
                onClick={handlePrev}
              >
                <FaArrowLeft className="w-6 h-6 ml-3" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-gray-300 relative left-10"
                onClick={handleNext}
              >
                <FaArrowRight className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
