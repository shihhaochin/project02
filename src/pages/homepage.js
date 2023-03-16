import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const homepage = ({
  setHomepageChange,
  setDesignerChange,
  setServicesChange,
  setAboutusChange,
  setReserveChange,
  setMemberChange,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setHomepageChange(true);
    setDesignerChange(false);
    setServicesChange(false);
    setAboutusChange(false);
    setReserveChange(false);
    setMemberChange(false);
  });

  return (
    <div className="homepage h-screen w-full bg-center bg-cover relative">
      <div className="absolute top-0 left-0 h-screen w-full bg-black/70 flex flex-col justify-center items-start">
        <p className="text-white text-3xl ml-8 mb-10  ">
          剪髮不只是剪髮，而是一趟旅程。
        </p>
        <h1 className="text-white text-6xl ml-8 mb-10 animation-moveInBottom">
          讓你不管什麼場合<br></br>都有最完美的髮型
        </h1>
        <p className="text-white text-3xl ml-8 mb-20">
          我們的髪型設計師擁有多年的男子造型剪髮經驗<br></br>
          讓你從男孩蛻變成男人！
        </p>
        <button className="text-white pointer ml-60 text-3xl  border-white border-solid border-2 py-2 px-6 homepagebtn  ">
          <Link to="/reserve">馬上預約</Link>

          <span></span>
        </button>
      </div>
    </div>
  );
};

export default homepage;
