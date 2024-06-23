import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainHeader, Pagination, SearchInput } from '../../../Components'
import { feedbacksData } from '../../../utils/Constant'
import { BanIcon, DeleteIcon, EditIcon, ViewIcon } from '../../../utils/Images'

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [totalRows, setTotalRows] = useState(0)

  const navigate = useNavigate()

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value)
  }

  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const rows = feedbacksData.slice(startIndex, endIndex)
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[80px] max-md:h-[120px] grid grid-cols-5 items-center pt-4">
        <MainHeader />
        <div className="col-span-3 max-md:col-span-5 h-[80%] flex justify-end max-md:justify-center items-center">
          <div className="relative">
            <SearchInput placeholder={'Search'} type={'text'} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[100%] h-[calc(100vh_-_80px)] max-md:h-[calc(100vh_-_120px)] overflow-scroll scrollbar-hide">
        <div className="w-[100%] overflow-x-scroll scrollbar-hide">
          <table className="bg-primary w-[97%] m-4 p-4 rounded-inputBorderRadius overflow-x-scroll scrollbar-hide">
            <thead>
              <tr className="border-b border-slate-900 p-10 text-[14px]">
                <td className="w-[500px] font-bold p-2 min-w-[180px]">
                  Full Name
                </td>
                <td className="w-[400px] font-bold p-2 min-w-[180px]">Date</td>
                <td className="w-[200px] font-bold p-2 min-w-[180px]">{''}</td>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ id, fullName, image, date }) => {
                return (
                  <tr
                    key={id}
                    className="border-b border-opacity-1 border-black p-10 text-[15px]"
                  >
                    <td className="w-[500px] font-bold p-2 flex items-center">
                      <div className="w-[40px] h-[40px] mr-3 rounded-3xl overflow-hidden">
                        <img src={image} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div>{fullName}</div>
                    </td>
                    <td className="w-[400px] p-2">{date}</td>
                    <td className="w-[100%] p-2">
                      <div className="w-[90%] flex justify-end items-center">
                        <div
                          onClick={() =>
                            navigate(`details/${id}`)
                          }
                          className="w-[fit-content] bg-blue p-1 flex justify-between items-center cursor-pointer"
                        >
                          <img src={ViewIcon} alt="" className="mr-3" />
                          <span className="text-[#6B90FF]">View</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tr>
              <td colSpan={3}>
                <div className="w-[100%] h-[42px] flex justify-end max-md:justify-start">
                  <Pagination
                    totalRows={totalRows}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    handleRowsPerPageChange={handleRowsPerPageChange}
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Feedback
