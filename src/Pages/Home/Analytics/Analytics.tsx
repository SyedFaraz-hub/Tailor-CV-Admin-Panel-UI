import React from "react";
import {
  AnalyticsStaticsBox,
  CircularChart,
  LineChart,
  MainHeader,
  SearchInput,
} from "../../../Components";
import { LeftArrow, RightArrow } from "../../../utils/Images";

const Analytics = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[80px] max-md:h-[120px] grid grid-cols-5 items-center pt-4">
        <MainHeader />
        <div className="col-span-3 max-md:col-span-5 h-[80%] flex justify-end max-md:justify-center items-center">
          <div className="relative">
            <SearchInput placeholder={"Search"} type={"text"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[100%] h-[calc(100vh_-_80px)] max-md:h-[calc(100vh_-_120px)] overflow-scroll scrollbar-hide">
        <div className="flex flex-wrap w-[100%] justify-center md:justify-evenly">
          <AnalyticsStaticsBox />
          <AnalyticsStaticsBox />
          <AnalyticsStaticsBox />
        </div>

        <div className="w-[95%] flex justify-between m-3 flex-wrap">
          <div className="flex flex-col items-center justify-evenly max-md:w-[98%] max-lg:w-[98%] w-[300px] h-[400px] rounded-inputBorderRadius bg-primary m-1 mb-4">
            <div className="w-[94%] h-[10%] flex justify-between items-center">
              <span>Lorem ipsum</span>
              <div className="w-[60px] h-[80%] flex justify-between items-center">
                <span className="cursor-pointer">
                  <img src={LeftArrow} alt="" />
                </span>
                <span className="cursor-pointer">
                  <img src={RightArrow} alt="" />
                </span>
              </div>
            </div>
            <div className="w-[94%] h-[74%]">
              <CircularChart />
            </div>
            <div className="w-[100%] h-[10%] border-t border-solid border-zinc-800 p-2 flex justify-center">
              <div className="w-[fit-content] h-[100%] flex justify-center items-center mr-3">
                <div className="w-[10px] h-[10px] rounded-[50px] bg-[#6BDAFF] mr-2">{""}</div>
                <div className="text-[12px]">lorem</div>
              </div>
              <div className="w-[fit-content] h-[100%] flex justify-center items-center mr-3">
                <div className="w-[10px] h-[10px] rounded-[50px] bg-[#906BFF] mr-2">{""}</div>
                <div className="text-[12px]">lorem</div>
              </div>
              <div className="w-[fit-content] h-[100%] flex justify-center items-center mr-3">
                <div className="w-[10px] h-[10px] rounded-[50px] bg-[#FFDA6B] mr-2">{""}</div>
                <div className="text-[12px]">lorem</div>
              </div>
              <div className="w-[fit-content] h-[100%] flex justify-center items-center mr-3">
                <div className="w-[10px] h-[10px] rounded-[50px] bg-[#6B90FF] mr-2">{""}</div>
                <div className="text-[12px]">lorem</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly max-md:w-[98%] max-lg:w-[98%] lg:w-[calc(96%_-_300px)] max-xl:w-[calc(98%_-_300px)] w-[640px] h-[400px] rounded-inputBorderRadius bg-primary m-1">
            <div className="w-[96%] h-[12%] flex flex-col justify-between">
              <h1 className="">Lorem Ipsum</h1>
              <h1 className="text-textColor text-[12px]">
                Lorem ipsum dolor sit amet
              </h1>
            </div>
            <div className="w-[96%] h-[80%]">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
