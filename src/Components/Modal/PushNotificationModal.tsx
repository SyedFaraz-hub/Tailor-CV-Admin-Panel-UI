import React from "react";
import { ModalType } from "../../utils/Types";

const PushNoticationModal = ({ open, cancelFn }: ModalType) => {
  console.log(open);

  return (
    <div
      className={`relative z-10 ${open ? "" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative w-[400px] transform overflow-hidden flex items-center justify-center">
            <div className="h-[68vh] max-md:h-[58vh] w-[400px flex flex-col items-center py-6 rounded-lg bg-primary text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="w-[90%] m-2 h-[10%] flex justify-center items-center font-bold text-[18px]">
                Create Push Notification
              </div>

              <div className="w-[90%] m-2 h-[80%] flex flex-col justify-start items-center text-[14px]">
                <input
                  type="text"
                  className="bg-body max-sm:w-64 mb-5 w-[90%] p-2 pl-3 text-textColor rounded-inputBorderRadius outline-none"
                  placeholder="Notification Name"
                />
                <select className="bg-body border border-body cursor-pointer w-[90%] text-white text-sm rounded-lg focus:ring-body focus:border-body block p-2.5 dark:bg-body dark:border-body dark:placeholder-body dark:text-white dark:focus:ring-body dark:focus:border-body">
                  <option selected className="hidden">
                    Select Group
                  </option>
                  <option value="Lorem Ipsum" className="p-6">
                    Lorem Ipsum
                  </option>
                  <option value="Lorem Ipsum">Lorem Ipsum</option>
                  <option value="Lorem Ipsum">Lorem Ipsum</option>
                  <option value="Lorem Ipsum">Lorem Ipsum</option>
                </select>
                <div className="w-[90%]">
                  <div className="my-3 font-bold">Activation Time</div>
                  <div className="flex justify-between">
                    <input
                      type="time"
                      className="accent-white bg-body mr-3 h-[40px] max-sm:w-64 mb-5 w-[40%] p-2 pl-3 text-white rounded-inputBorderRadius outline-none"
                      placeholder="date"
                    />
                    <select className="bg-body h-[40px] border border-body cursor-pointer w-[50%] text-white text-sm rounded-lg focus:ring-body focus:border-body block p-1.5 dark:bg-body dark:border-body dark:placeholder-body dark:text-white dark:focus:ring-body dark:focus:border-body">
                      <option selected value="Does not repeat">
                        Does not repeat
                      </option>
                      <option value="Every day" className="p-6">
                        Every day
                      </option>
                      <option value="Every weak">Every weak</option>
                      <option value="Every month">Every month</option>
                      <option value="custom">custom</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col w-[90%]">
                  <button
                    type="button"
                    onClick={() => {}}
                    className="mb-2.5 inline-flex w-full justify-center rounded-inputBorderRadius border border-transparent bg-secondary p-2 text-base font-medium text-white shadow-sm hover:bg-[#EF6B67]-700 sm:w-auto sm:text-sm"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={() => cancelFn()}
                    className="mt-3 inline-flex w-full justify-center rounded-inputBorderRadius border border-secondary p-2 text-base font-medium text-secondary shadow-sm sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNoticationModal;
