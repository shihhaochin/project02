import React, { useState, useEffect } from "react";

import FooterComponent from "../components/footer-component";

const memberPage = ({
  setHomepageChange,
  setDesignerChange,
  setServicesChange,
  setAboutusChange,
  setReserveChange,
  setMemberChange,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [loginChange, setLoginChange] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setHomepageChange(false);
    setDesignerChange(false);
    setServicesChange(false);
    setAboutusChange(false);
    setReserveChange(false);
    setMemberChange(true);
  });

  return (
    <div className="h-screen">
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
            </section>
          )}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default memberPage;
