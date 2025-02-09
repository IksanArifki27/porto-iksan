"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Portofolio = () => {
  const [current, setCurrent] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const cards = [
    {
      image: "/image/sioktig.png",
      title: "Sioktig",
      description: "Info which directs to the other page.",
      link: "https://github.com/IksanArifki27/Sistem_informasi_K3",
    },
    {
      image: "/image/idplay.png",
      title: "ID-PLAY",
      description: "Info which directs to the other page.",
      link: "https://github.com/IksanArifki27/IDPLAY-V2",
    },
    {
      image: "/image/webbatu.png",
      title: "Travel Kota Batu",
      description: "Info which directs to the other page.",
      link: "https://github.com/IksanArifki27/destinasi_batu",
    },
  ];
  useEffect(() => {
    const lebar = window.screen.width;
    if (lebar > 410) {
      setSize(3);
    } else {
      setSize(1);
    }
    console.log(size);
  }, []);

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
    <div className="min-h-screen mx-7 bg-blue-50" id="portofolio">
      <div data-aos="fade-down">
        <p className="text-2xl md:text-left text-primary text-center py-5 font-bold">
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
              {cards.slice(current, current + size).map((card, index) => (
                <div
                  className="flex-none md:w-1/3 w-full  p-4 bg-white rounded-lg shadow-md"
                  key={index}
                >
                  <img
                    className="w-full h-52 object-cover mb-4 rounded-lg"
                    src={card.image}
                    alt="Card"
                  />
                  <div className="flex justify-between">
                    <h3 className="text-xl font-medium">{card.title}</h3>
                    <a
                      href={card.link}
                      target="_blank"
                      className="text-blue-400"
                    >
                      {" "}
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
              <button
                className="w-12 h-12 rounded-full bg-primary  relative right-4 "
                onClick={handlePrev}
              >
                <FaArrowLeft className="w-6 h-6 ml-3 text-white" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-primary relative left-10"
                onClick={handleNext}
              >
                <FaArrowRight className="w-6 h-6 ml-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
