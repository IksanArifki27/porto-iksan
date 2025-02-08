import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div className="md:flex items-center min-h-screen  mx-7">
      {/* hero section */}
      <div className="md:w-1/2 w-full " data-aos="fade-right">
        <p className="text-blue-600 font-medium md:text-xl my-3 md:text-left text-center ">
          Hi, I’m Mohammad Iksan Arifki
        </p>
        <h1 className="md:text-5xl text-3xl md:text-left text-center font-bold   ">
          Web Developer & <br /> Graphic Design
        </h1>

        <p className="text-justify  pt-3">
          Hello, I'm Mohammad Iksan Arifki, a Web Developer and Graphic Designer
          who is passionate about creating engaging and functional digital
          experiences. With a background in technology and design, I have a
          knack for designing websites that are not only responsive, but also
          visually pleasing. If you are looking for a creative Web Developer and
          dedicated Graphic Designer, I am ready to help make your ideas come to
          life. Let's talk and see how I can help grow your project!
        </p>
        <button className="bg-primary p-3 mt-5 rounded-md shadow-md cursor-pointer hover:bg-blue-700 text-white font-bold my-2 flex items-center gap-2">
          <MdEmail className="w-6 h-6" /> Contact Me
        </button>
      </div>
      <div
        className="md:w-1/2 w-full flex justify-center   "
        data-aos="fade-left"
      >
        <div className="w-80 h-80 bg-gradient-to-tr from-blue-500 to-primary rounded-full relative ">
          <Image
            src="/image/iksan.png"
            alt=""
            width={600}
            height={600}
            className="absolute bottom-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
