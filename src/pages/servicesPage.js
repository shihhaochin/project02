import React from "react";
import scissorsImg from "../img/scissors.png";
import razor from "../img/razor.png";
import razor01 from "../img/razor01.png";
import hairDye from "../img/hair-product.png";

const servicesPage = () => {
  return (
    <div id="servicesPage" className="min-h-screen w-full bg-slate-200">
      <div
        id="services"
        className="w-full min-h-1/3 flex flex-wrap justify-center items-center gap-6 mb-20   "
      >
        <div className="bg-white w-52 h-80 mt-40 flex flex-col items-center justify-evenly cursor-pointer border-2 border-black services-animation ">
          <img src={scissorsImg} alt="scissorsImg" className="h-24" />
          <h1 className="text-3xl">Haircut Styles</h1>
          <p
            className="m-6"
            style={{ "font-family": '"Dancing Script", "cursive"' }}
          >
            Barber is a person whose occupation is mainly to cut dress style
          </p>
        </div>
        <div className="bg-white w-52 h-80 mt-40 flex flex-col items-center justify-evenly cursor-pointer border-2 border-black services-animation ">
          <img src={razor} alt="razorImg" className="h-24" />
          <h1 className="text-3xl">Face Masking</h1>
          <p
            className="m-6"
            style={{ "font-family": '"Dancing Script", "cursive"' }}
          >
            Barber is a person whose occupation is mainly to cut dress style
          </p>
        </div>
        <div className="bg-white w-52 h-80 mt-40 flex flex-col items-center justify-evenly cursor-pointer border-2 border-black services-animation ">
          <img src={razor01} alt="razorImg" className="h-24" />
          <h1 className="text-3xl">Beard Triming</h1>
          <p
            className="m-6"
            style={{ "font-family": '"Dancing Script", "cursive"' }}
          >
            Barber is a person whose occupation is mainly to cut dress style
          </p>
        </div>
        <div className="bg-white w-52 h-80 mt-40 flex flex-col items-center justify-evenly cursor-pointer border-2 border-black services-animation ">
          <img src={hairDye} alt="hairDyeImg" className="h-24" />
          <h1 className="text-3xl">Hair Dye</h1>
          <p
            className="m-6"
            style={{ "font-family": '"Dancing Script", "cursive"' }}
          >
            Barber is a person whose occupation is mainly to cut dress style
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-6">
        <h1
          className="text-5xl  text-yellow-600"
          style={{ "font-family": '"La Belle Aurore", "cursive"' }}
        >
          GentleManHair
        </h1>
        <p className="text-2xl">~Our Services~</p>
      </div>
      <div
        id="servicesPrice"
        className="w-full flex flex-wrap justify-center items-center gap-10  "
      >
        <div id="servicesPrice-left ">
          <ul className="text-5xl font-light ">
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              ???????????????????????? 1000 NT
            </li>
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              ????????????????????? ???900 NT
            </li>
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              60??????????????????????????? 900 NT
            </li>
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              8???????????????????????????500 NT
            </li>
          </ul>
        </div>
        <div id="servicesPrice-right">
          <ul className="text-5xl font-light">
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              ??????????????????(????????????)??? 700 NT
            </li>
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              ?????????2000 NT up
            </li>
            <li className="p-6 border-2 border-b-yellow-600 price-animation cursor-pointer">
              ??????????????????????????? 3000 NT up
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center py-10 ">
        <p className="text-3xl">
          *????????????????????????????????????????????????????????????18????????????????????????????????????
        </p>
      </div>
    </div>
  );
};

export default servicesPage;
