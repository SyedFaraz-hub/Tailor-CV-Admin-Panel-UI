import React from 'react'
import { StatisticGrowIcon, StatisticIcon } from '../../utils/Images'

const AnalyticsStaticsBox = () => {
  return (
      <div className="relative flex flex-col items-center justify-evenly max-md:w-[360px] max-lg:w-[300px] w-[300px] h-[146px] bg-primary m-3 rounded-inputBorderRadius">
        <div className="w-20 h-16 absolute top-[35%] right-0 flex items-center">
          <img src={StatisticIcon} alt="" />
        </div>

        <div className="w-[90%] h-[20%] flex items-end">
          <span className="text-white text-center">
            Lorem ipsum dolor sit amet
          </span>
        </div>

        <div className='w-[90%] h-[60%] flex flex-col justify-center'>
          <div className="w-[90%] flex mb-6">
            <span className="mr-2">
              <img src={StatisticGrowIcon} alt="" />
            </span>
            <span className="text-textColor">+2.6%</span>
          </div>

          <div className="w-[90%]">
            <span className="text-textColor text-2xl font-bold">18,756</span>
          </div>
        </div>
      </div>
  )
}

export default AnalyticsStaticsBox
