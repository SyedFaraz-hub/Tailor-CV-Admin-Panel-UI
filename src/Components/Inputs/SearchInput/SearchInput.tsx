import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { SearchInputType } from '../../../utils/Types'
import { SerachIcon } from '../../../utils/Images'

const SearchInput = ({ placeholder, type }: SearchInputType) => {
  return (
    <>
        <input
          type={type}
          placeholder={placeholder}
          className="bg-primary max-sm:w-56 w-96 mr-4 p-2 pl-3 text-white rounded-inputBorderRadius outline-none"
        />
        <img src={SerachIcon} alt="" className="text-textColor absolute right-10 top-[10px] cursor-pointer"/>
    </>
  )
}

export default SearchInput
