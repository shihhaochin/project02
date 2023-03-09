import React from "react";
import { Link } from "react-router-dom";

const naviComponent = () => {
  return (
    <header className="absolute top-0 right-0 w-full h-24  z-50 flex justify-between items-center flex-wrap bg-black/80   ">
      <div id="navi-left" className="">
        <p
          className="text-4xl text-white ml-6"
          style={{ "font-family": '"La Belle Aurore", "cursive"' }}
        >
          GentlemanHair
        </p>
      </div>
      <div id="navi-right" className="">
        <ul className="flex  text-3xl text-white flex-wrap  ">
          <li className="mr-6 ml-6 cursor-pointer">
            <Link to="/">首頁</Link>
          </li>
          <li className="mr-6 ml-6 cursor-pointer">
            <Link to="/designer">王牌設計師</Link>
          </li>
          <li className="mr-6 ml-6 cursor-pointer">
            <Link to="/hairStyle">男子髮型</Link>
          </li>
          <li className="mr-6 ml-6 cursor-pointer">
            <Link to="/address">店家位置</Link>
          </li>
          <li className="mr-6 ml-6 cursor-pointer">
            <Link to="/reserve">預約剪髮</Link>
          </li>
          <li className="mr-6 ml-6 cursor-pointer">
            <Link to="/membership">會員中心</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default naviComponent;
