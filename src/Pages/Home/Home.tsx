import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { sideDrawerData } from "../../utils/Constant";
// import { Outlet } from 'react-router-dom'

const Home = () => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  console.log(pathName);
  return (
    <>
      <div className="grid grid-cols-5 w-screen h-screen">
        <div className="lg:col-span-1 max-md:p-[10px] bg-primary">
          {/* side drawer header start */}
          <header className="h-[14%] max-md:hidden mt-4">
            <p className="text-center text-3xl pb-5 pt-5 text-white">
              <span className="text-headingColor">Tailor</span> CV
            </p>
          </header>
          <header className="h-[16%] md:hidden mt-4">
            <p className="text-center text-2xl pb-5 pt-5 text-white">
              <span className="text-headingColor">T</span>C
            </p>
          </header>
          {/* side drwaer header end */}

          {/* side drawer body starts */}
          <div className="w-[100%]  h-[70%] pt-4 pb-4">
            {sideDrawerData.map(({ text, id, icon }: any) => {
              return (
                <div
                  key={id}
                  onClick={() => navigate(id)}
                  className={`flex ${
                    pathName === id
                      ? "bg-body border-[1.5px] border-solid border-secondary"
                      : pathName === "feedback/details"
                      ? "bg-body border-[1.5px] border-solid border-secondary"
                      : ""
                  } text-textColor text-opacity-80 justify-start max-lg:justify-between max-sm:mr-0 max-sm:ml-0 mr-4 ml-4 mb-4 p-2.5 rounded-inputBorderRadius cursor-pointer`}
                >
                  <div className="w-[20%] max-lg:h-[40%] items-center max-md:w-[90%] max-md:justify-center flex">
                    {icon}
                  </div>
                  <div className="w-[70%] max-md:hidden max-lg:text-[11px] max-xl:text-[11px] flex items-center">
                    {text}
                  </div>
                </div>
              );
            })}
          </div>
          {/* side drawer body ends */}
        </div>
        <div className="col-span-4 bg-body text-white">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
