import React, { useState } from "react";
import tikicon from "../assets/icons/tik-icons.png";
import basinone from "../assets/service/basin1.png";
import basintwo from "../assets/service/basin2.png";
import basinthree from "../assets/service/basin3.png";
import basinfour from "../assets/service/basin4.png";

function Services() {
  const [zoomImage, setZoomImage] = useState(null);
  const images = [basinone, basintwo, basinthree, basinfour];

  return (
    <>
      <div className="mt-28">
        {/* Top Section */}
        <div className="px-4 flex justify-center items-center text-center mx-auto gap-4">
          <img className="w-[40px] h-[30px]" src={tikicon} alt="tikicon" />
          <p>Expert Cleaning</p>
        </div>

        <div className="text-center">
          <p className="text-[85px]">Services</p>
          <p className="uppercase">
            Quality & Expert Cleaning for <br /> individuals and companies.
          </p>
        </div>

        {/* Services Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <p className="text-lg font-semibold text-green-600">We Cover All Bases</p>
            <p className="text-3xl font-bold text-gray-800">Go-To Experts</p>
            <p className="text-gray-600">
              We pride ourselves on delivering top-quality service every time...
            </p>
            <button className="bg-green-500 text-white w-[150px] h-[40px] rounded-3xl uppercase hover:bg-green-600 transition">
              Explore
            </button>
          </div>

          <div className="pt-24 space-y-6">
            {/* Card examples */}
            <div className="bg-slate-500 rounded-3xl p-6 text-white">
              <p className="uppercase text-sm text-green-200 mb-1">Refresh</p>
              <p className="text-[32px] font-bold mb-2">Home Cleaning</p>
              <p className="text-gray-300">Living space stays spotless...</p>
            </div>
            <div className="bg-slate-500 rounded-3xl p-6 text-white">
              <p className="uppercase text-sm text-green-200 mb-1">Weekly</p>
              <p className="text-[32px] font-bold mb-2">Recurrent Cleaning</p>
              <p className="text-gray-300">Keep your space consistently clean...</p>
            </div>
            <div className="bg-slate-500 rounded-3xl p-6 text-white">
              <p className="uppercase text-sm text-green-200 mb-1">Focus on your work</p>
              <p className="text-[32px] font-bold mb-2">Office Cleaning</p>
              <p className="text-gray-300">Maintain a professional workspace...</p>
            </div>
            <div className="bg-slate-500 rounded-3xl p-6 text-white">
              <p className="uppercase text-sm text-green-200 mb-1">The essentials</p>
              <p className="text-[32px] font-bold mb-2">General Cleaning</p>
              <p className="text-gray-300">Our general cleaning service covers all the basics...</p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="px-8 grid grid-cols-2 gap-5">
          {images.map((img, idx) => (
            <img
              key={idx}
              onClick={() => setZoomImage(img)}
              className="w-full h-[400px] rounded-3xl pb-2 cursor-pointer transition-transform duration-300 hover:scale-105"
              src={img}
              alt={`basin-${idx}`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Overlay */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-4xl max-h-[90vh] rounded-xl shadow-xl transition-transform duration-300"
          />
        </div>
      )}
    </>
  );
}

export default Services;

