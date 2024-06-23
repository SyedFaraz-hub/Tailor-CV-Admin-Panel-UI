import React from "react";
import { ModalType } from "../../utils/Types";

const Modal = ({ open, confirmationFn, heading, message, cancelFn    }: ModalType) => {
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
          <div className="relative w-[300px] transform overflow-hidden rounded-lg bg-primary text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                </svg>
              </div> */}
                <div className="mt-3 w-[100%] text-center sm:mt-0 flex justify-center flex-col items-center">
                  <h3
                    className="text-lg font-medium leading-6 text-white"
                    id="modal-title"
                  >
                    {heading}
                  </h3>
                  <div className="mt-2 w-[60%] text-center">
                    <p className="text-sm text-textColor">
                      {message}{" "}
                      <span
                        className="text-secondary cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {" "}
                        Crowdbotics?
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex flex-col">
              <button
                type="button"
                onClick={() => confirmationFn}
                className="mb-5 max-md:mb-2 inline-flex w-full justify-center rounded-md border border-transparent bg-[#EF6B67] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#EF6B67]-700 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => cancelFn()}
                className="mt-3 inline-flex w-full justify-center rounded-md border border-secondary px-4 py-2 text-base font-medium text-secondary shadow-sm  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
