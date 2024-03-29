import React from "react";
import footerImg01 from "../img/footer01.png";
import footerImg02 from "../img/footer02.png";
import footerImg03 from "../img/footer03.png";
import footerImg04 from "../img/footer04.png";

const footerComponent = () => {
  return (
    <div className="w-full h-96 bg-black flex justify-evenly flex-wrap footer-box  ">
      <div className="mt-12 ">
        <h1 className="text-white text-5xl mb-10 cursor-pointer relative footertitle  ">
          Company
        </h1>
        <ul className="flex flex-col items-start gap-3 ">
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            About US
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent">
            Our Services
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent">
            Privacy Policy
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            Affiliate Program
          </li>
        </ul>
      </div>
      <div className="mt-12 bg-black  ">
        <h1 className="text-white text-5xl mb-10 cursor-pointer relative footertitle ">
          Get Help
        </h1>
        <ul className="flex flex-col items-start gap-3 ">
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            FAQ
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            Shipping
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            Returns
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            Order Status
          </li>
          <li className="text-gray-500 text-2xl cursor-pointer footerContent ">
            Payment Options
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-black">
        <h1 className="text-white text-5xl mb-10 cursor-pointer relative footertitle text-center ">
          Follow Us
        </h1>
        <div className="flex gap-3 flex-wrap">
          <img
            src={footerImg01}
            alt="instagram-logo"
            className="h-20 bg-gray-500 cursor-pointer footerImg "
          />
          <img
            src={footerImg02}
            alt="twitter-logo"
            className="h-20 bg-gray-500 cursor-pointer footerImg"
          />
          <img
            src={footerImg03}
            alt="facebook-logo"
            className="h-20 bg-gray-500 cursor-pointer footerImg"
          />
          <img
            src={footerImg04}
            alt="google-logo"
            className="h-20 bg-gray-500 cursor-pointer footerImg"
          />
        </div>
      </div>
    </div>
  );
};

export default footerComponent;
