import React from "react";

const Skill = () => {
  return (
    <div className="my-3 md:flex min-h-screen items-center mx-7" id="skills">
      <div className="md:w-1/2 w-full mr-3" data-aos="zoom-in-right">
        <p className="text-secondary md:text-2xl text-xl mb-3">Hard Skills</p>
        <h2 className="md:text-4xl text-3xl text-center md:text-left font-bold text-primary">
          Development Tools I Use
        </h2>
        <p className="text-gray-800 my-3 text-justify md:text-left ">
          Software that helps me work, Software is just a tool that makes a
          product useful depending on ideas, innovation and creativity.
        </p>
      </div>
      <div
        className="md:w-1/2 w-full my-3 grid justify-center grid-cols-5 grid-rows-3 md:gap-4 gap-3 "
        data-aos="zoom-in"
      >
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md ">
          <img src="/image/html.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/css.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/js.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md ">
          <img src="/image/tailwind.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/react.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/laravel.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/nodejs.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/mysql.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/postgres.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/git.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/photoshop.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/ai.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/corel.png" alt="" />
        </div>
        <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/figma.png" alt="" />
        </div>
        {/* <div className="md:w-20 md:h-20  w-16 h-16 rounded-md p-2 bg-blue-500 hover:bg-secondary shadow-md">
          <img src="/image/ai.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Skill;
