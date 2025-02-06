import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-60 bg-blue-800 ">
      <div className="mx-7 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mt-8">
            M. Iksan Arifki
          </h1>
          <p className="text-white my-5">Connect With Us</p>
          <div className="flex">
            <p>😂</p>
            <p>😂</p>
            <p>😂</p>
            <p>😂</p>
            <p>😂</p>
          </div>
        </div>
        <ul className="flex items-center justify-center gap-4">
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
      <div className="mt-12 w-full text-center">
        <p className="text-white">
          Copyright 2025, Made with by ❤️ iksan arifki
        </p>
      </div>
    </div>
  );
};

export default Footer;
