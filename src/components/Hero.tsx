import React from "react";

const Hero = () => {
  return (
    <div className="md:flex items-center min-h-screen  mx-7">
      {/* hero section */}
      <div className="md:w-1/2 w-full">
        <p className="text-blue-600 font-medium md:text-xl my-3 text-2xl ">
          Hi, I’m Mohammad Iksan Arifki
        </p>
        <h1 className="text-5xl font-bold my-2">
          Web Developer & <br /> Graphic Design
        </h1>
        <hr className="w-1/3  border-blue-400" />
        <p className="text-justify my-3">
          I am from Indonesia, I have more than 5 years of work experience, I am
          currently working in a company as a full stack product designer,
          analyzing the system to be created, Managing and leading the team to
          designing the user interface besides that I am also a freelance
          frontend developer. come work with me.
        </p>
        <button className="bg-blue-600 p-3 rounded-md shadow-md cursor-pointer hover:bg-blue-700 text-white font-bold my-2 ">
          📩 Contact Me
        </button>
      </div>
      <div className="md:w-1/2 w-full">
        <img src="/image/Bumi.png" alt="" className="w-96 mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
