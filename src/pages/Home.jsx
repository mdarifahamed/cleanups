import React, { useEffect } from "react";
import cleanup from "../assets/home/cleanup.png";
import chair from "../assets/home/table.png";
import laptop from "../assets/home/chair1.png";
import faceicons from "../assets/icons/face-icons.png";
import burse from "../assets/home/bursse.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <div className="container px-4 sm:px-8 lg:px-20 mt-4">
        <div className="relative">
          <img
            className="w-full rounded-3xl"
            src={cleanup}
            data-aos="zoom-in"
            alt="cleanup"
          />

          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 opacity-1 p-4 sm:p-6 rounded-2xl w-[90%] sm:w-[70%] lg:w-[45%] shadow-lg text-center">
            <p className="text-base sm:text-lg font-semibold">go-to Cleaners</p>
            <p className="text-3xl sm:text-4xl lg:text-[55px] text-gray-500">
              Expert <br />
              <span className="italic">Cleaning</span>
            </p>
            <p className="text-sm mt-2">
              Creating cleaner, healthier spaces so you can focus on what
              matters most and relax on the weekends.
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-8 lg:px-20 mt-20 flex flex-col lg:flex-row items-center gap-20">
        <div className="relative">
          <img
            src={chair}
            data-aos="fade-right"
            className="w-full max-w-[300px] sm:max-w-[400px] h-[400px] rounded-2xl"
            alt="chair"
          />

          <div className="absolute top-8 -right-10 bg-white/80 px-3 py-2 w-[60%] h-[100px] rounded-3xl shadow-md">
            <p className="text-4xl">2X</p>
            <p className="text-base text-gray-700">Deep Cleaning</p>
          </div>
        </div>

        <div className="text-center lg:text-left max-w-lg" data-aos="fade-left">
          <div className="flex gap-5">
            <img className="w-8 h-6" src={faceicons} alt="faceicons" />
            <p className="uppercase">Fresh</p>
          </div>

          <p className="mt-5 text-[60px]">
            Home <span className="font-extralight">Refresh.</span>
          </p>
          <p className="text-gray-600 mb-4">
            Experience the ultimate expert cleaning — creating spaces where
            comfort and productivity thrive.
          </p>
          <button className="bg-slate-200 text-black px-6 py-2 rounded-md hover:bg-green-400 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="container px-4 sm:px-8 lg:px-20 mt-20 flex flex-col lg:flex-row items-center gap-20 ">
        <div>
          <div className="flex gap-2">
            <img className="w-3 h-4" src={burse} alt="burse" />
            <p>Regular</p>
          </div>
          <p>Office Cleaners.</p>
          <p>
            The cleaning team that cares — Experts in creating pristine homes
            and productive workspaces.
          </p>
          <button className="bg-white rounded-2xl text-black hover:bg-green-300">
            Explore
          </button>
        </div>

        <div className="mb-5 relative w-[400px] h-[400px]">
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={laptop}
            alt="laptop"
          />

          <div className="absolute top-5 left-5">
            <div className="bg-white rounded-3xl shadow-md px-4 py-2">
              <p className="text-sm font-semibold">24/7</p>
              <p className="text-sm font-semibold">Maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
