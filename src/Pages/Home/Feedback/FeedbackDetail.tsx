import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingButton, MainHeader, SearchInput } from "../../../Components";
import { feedbacksData } from "../../../utils/Constant";
import { BackArrowIcon } from "../../../utils/Images";

const FeedbackDetail = () => {
  const navigate = useNavigate();
  const { feedback_id } = useParams();
  // const feedbackId = feedback_id.toNumber
  const filteredFeedback = feedbacksData.filter((data) => {
    return data.id === feedback_id;
  });
  console.log(filteredFeedback, "filteredFeedback");

  const { fullName, email, subject, message } = filteredFeedback[0];

  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[80px] max-md:h-[120px] grid grid-cols-5 items-center pt-4">
        <div className="col-span-2 max-md:col-span-5 h-[80%] pl-3 items-center flex">
          <div
            className="mr-3 cursor-pointer"
            onClick={() => navigate("/feedback")}
          >
            <img src={BackArrowIcon} alt="" />
          </div>
          <div className="">Details</div>
        </div>
        <div className="col-span-3 max-md:col-span-5 h-[80%] flex justify-end max-md:justify-center items-center">
          <div className="relative">
            <SearchInput placeholder={"Search"} type={"text"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-[calc(100vh_-_80px)] max-md:h-[calc(100vh_-_120px)] overflow-scroll scrollbar-hide">
        <div className="w-[76%] h-[fit-content] min-w-[400px] bg-primary ml-4 mt-6 m-4 rounded-inputBorderRadius">
          <div className="w-[400px] h-[70px] mt-3 ml-3 flex items-center">
            <div className="w-[55px] h-[55px] bg-white mr-5 rounded-[50px]"></div>
            <div>
              <div className="font-bold">{fullName}</div>
              <div className="text-textColor">{email}</div>
            </div>
          </div>

          <div className="w-[94%] h-[fit-content] mt-6 ml-3 flex flex-col justify-evenly">
            <div className="font-bold mb-4">{subject}</div>
            <div>{message}</div>
          </div>

          <div className="w-[94%] h-[70px] mt-6 ml-3 flex items-center justify-between">
            <input
              type="text"
              className="bg-body max-sm:w-64 w-[80%] p-2 pl-3 mr-4 text-textColor rounded-inputBorderRadius outline-none"
              placeholder="Message"
            />
            <LoadingButton text="Send" width="w-[80px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
