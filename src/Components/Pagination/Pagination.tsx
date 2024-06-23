import React from 'react'
import { LeftArrow, RightArrow } from '../../utils/Images'

const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  handlePageChange,
  handleRowsPerPageChange,
}: any) => {
  
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  return (
    <div className="w-[360px] h-[100%] bg-primary flex p-2 text-[12px] text-white">
      <div className="w-[fit-content] h-[100%] p-1 flex items-center">
        <span>Rows per page:</span>
        <div className="relative inline-block text-left ml-2">
          <div>
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="bg-transparent cursor-pointer outline-none w-[40px]"
            >
              <option className="bg-primary" value={10}>
                10
              </option>
              <option className="bg-primary" value={20}>
                20
              </option>
              <option className="bg-primary" value={50}>
                50
              </option>
            </select>
          </div>
        </div>

        <div className="w-[fit-content] h-[100%] p-1 flex items-center ml-3">
          <span className="m-1">Page</span>
          <span className="m-1">{currentPage}</span>
          <span className="m-1">of</span>
          <span className="m-1">{totalPages}</span>
        </div>

        <div className="w-[fit-content] h-[100%] p-1 flex items-center ml-3">
          <div className="w-[60px] h-[80%] flex justify-between items-center">
            <span
              className={`cursor-pointer ${
                currentPage === 1 ? 'opacity-30' : ''
              }`}
              onClick={() =>
                currentPage === 1 ? '' : handlePageChange(currentPage - 1)
              }
            >
              <img src={LeftArrow} alt="" />
            </span>
            <span
              className="cursor-pointer"
              onClick={() =>
                currentPage === totalPages
                  ? ''
                  : handlePageChange(currentPage + 1)
              }
            >
              <img src={RightArrow} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
