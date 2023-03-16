import React, { useEffect } from "react";
import designer01 from "../img/designer01.png";
import designer02 from "../img/designer02.png";
import designer03 from "../img/designer03.png";
import designer04 from "../img/designer04.png";
import FooterComponent from "../components/footer-component";
const designerPage = ({
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
    setDesignerChange(true);
    setServicesChange(false);
    setAboutusChange(false);
    setReserveChange(false);
    setMemberChange(false);
  });

  return (
    <div className="relative">
      <div id="designerPage" className="designerPage"></div>
      <div className="absolute top-0 left-0 w-full min-h-screen">
        <div
          id="designerBg"
          className="w-full  bg-white flex flex-col justify-center items-center designerBg  "
        >
          <h1
            className="text-5xl  text-yellow-600 mt-52  "
            style={{ "font-family": '"La Belle Aurore", "cursive"' }}
          >
            GentlemanHair
          </h1>
          <p className="text-3xl mt-6 ">~Our Barbers~</p>
          <div
            id="designerIntro"
            className=" flex  justify-evenly items-center mt-6 flex-wrap"
          >
            <div className="flex m-5 ">
              <div className="h-96  ">
                <img
                  src={designer01}
                  alt="designer01Img"
                  className="max-h-full"
                />
              </div>
              <p className="ml-6">
                <ul className="flex flex-col  h-96 justify-evenly text-2xl">
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    William
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    35年經歷
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    熱愛音樂及藝術
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    出生地：倫敦
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex m-5 ">
              <div className="h-96  ">
                <img
                  src={designer02}
                  alt="designer01Img"
                  className="max-h-full"
                />
              </div>
              <p className="ml-6">
                <ul className="flex flex-col  h-96 justify-evenly text-2xl">
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    James
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    9年經歷
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    喜歡和朋友一起玩音樂和踢足球
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    出生地：利物浦
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex m-5 ">
              <div className="h-96  ">
                <img
                  src={designer03}
                  alt="designer01Img"
                  className="max-h-full"
                />
              </div>
              <p className="ml-6">
                <ul className="flex flex-col  h-96 justify-evenly text-2xl">
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    Charlotte
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    11年經歷
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    喜歡旅行和嘗試新食物
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    出生地：曼徹斯特
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex m-5 ">
              <div className="h-96  ">
                <img
                  src={designer04}
                  alt="designer01Img"
                  className="max-h-full"
                />
              </div>
              <p className="ml-6">
                <ul className="flex flex-col  h-96 justify-evenly text-2xl">
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    Abner
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    7年經歷
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    喜歡到鄉間散步和欣賞大自然
                  </li>
                  <li className="border-b-2 border-solid w-64 text-center pb-3 border-black   ">
                    出生地：伯明罕
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div
          id="motto"
          className=" w-full h-96  bg-transparent flex flex-col justify-center items-center text-white  "
        >
          <p className="text-4xl mx-5 mb-10">
            The strong man is not the one who is able to knock others down, but
            the one who is able to be knocked down and still get up.
          </p>
          <h1 className="text-2xl">--Friedrich Nietzsche</h1>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default designerPage;
