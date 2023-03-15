import React, { useState } from "react";
import facebookImg from "../img/facebook.png";
import googleImg from "../img/google.png";

const memberPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [loginChange, setLoginChange] = useState(false);

  return (
    <div id="membershipPage" className="member-bg">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center  ">
        {loginChange === false && (
          <section className="flex flex-col items-center justify-center gap-10">
            <div className="border-2 border-solid border-whtie w-80  flex justify-between ">
              <button className="text-white w-1/2 text-3xl py-2">註冊</button>
              <button
                className="bg-white text-3xl w-1/2"
                onClick={() => {
                  setLoginChange(true);
                }}
              >
                登入
              </button>
            </div>
            <input
              type="text"
              className="outline-none bg-transparent border-b-2 border-solid border-white text-3xl p-3 text-white"
              placeholder="姓名"
            />
            <input
              type="email"
              className="outline-none bg-transparent border-b-2 border-solid border-white text-3xl p-3 text-white"
              placeholder="電子信箱"
            />
            <input
              type="password"
              className="outline-none bg-transparent border-b-2 border-solid border-white text-3xl p-3 text-white"
              placeholder="密碼"
            />
            <input
              type="password"
              className="outline-none bg-transparent border-b-2 border-solid border-white text-3xl p-3 text-white"
              placeholder="請再輸入一次密碼"
            />
            <button className="text-3xl text-white border-2 border-solid border-white px-20 py-1 login-btn">
              註冊會員
            </button>
          </section>
        )}
        {loginChange === true && (
          <section className="flex flex-col items-center justify-center gap-10">
            <div className="border-2 border-solid border-whtie w-80  flex justify-between ">
              <button
                className="bg-white w-1/2 text-3xl py-2"
                onClick={() => {
                  setLoginChange(false);
                }}
              >
                註冊
              </button>
              <button className="text-white text-3xl w-1/2">登入</button>
            </div>

            <input
              type="email"
              className="outline-none bg-transparent border-b-2 border-solid border-white text-3xl p-3 text-white"
              placeholder="電子信箱"
            />
            <input
              type="password"
              className="outline-none bg-transparent border-b-2 border-solid border-white text-3xl p-3 text-white"
              placeholder="密碼"
            />
            <button className="text-3xl text-white border-2 border-solid border-white px-20 py-1 login-btn">
              登入會員
            </button>
            <div className="border-b-2 border-solid border-white h-16  w-80 relative">
              <p className="absolute top-10 left-36 text-3xl px-2  text-white bg-black border rounded-full">
                or
              </p>
            </div>

            <div className="w-80 h-16 bg-white flex items-center justify-center cursor-pointer gap-3 rounded-full mt-14 ">
              <img src={facebookImg} alt="facebook-logo" className="h-8" />
              <p className="text-3xl text-black">
                <span className="text-blue-600">FACEBOOK</span> 登入
              </p>
            </div>
            <div className="w-80 h-16 bg-white flex  items-center justify-center cursor-pointer gap-3 rounded-full ">
              <img src={googleImg} alt="google-logo" className="h-8" />
              <p className="text-3xl text-black">
                <span className="text-red-700">G</span>
                <span className="text-red-500">O</span>
                <span className="text-yellow-500">O</span>
                <span className="text-green-400">G</span>
                <span className="text-green-700">L</span>
                <span className=" text-blue-700">E</span> 登入
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default memberPage;
