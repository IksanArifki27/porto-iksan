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
          scroll ? "bg-blue-600" : "bg-transparent "
        }`}
      >
        <div
          className={`logo font-bold text-xl text-blue-500 ${
            scroll ? "text-white" : " "
          } `}
        >
          iksan arifki
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-blue-500 font-medium hover:text-secondary cursor-pointer`}
          >
            Home
          </li>
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-blue-500 font-medium hover:text-secondary cursor-pointer`}
          >
            About{" "}
          </li>
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-blue-500 font-medium hover:text-secondary cursor-pointer`}
          >
            Portofolio
          </li>
          <li
            className={`${
              scroll ? "text-white" : " "
            } text-blue-500 font-medium hover:text-secondary cursor-pointer`}
          >
            Contact
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
            : "absolute py-4 w-full px-8 bg-blue-600 ease-in-out duration-500 "
        }`}
      >
        <ul>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            Home
          </li>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            About{" "}
          </li>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            Portofolio
          </li>
          <li className="hover:text-gray-300 cursor-pointer py-3 text-white font-medium">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
