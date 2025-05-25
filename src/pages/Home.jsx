import React, { useEffect } from "react";
import cleanup from "../assets/home/cleanup.png";
import chair from "../assets/home/table.png";
import laptop from "../assets/home/chair1.png";
import faceicons from "../assets/icons/face-icons.png";
import burse from "../assets/home/bursse.png";
import gulbus from "../assets/home/gublus.png";
import latestone from "../assets/home/latest-pic1.png";
import latesttwo from "../assets/home/latest-pic2.png";
import spary from "../assets/home/Spray.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../pages/carousel";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <div className="container px-4 sm:px-8 lg:px-20 pt-20">
        <div className="relative">
          <img
            className="w-full rounded-3xl"
            src={cleanup}
            data-aos="zoom-out-up"
            alt="cleanup"
          />

          <div>
            <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 opacity-1 p-4 sm:p-6 rounded-2xl w-[90%] sm:w-[70%] lg:w-[45%] shadow-lg text-center">
              
              <div className="flex gap-1 items-center justify-center pb-3">
                <div>
                  <img className="w-[30px] h-[30px]" src={spary} alt="spary" />
                </div>
                <p className="text-base sm:text-lg font-semibold">
                  go-to Cleaners
                </p>
              </div>

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
        <div data-aos="fade-right">
          <div className="flex gap-2">
            <img className="w-3 h-4" src={burse} alt="burse" />
            <p>Regular</p>
          </div>
          <p className="text-[68px]">
            Office <span className="font-extralight">Cleaners.</span>
          </p>
          <p className="text-[17px]">
            The cleaning team that cares — Experts in creating pristine homes
            and productive workspaces.
          </p>
          <button className="bg-slate-400 mt-2 w-[200px] h-[50px] rounded-3xl text-black hover:bg-green-300">
            Explore
          </button>
        </div>

        <div className="mb-5 relative w-[400px] h-[400px]">
          <img
            className="w-full h-full rounded-3xl object-cover"
            data-aos="flip-left"
            src={laptop}
            alt="laptop"
          />

          <div className="absolute w-[150px] h-[150px] top-5 -left-5">
            <div className="bg-white rounded-3xl shadow-md px-4 py-2">
              <p className="text-3xl font-semibold">24/7</p>
              <p className="text-xl font-extralight">Maintenance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-200">
        <div className="container pt-10 px-4 grid grid-cols-3 gap-x-8 text-center">
          <div data-aos="zoom-in">
            <p className="text-[80px]  font-normal">5k</p>
            <p className="text-sm text-gray-600">Customers</p>
          </div>
          <div data-aos="zoom-in">
            <p className="text-[80px]  font-normal">4.5k</p>
            <p className="text-sm text-gray-600">Repeat</p>
          </div>
          <div data-aos="zoom-in">
            <p className="text-[80px] font-normal">99%</p>
            <p className="text-sm text-gray-600">Satisfaction</p>
          </div>
        </div>

        <div className="container px-4 grid grid-cols-2 gap-4 pt-12 ">
          <div className="px-14 py-8" data-aos="fade-right">
            <p className="uppercase">Efficient</p>
            <p className="text-[45px] font-normal">
              Professional Cleaning <br /> For Every Occasion
            </p>
            <p>
              Whether you're maintaining a pristine workspace, or simply keeping
              your home in top shape, our services are designed to meet all you
              needs
            </p>
          </div>
          <div>
            <img className="w-[500px] h-[500px]" src={gulbus} alt="gulbus" />
          </div>
        </div>
      </div>

      <div>
        <Carousel />
      </div>

      <div className="container px-4 grid grid-cols-2 gap-7 mt-4">
        <p className="pl-[90px] text-3xl font-normal">Latest Posts</p>

        <div className="pl-[90px] text-lg font-extralight">
          <p>Our recent articles</p>
          <p>Simplify your tasks and maintaining the cleanliness.</p>
        </div>
      </div>

      <div className="container px-7 grid grid-cols-2 gap-5 mt-5 mb-4">
        <div className="px-12">
          <img
            className=" w-[100%] h-[400px] rounded-3xl mx-5"
            src={latestone}
            alt="latestone"
          />
        </div>

        <div className="px-12">
          <img
            className=" w-[100%] h-[400px] rounded-3xl mx-5"
            src={latesttwo}
            alt="latesttwo"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
