import React from "react";

function TableSetting() {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:justify-start gap-x-24">
        <div className="w-full lg:w-auto lg:flex-none p-4">
          <p className="text-xs">Limit</p>
          <form className="flex mt-5">
            <input
              className="p-4 w-[58px] h-[36px] border-t border-b border-l border-r text-gray-800 border-gray-200 bg-white"
              placeholder="10"
            />
          </form>
        </div>
        <div className="w-full lg:w-auto lg:flex-none p-4">
          <p className="text-xs">Jump To Page</p>
          <form className="flex mt-5">
            <input
              className="p-4 w-[76px] h-[36px] border-t border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="1"
            />
            <button className="w-[76px] h-[36px] bg-[#0D28A6] text-white font-bold uppercase border-yellow-500 border-t border-b border-r">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TableSetting;
