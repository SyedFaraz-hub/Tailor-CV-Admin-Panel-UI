import React from 'react'
import { LoadingButtonType } from '../../../utils/Types'

const LoadingButton = ({ text, width }: LoadingButtonType) => {
  return (
    <>
      <div className="flex space-x-2 justify-center">
        <button className={`bg-secondary p-1.5 ${width? width : "w-72"} rounded-inputBorderRadius `}>
          {text}
        </button>
        {/* <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-purple-500"
          role="status"
        ></div> */}
      </div>
      <div className="flex justify-center items-center"></div>
    </>
  )
}

export default LoadingButton
