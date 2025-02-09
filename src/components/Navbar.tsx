"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div className={`relative navbar mx-7 w-full shadow-md z-10`}>
      <div
        className={`flex justify-between p-4 items-center fixed top-0 right-0 left-0  ${
          scroll ? "bg-primary" : "bg-transparent "
        }`}
      >
        <div
          className={`logo font-bold text-xl text-primary ${
            scroll ? "text-white" : " "
          } `}
        >
          iksan arifki
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-primary font-medium hover:text-secondary cursor-pointer`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-primary font-medium hover:text-secondary cursor-pointer`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-primary font-medium hover:text-secondary cursor-pointer`}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-primary font-medium hover:text-secondary cursor-pointer`}
          >
            <a href="#portofolio">Portofolio</a>
          </li>
        </ul>
        <div
          className="md:hidden flex justify-center cursor-pointer ease-in-out duration-1000"
          onClick={handleToggle}
        >
          {!toggle ? (
            <GiHamburgerMenu className="text-white w-5 h-5" />
          ) : (
            <IoClose className="text-white w-5 h-5 font-bold" />
          )}
        </div>
      </div>
      <div
        className={`${
          !toggle
            ? "hidden"
            : "fixed top-10 right-0 left-0 py-4 w-full px-8 bg-primary ease-in-out duration-300 "
        }`}
      >
        <ul className="">
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            <a href="#home" onClick={() => setToggle(false)}>
              Home
            </a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            <a href="#about" onClick={() => setToggle(false)}>
              About
            </a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            <a href="#skills" onClick={() => setToggle(false)}>
              Skills
            </a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            <a href="#portofolio" onClick={() => setToggle(false)}>
              Portofolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
