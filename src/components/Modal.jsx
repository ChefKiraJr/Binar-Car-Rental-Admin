import React from "react";

export default function Modal({ content }) {
  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`inset-0  outline-none focus:outline-non overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 md:inset-0 h-modal md:h-full `}
      >
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            {content}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-[#000000]"></div>
    </>
  );
}
