import React from "react";
import beardImg from "../img/beard.png";
import introduceImg01 from "../img/introduce01.png";
import introduceImg02 from "../img/introduce02.png";
import introduceImg03 from "../img/introduce03.png";

const aboutusPage = () => {
  return (
    <div id="aboutusPage">
      <div className="w-full flex justify-center items-start mt-40 gap-20 flex-wrap   ">
        <div
          id="introduce-left"
          className="w-96 flex flex-col items-center gap-8"
        >
          <h1 className="text-2xl">Introducing</h1>
          <p className="text-4xl text-amber-800">The GentlemanHair</p>
          <p className="text-5xl text-amber-800">Science 2023</p>
          <img src={beardImg} alt="beardImg" className="h-40" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            tempore nobis quos quis. Ea omnis, modi itaque earum animi nisi
            delectus iusto commodi maiores quod praesentium quo error quas
            tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nesciunt ad eaque ipsum vitae consequuntur rem quis corporis
            architecto, nulla placeat maxime iure? Reprehenderit praesentium
            iure similique quasi voluptatibus quis doloribus?
          </p>
          <p className="text-amber-800 px-3 py-2 border-2 border-solid border-amber-800 cursor-pointer">
            MORE ABOUT US
          </p>
        </div>
        <div id="introduce-right" className="relative w-96 ">
          <img
            src={introduceImg01}
            alt="introduceImg"
            className="w-52 absolute top-20 left-0 cursor-pointer hover:z-10 hover:border-8 hover:border-dashed hover:border-amber-800   "
          />
          <img
            src={introduceImg02}
            alt="introduceImg"
            className="w-52 absolute top-40 left-40 cursor-pointer hover:z-10 hover:border-8 hover:border-dashed hover:border-amber-800  "
          />
          <img
            src={introduceImg03}
            alt="introduceImg"
            className="w-52 absolute top-80 left-12 cursor-pointer hover:border-8 hover:border-dashed hover:border-amber-800   "
          />
        </div>
      </div>
    </div>
  );
};
export default aboutusPage;
