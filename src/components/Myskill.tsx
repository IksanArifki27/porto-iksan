import Image from "next/image";
import React from "react";

const Myskill = () => {
  return (
    <div className="bg-blue-50 min-h-screen" id="about">
      <div className="mx-7 pt-9" data-aos="zoom-in-right">
        <p className="text-xl text-secondary text-center md:text-left ">
          Let &apos;s Colaborate
        </p>
        <p className="text-3xl text-primary font-bold text-center md:text-left my-3">
          What Can I Do For Your Needs
        </p>
        <p>
          If you need a functional and responsive website, or an attractive
          graphic design to strengthen your brand image, I&apos;m here to help.
          I believe that good collaboration can produce more innovative and
          impactful work. Let&apos;s create something extraordinary together!
          Feel free to contact me if you are interested in working together or
          would like to discuss the project further.
        </p>
      </div>

      <div className=" md:flex items-center justify-between mx-7 gap-2 mt-7">
        <div
          className="webdev md:w-1/2 w-full  items-center flex flex-col justify-center shadow-lg bg-white rounded-lg   my-4 p-8"
          data-aos="zoom-in"
        >
          <Image
            src={"/image/webdev.png"}
            height={200}
            width={200}
            alt="webdev"
          />
          <p className="text-center text-2xl font-bold text-primary">
            Web Developer
          </p>
          <p className="text-justify">
            responsible for designing, building, and maintaining a website or
            web application. They use a variety of programming languages, tools,
            and technologies to create interactive and functional user
            experiences. There are two main aspects of web development Frontend
            and Backend
          </p>
        </div>
        <div
          className="design md:w-1/2 w-full  items-center flex flex-col justify-center shadow-lg bg-white rounded-lg  my-4 p-8"
          data-aos="zoom-in"
        >
          <Image src={"/image/DG.png"} height={200} width={200} alt="webdev" />
          <p className="text-2xl font-bold text-center text-secondary">
            Design Graphic
          </p>
          <p className="text-justify">
            works to create effective visuals for the communication of a message
            or brand identity through images, typography, and other design
            elements. They combine creativity and engineering to produce designs
            that are both aesthetic and functional, which are used in a variety
            of digital and print media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Myskill;
