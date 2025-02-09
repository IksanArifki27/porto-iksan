import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-primary ">
      <div className="mx-7 md:flex items-center justify-between">
        <div>
          <h1 className="md:text-3xl text-2xl text-center font-bold text-white md:mt-8 pt-5">
            Iksan Arifki
          </h1>
          <p className="text-white mt-3 text-center md:text-left">
            Connect With Us
          </p>
          <div className="flex justify-between gap-5 mt-4 text-white ">
            <a href="https://github.com/IksanArifki27" target="_blank">
              <FaGithub className="w-6 h-6 cursor-pointer hover:text-gray-300 " />
            </a>
            <a href="https://web.facebook.com/iksanarifki27" target="_blank">
              <FaFacebookSquare className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://www.instagram.com/iksan_arifki10/" target="_blank">
              {" "}
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/iksan-arifki/" target="_blank">
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>
        <ul className="flex items-center justify-center md:gap-4 gap-3 mt-5">
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            <a href="#portofolio">Portofolio</a>
          </li>
        </ul>
      </div>
      <div className="mt-8 w-full text-center">
        <p className="text-white text-wrap">
          Copyright 2025, Made with by ❤️ iksan arifki
        </p>
      </div>
    </div>
  );
};

export default Footer;
