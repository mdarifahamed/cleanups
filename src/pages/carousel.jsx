// Carousel.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faceone from "../assets/home/face-one.png";
import facetwo from "../assets/home/face-two.png";
import facethree from "../assets/home/face-three.png";

const Carousel = () => {
  const testimonials = [
    {
      img: faceone,
      bg: "bg-slate-200",
      text: `“Impeccable Service! We’ve been using this cleaning service for our office for over a year now, and the results are always impressive. Highly recommend!” — Jane Roberts, Brightech Co.`,
    },
    {
      img: facetwo,
      bg: "bg-sky-300",
      text: `"A Life-Changer for Our Home! As a busy dad, keeping up with the housework can be overwhelming, but this cleaning service has been a lifesaver and the team is so friendly and respectful.” — Mark Harrison, Home Owner`,
    },
    {
      img: facethree,
      bg: "bg-green-300",
      text: `“Thorough and Trustworthy! I was hesitant to hire a cleaning service, but after seeing the results, I’m so glad I did. They take care of my house with such care.” — Rachel Davis, Home Owner`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-10 mt-20 mb-20">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-5">
            <div
              className={`${item.bg} h-[400px] rounded-3xl flex flex-col items-center justify-center p-6 shadow-lg text-center`}
            >
              <img
                src={item.img}
                alt="testimonial face"
                className="w-20 h-20  rounded-full object-cover mb-4"
              />
              <p className="text-lg font-medium text-gray-800">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


