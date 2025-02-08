import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-blue-800 ">
      <div className="mx-7 md:flex items-center justify-between">
        <div>
          <h1 className="md:text-3xl text-2xl text-center font-bold text-white md:mt-8 pt-5">
            Iksan Arifki
          </h1>
          <p className="text-white mt-3 text-center md:text-left">
            Connect With Us
          </p>
          <div className="flex justify-between gap-5 mt-4 text-white ">
            <FaGithub className="w-6 h-6 cursor-pointer hover:text-gray-300 " />
            <FaFacebookSquare className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
        <ul className="flex items-center justify-center md:gap-4 gap-3 mt-5">
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            Home
          </li>
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            About
          </li>
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            Portofolio
          </li>
          <li className="text-xl  text-white hover:text-gray-200 cursor-pointer">
            Contact
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
