import React from "react";
import spray from "../assets/home/Spray.png";

function About() {
  return (
    <>
      <div className="containe mt-8 pt-12">
        <div className="flex gap-1 items-center justify-center pt-10">
          <img className="w-[30px] h-[30px]" src={spray} alt="spray" />
          <p>Go-To Cleaners</p>
        </div>
        <div className="text-center px-4 ">
          <p className="text-[96px] font-normal">ABOUT US</p>
          <p className="uppercase text-[14px] pb-1 font-serif text-gray-500">
            we’re passionate about Delivering <br /> exceptional cleaning that
            go <br /> beyond expectations.
          </p>
          <button className="bg-orange-400 w-[150px] h-[40px] text-black rounded-3xl hover:bg-green-300 uppercase ">Explore</button>
        </div>
      </div>
    </>
  );
}

export default About;
