import React, {  useEffect } from "react";

import spray from "../assets/home/Spray.png";
import cleansimg from "../assets/about/img1.png";
import CarouselAbout from "./carouselAbout";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className="containe mt-8 pt-12">
        <div
          className="flex gap-1 items-center justify-center pt-10"
          data-aos="fade-right"
        >
          <img className="w-[30px] h-[30px]" src={spray} alt="spray" />
          <p>Go-To Cleaners</p>
        </div>
        <div className="text-center px-4 ">
          <p className="text-[96px] font-normal" data-aos="zoom-in">
            ABOUT US
          </p>
          <p className="uppercase text-[14px] pb-1 font-serif text-gray-500">
            we’re passionate about Delivering <br /> exceptional cleaning that
            go <br /> beyond expectations.
          </p>
          <button className="bg-orange-400 w-[150px] h-[40px] text-black rounded-3xl hover:bg-green-300 uppercase ">
            Explore
          </button>
        </div>
      </div>

      <div className="mx-12 px-16 mt-5" data-aos="zoom-out-up">
        <img
          className="w-[100%] h-[600px] rounded-3xl"
          src={cleansimg}
          alt="cleansimg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5 px-32">
        <div data-aos="fade-up-right">
          <p className=" text-[20px] font-light">GET TO KNOW</p>
          <p className="text-[68px] font-normal">Our Team</p>
        </div>

        <div data-aos="fade-up-right">
          <p className="text-[20px] font-light">
            Meet the dedicated professionals behind our top-tier cleaning
            services.{" "}
          </p>
          <p className=" text-[20px] font-light">Relax on the weekends.</p>
        </div>
      </div>

      <div>
        <CarouselAbout></CarouselAbout>
      </div>

      <div className="container px-10  text-center grid grid-cols-3 gap-8" >
        <div className="px-10">
          <p className="text-[100px] font-normal">5K</p>
          <p className="text[16px] font-extralight">Customers</p>
        </div>
        <div className="px-10">
          <p className="text-[100px] font-normal">4.5K</p>
          <p className="text[16px] font-extralight">Repeat</p>
        </div>
        <div className="px-10">
          <p className="text-[100px] font-normal">99%</p>
          <p className="text[16px] font-extralight">Satisfaction</p>
        </div>
      </div>
    </>
  );
}

export default About;
