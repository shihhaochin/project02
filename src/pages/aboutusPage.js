import React from "react";
import beardImg from "../img/beard.png";
import introduceImg01 from "../img/introduce01.png";
import introduceImg02 from "../img/introduce02.png";
import introduceImg03 from "../img/introduce03.png";
import customer01 from "../img/customer01.png";
import customer02 from "../img/customer02.png";
import customer03 from "../img/customer03.png";

const aboutusPage = () => {
  return (
    <div id="aboutusPage">
      <div className="w-full flex justify-center items-start mt-40 gap-36 flex-wrap   ">
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
        <div id="introduce-right" className="relative w-96 h-192 ">
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

      <h1 className="w-full text-center my-10 text-3xl text-yellow-800 ">
        ～顧客的使用感想～
      </h1>

      <div className="flex justify-center items-center gap-6 flex-wrap my-6">
        <div className="flex  shadow-2xl  ">
          <img src={customer01} alt="customerImg" className="w-52" />
          <div className="w-52">
            <h1 className="text-3xl bg-amber-800 text-center text-white mb-2   ">
              Smith
            </h1>
            <p className="text-2xl text-amber-800 mb-3 mx-2">
              鬍子修剪的太棒了
            </p>
            <p className="mx-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              tenetur? Recusandae adipisci quis quia ratione reprehenderit
              facilis quidem accusantium omnis placeat consequatur quasi
              explicabo distinctio atque, rem at aliquid alias.
            </p>
          </div>
        </div>
        <div className="flex  shadow-2xl  ">
          <img src={customer02} alt="customerImg" className="w-52" />
          <div className="w-52">
            <h1 className="text-3xl bg-amber-800 text-center text-white mb-2   ">
              Brown
            </h1>
            <p className="text-2xl text-amber-800 mb-3 mx-2">總是有驚喜！</p>
            <p className="mx-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              tenetur? Recusandae adipisci quis quia ratione reprehenderit
              facilis quidem accusantium omnis placeat consequatur quasi
              explicabo distinctio atque, rem at aliquid alias.
            </p>
          </div>
        </div>
        <div className="flex  shadow-2xl  ">
          <img src={customer03} alt="customerImg" className="w-52" />
          <div className="w-52">
            <h1 className="text-3xl bg-amber-800 text-center text-white mb-2   ">
              Davies
            </h1>
            <p className="text-2xl text-amber-800 mb-3 mx-2">
              朋友推薦，不錯。
            </p>
            <p className="mx-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              tenetur? Recusandae adipisci quis quia ratione reprehenderit
              facilis quidem accusantium omnis placeat consequatur quasi
              explicabo distinctio atque, rem at aliquid alias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutusPage;
