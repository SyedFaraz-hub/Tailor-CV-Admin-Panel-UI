import React, { useState } from "react";
import { MainHeader, Pagination, SearchInput } from "../../../Components";
import Modal from "../../../Components/Modal/Modal";
import PushNoticationModal from "../../../Components/Modal/PushNotificationModal";
import { pushNotificationsData } from "../../../utils/Constant";
import { DeleteIcon, EditIcon } from "../../../utils/Images";

const PushNotifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [pushNoticationModalOpen, setPushNoticationModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const rows = pushNotificationsData.slice(startIndex, endIndex);

  return (
    <div className="w-[98%] h-[100%]">
      <div className="w-[100%] h-[80px] max-md:h-[120px] grid grid-cols-5 items-center pt-4">
        <MainHeader />
        <div className="col-span-3 max-md:col-span-5 h-[80%] flex justify-end max-md:justify-center items-center">
          <div className="relative">
            <SearchInput placeholder={"Search"} type={"text"} />
          </div>
        </div>
      </div>

      <div className="w-[100%] pb-2 pt-2 pl-4 pr-4 scrollbar-hide h-[60px] flex items-center">
        <div className="mr-10">All</div>
        <div
          onClick={() => {
            setPushNoticationModalOpen(true);
          }}
          className="w-[38px] h-[38px] cursor-pointer rounded-[6px] bg-secondary flex justify-center items-center text-[30px] font-light"
        >
          +
        </div>
      </div>

      <div className="flex flex-col items-center w-[100%] h-[calc(100vh_-_140px)] max-md:h-[calc(100vh_-_120px)] overflow-scroll scrollbar-hide">
        <div className="w-[100%] overflow-x-scroll scrollbar-hide">
          <table className="bg-primary w-[97%] m-4 p-4 rounded-inputBorderRadius overflow-x-scroll scrollbar-hide">
            <thead>
              <tr className="border-b border-slate-900 p-10 text-[14px]">
                <td className="w-[350px] font-bold p-2 min-w-[190px]">
                  Status
                </td>
                <td className="w-[350px] font-bold p-2 min-w-[190px]">
                  Notification Name
                </td>
                <td className="w-[350px] font-bold p-2 min-w-[190px]">When</td>
                <td className="w-[350px] font-bold p-2 min-w-[190px]">
                  Recipients
                </td>
                <td className="w-[200px] font-bold p-2 min-w-[200px]">{""}</td>
              </tr>
            </thead>
            <tbody>
              {rows.map(
                ({ id, notificationName, status, when, recipients }) => {
                  return (
                    <tr
                      key={id}
                      className="border-b border-opacity-1 border-black p-10 text-[15px]"
                    >
                      <td className="w-[350px] p-2">
                        <div
                          className={`p-1 ${
                            status === "Inactive"
                              ? "border border-[#EF6B67] text-[#EF6B67]"
                              : "bg-[#40EA95] text-black"
                          } text-[12px] w-[80px] flex justify-center items-center rounded-inputBorderRadius`}
                        >
                          {status}
                        </div>
                      </td>
                      <td className="w-[350px] p-2">{notificationName}</td>
                      <td className="w-[350px] p-2">{when}</td>
                      <td className="w-[350px] p-2">{recipients}</td>
                      <td className="w-[100%] p-2">
                        <div className="w-[90%] flex justify-end items-center">
                          <div className="w-[fit-content] bg-blue p-1 flex justify-between items-center cursor-pointer mr-2">
                            <img src={EditIcon} alt="" className="mr-2" />
                            <span className="text-[#6B90FF]">Edit</span>
                          </div>
                          <div
                            onClick={() => {
                              setOpenModal(true);
                              setModalType("delete");
                            }}
                            className="w-[fit-content] bg-blue p-1 flex justify-between items-center cursor-pointer"
                          >
                            <img src={DeleteIcon} alt="" className="mr-2" />
                            <span className="text-[#EF6B67]">Delete</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
            <tr>
              <td colSpan={5}>
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
        heading={"Delete Notification"}
        message={"Are you sure you want to delete this notification: "}
        cancelFn={() => setOpenModal(false)}
        confirmationFn={() => {}}
      />
      <PushNoticationModal
        open={pushNoticationModalOpen}
        cancelFn={() => setPushNoticationModalOpen(false)}
      />
    </div>
  );
};

export default PushNotifications;
