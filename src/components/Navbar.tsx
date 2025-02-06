"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > -10) {
        setScroll(true);
        console.log("scroll");
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div
      className={`bg-transparent shadow-md navbar   ${
        scroll ? "bg-blue-400" : "bg-transparent"
      }`}
    >
      <div className="mx-7 flex justify-between p-5 items-center ">
        <div className="logo font-bold text-2xl md:text-xl">iksan arifki</div>
        <ul className="hidden items-center gap-4 md:flex">
          <li className="">Home</li>
          <li className="cursor-pointer">About </li>
          <li>Portofolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
