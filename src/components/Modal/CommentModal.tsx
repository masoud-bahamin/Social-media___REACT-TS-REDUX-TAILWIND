import React from "react";

interface CommentModalProps {
  children: React.ReactNode;
  title: string;
  isShow: boolean;
  setIsShow: (arg: boolean) => void;
}

export default function CommentModal({
  children,
  title,
  isShow,
  setIsShow,
}: CommentModalProps) {
  return (
    <div className={`${isShow ? "block" : "hidden"}`}>
      <div
        onClick={() => setIsShow(false)}
        className={` bg-[rgba(100,100,100,.7)] fixed top-0 left-0 right-0 z-10 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full`}
      ></div>
      <div className="relative w-full max-w-2xl max-h-full mx-auto z-20">
        {/* Modal content */}
        <div className="relative bg-white min-w-[260px] rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={() => setIsShow(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          {children}
        </div>
      </div>
    </div>
  );
}
