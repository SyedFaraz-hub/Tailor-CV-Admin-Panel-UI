import React, { useState } from "react";
import { MainHeader, Pagination, SearchInput } from "../../../Components";
import Modal from "../../../Components/Modal/Modal";
import { individualsData } from "../../../utils/Constant";
import { BanIcon, DeleteIcon, EditIcon } from "../../../utils/Images";

const Individuals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const rows = individualsData.slice(startIndex, endIndex);

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
        <div className="w-[100%] overflow-x-scroll scrollbar-hide">
          <table className="bg-primary w-[97%] m-4 p-4 rounded-inputBorderRadius overflow-x-scroll scrollbar-hide">
            <thead>
              <tr className="border-b border-slate-900 p-10 text-[14px]">
                <td className="w-[350px] font-bold p-2 min-w-[180px]">
                  Full Name
                </td>
                <td className="w-[350px] font-bold p-2 min-w-[180px]">
                  Current Organization
                </td>
                <td className="w-[340px] font-bold p-2 min-w-[340px]">{""}</td>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ id, fullName, currentOrganization }) => {
                return (
                  <tr
                    key={id}
                    className="border-b border-opacity-1 border-black p-10 text-[15px]"
                  >
                    <td className="w-[350px] font-bold p-2">{fullName}</td>
                    <td className="w-[350px] p-2">{currentOrganization}</td>
                    <td className="w-[350px] p-2">
                      <div className="w-[90%] flex justify-evenly items-center">
                        <div className="w-[fit-content] bg-blue p-1 flex justify-between items-center cursor-pointer">
                          <img src={EditIcon} alt="" className="mr-3" />
                          <span className="text-[#6B90FF]">Edit</span>
                        </div>
                        <div
                          onClick={() => {
                            setOpenModal(true);
                            setModalType("ban");
                          }}
                          className="w-[fit-content] bg-blue p-1 flex justify-between items-center cursor-pointer"
                        >
                          <img src={BanIcon} alt="" className="mr-3" />
                          <span className="text-[#FFDA6B]">Ban</span>
                        </div>
                        <div
                          onClick={() => {
                            setOpenModal(true);
                            setModalType("delete");
                          }}
                          className="w-[fit-content] bg-blue p-1 flex justify-between items-center cursor-pointer"
                        >
                          <img src={DeleteIcon} alt="" className="mr-3" />
                          <span className="text-[#EF6B67]">Delete</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <td colSpan={3}>
                <div className="w-[100%] h-[42px] flex justify-end max-md:justify-start text-black">
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
      <Modal
        open={openModal}
        heading={
          modalType === "ban"
            ? "Ban User"
            : modalType === "delete"
            ? "Delete User"
            : ""
        }
        message={
          modalType === "ban"
            ? "Are you sure you want to ban this user: "
            : modalType === "delete"
            ? "Are you sure you want to delete this user: "
            : ""
        }
        cancelFn={() => setOpenModal(false)}
        confirmationFn={() => {}}
      />
    </div>
  );
};

export default Individuals;
