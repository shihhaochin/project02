import React, { useEffect } from "react";
import reserveImg from "../img/reserve.png";

const reservePage = ({
  setHomepageChange,
  setDesignerChange,
  setServicesChange,
  setAboutusChange,
  setReserveChange,
  setMemberChange,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setHomepageChange(false);
    setDesignerChange(false);
    setServicesChange(false);
    setAboutusChange(false);
    setReserveChange(true);
    setMemberChange(false);
  });
  return (
    <div
      id="reservePage"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="reserveBg min-h-1/2 w-full   ">
        <div className="reserveBgFilter flex flex-wrap justify-center ">
          <div className="h-full ">
            <img src={reserveImg} alt="reserveImg" className="h-full" />
          </div>

          <div className="flex flex-col justify-center items-center bg-black gap-10">
            <h1 className="text-5xl text-white mt-5">Make an appointment</h1>
            <p className="text-1xl text-white">
              Barber is a person whose occupation is mainly to cut dress groom
              style and shave men's and boys hair
            </p>
            <div className="flex flex-wrap gap-3 justify-center ">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className="text-2xl p-2 text-white bg-black border-2 border-solid border-white outline-none"
                  placeholder="姓名"
                />
                <input
                  type="text"
                  className="text-2xl p-2 text-white bg-black border-2 border-solid border-white outline-none"
                  placeholder="電話號碼"
                />
                <select
                  className="text-2xl p-2 text-white bg-black border-2 border-solid border-white outline-none"
                  id=""
                  required
                >
                  <option value="">指名設計師</option>
                  <option value="William">William</option>
                  <option value="James">James</option>
                  <option value="Charlotte">Charlotte</option>
                  <option value="Abner">Abner</option>
                  <option value="AllOk">都可以</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  className="text-2xl p-2 text-white bg-black border-2 border-solid border-white outline-none"
                  placeholder="電子郵件"
                />
                <input
                  type="text"
                  className="text-2xl p-2 text-white bg-black border-2 border-solid border-white outline-none"
                  placeholder="預約時段"
                />
                <button className="bg-yellow-600 px-3 py-2  text-2xl text-white hover:border-2 hover:border-solid hover:border-yellow-600 hover:bg-black hover:text-yellow-600">
                  預約
                </button>
              </div>
            </div>

            <p className="text-1xl text-white">
              *預約的時段請盡量寫詳細* 例：1/1號下午1點
            </p>
            <h1
              className="text-2xl text-yellow-600 mb-6 "
              style={{ "font-family": '"La Belle Aurore", "cursive"' }}
            >
              GentlemanHair
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reservePage;
