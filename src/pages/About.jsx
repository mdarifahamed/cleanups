import React, { useEffect } from "react";

import spray from "../assets/home/Spray.png";
import qualitytwo from "../assets/icons/quality-two.png";
import homeiocns from "../assets/icons/homeicons.png";
import qualityone from "../assets/icons/quality-icons.png";
import award from "../assets/icons/award.png";
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

      <div className="container px-10  text-center grid grid-cols-3 gap-8">
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

      <div className="container grid grid-cols-3 gap-5 px-20 mt-5" >
        <div className="bg-pink-300 h-[300px] rounded-3xl "  data-aos="zoom-out-up">
          <div className="px-14 py-14">
            <img
              className="w-[60px] h-[60px] pb-3"
              src={qualitytwo}
              alt="qualitytwo"
            />
            <p className="text-[42px] uppercase font-normal">Quality</p>
            <p>every space is spotless and well-maintained.</p>
          </div>
        </div>

        <div className="bg-gray-200 h-[300px] rounded-3xl"  data-aos="zoom-out-up">
          <div className="px-14 py-14">
            <img
              className="w-[50px] h-[70px] pb-4"
              src={homeiocns}
              alt="homeiocns"
            />
            <p className="text-[42px] uppercase font-normal">Refresh</p>
            <p>every room feeling fresh and rejuvenated.</p>
          </div>
        </div>

        <div className="bg-green-200 h-[300px] rounded-3xl"  data-aos="zoom-out-up">
          <div className="px-14 py-14">
            <img
              className="w-[50px] h-[60px] pb-4"
              src={qualityone}
              alt="qualityone "
            />
            <p className="text-[42px] ">Sanitize</p>
            <p>top-grade sanitization techniques.</p>
          </div>
        </div>

        <div className="bg-sky-300 h-[300px] rounded-3xl"  data-aos="zoom-out-up">
          <div className="px-14 py-14">
            <img className="w-[60px] h-[70px] pb-4" src={award} alt="award" />
            <p className="text-[42px]">Awards</p>
            <p>accolades that highlight our service.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
