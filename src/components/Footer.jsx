import React from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="bg-green-200 mt-10 ">
        <div className="px-7 grid grid-cols-4 pt-32 mb-5 ">
          <div className="flex flex-col ">
            <img className="w-[100px] h-[40px] mb-2" src={logo} alt="logo" />

            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="1x"
                  style={{ color: "#FF0000" }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  style={{ color: "#E1306C" }}
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="1x"
                  style={{ color: "#1877F2" }}
                />
              </a>
            </div>
            <p>Efficient Cleaning,</p>
            <p>Exceptional Results.</p>
          </div>

          <div className=" ">
            <p className="font-semibold mb-1 uppercase">Main</p>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
          </div>

          <div className="">
            <p className="font-semibold mb-1 uppercase">Pages</p>
            <p>Contact</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="">
            <p className="font-semibold mb-1 uppercase">Utilities</p>
            <p>Style Guide</p>
            <p>Instructions</p>
            <p>Licenses</p>
            <p>Changelog</p>
          </div>
        </div>

        <div className=" mx-7 border-t border-black">
          <div className=" pt-2 px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 text-center md:text-left">
            <p>© 2024 Cleaners. All Rights Reserved.</p>
            <p className="font-semibold">Powered By Florist WebEx Pvt Ltd.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
