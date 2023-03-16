import React from "react";
import { Link } from "react-router-dom";

const naviComponent = ({
  homepageChange,
  designerChange,
  servicesChange,
  aboutusChange,
  reserveChange,
  memberChange,
}) => {
  return (
    <header className="fixed top-0 right-0 w-full   z-50 flex justify-between items-center flex-wrap bg-black/80 header  ">
      <div id="navi-left" className="">
        <p
          className="text-4xl text-white ml-6  "
          style={{ "font-family": '"La Belle Aurore", "cursive"' }}
        >
          GentlemanHair
        </p>
      </div>
      <div id="navi-right" className="my-3">
        <ul className="flex  text-3xl text-white items-center flex-wrap  ">
          {homepageChange === true && (
            <li className="mr-6 ml-6 cursor-pointer text-5xl text-cyan-400">
              <Link to="/">首頁</Link>
            </li>
          )}
          {homepageChange === false && (
            <li className="mr-6 ml-6 cursor-pointer">
              <Link to="/">首頁</Link>
            </li>
          )}

          {designerChange === false && (
            <li className="mr-6 ml-6 cursor-pointer">
              <Link to="/designer">王牌設計師</Link>
            </li>
          )}
          {designerChange === true && (
            <li className="mr-6 ml-6 cursor-pointer text-5xl  text-red-400">
              <Link to="/designer">王牌設計師</Link>
            </li>
          )}

          {servicesChange === false && (
            <li className="mr-6 ml-6 cursor-pointer">
              <Link to="/services">服務項目</Link>
            </li>
          )}
          {servicesChange === true && (
            <li className="mr-6 ml-6 cursor-pointer text-5xl text-blue-200">
              <Link to="/services">服務項目</Link>
            </li>
          )}

          {aboutusChange === false && (
            <li className="mr-6 ml-6 cursor-pointer">
              <Link to="/aboutus">關於我們</Link>
            </li>
          )}

          {aboutusChange === true && (
            <li className="mr-6 ml-6 cursor-pointer text-5xl text-amber-800">
              <Link to="/aboutus">關於我們</Link>
            </li>
          )}

          {reserveChange === false && (
            <li className="mr-6 ml-6 cursor-pointer">
              <Link to="/reserve">預約剪髮</Link>
            </li>
          )}
          {reserveChange === true && (
            <li className="mr-6 ml-6 cursor-pointer text-5xl text-amber-500">
              <Link to="/reserve">預約剪髮</Link>
            </li>
          )}

          {memberChange === false && (
            <li className="mr-6 ml-6 cursor-pointer">
              <Link to="/membership">會員中心</Link>
            </li>
          )}
          {memberChange === true && (
            <li className="mr-6 ml-6 cursor-pointer text-5xl text-green-300">
              <Link to="/membership">會員中心</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
export default naviComponent;
