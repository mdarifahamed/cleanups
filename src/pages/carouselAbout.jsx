import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cleanerOne from "../assets/about/clearner1.png";
import cleanerTwo from "../assets/about/cleaner2.png";
import cleanerThree from "../assets/about/cleaner3.png";
import cleanerFour from "../assets/about/cleaner4.png";

const CarouselAbout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280, // laptops and smaller
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      img: cleanerOne,
      name: "Amy Lee",
      role: "Cleaning Specialist",
      description: "Amy ensures every space is spotless and clean.",
    },
    {
      img: cleanerTwo,
      name: "Eva Kim",
      role: "Sanitation Technician",
      description: "Eva provides top-notch disinfection services.",
    },
    {
      img: cleanerThree,
      name: "Ana Cole",
      role: "Residential Cleaner",
      description: "Ana is known for her meticulous cleaning.",
    },
    {
      img: cleanerFour,
      name: "Lily Ray",
      role: "Quality Inspector",
      description: "Lily oversees highest quality control.",
    },
  ];

  return (
    <div className="container mx-auto px-5 sm:px-10 mt-20 mb-20">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-3">
            <div className="h-[400px] bg-white rounded-3xl flex flex-col items-center justify-center p-6  text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-[100%] h-[400px] rounded-3xl object-cover mb-4"
              />
              <p className="text-xl font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500 mb-2">{item.role}</p>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselAbout;





