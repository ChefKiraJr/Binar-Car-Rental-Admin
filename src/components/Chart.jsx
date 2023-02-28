import React from "react";
import Recteangle from "../assets/Rectangle9.png";
import Charts from "../assets/tes_table.png";

function Chart() {
  return (
    <div class="p-5 font-semibold text-md text-left mr-10 ">
      Dashboard
      <div class="flex flex-wrap gap-3 ml-3 mt-10">
        <div class="justify-self-end">
          <img className="w-5 h-10 md:max-xl:flex" src={Recteangle} alt="" />
        </div>
        <div class="justify-self-start">
          <div class="font-semibold">Rented Car Data Visualization</div>
        </div>
      </div>
      <p class="text-xs ml-4 mt-5 text-left">Month</p>
      <div class="inset-y-0 left-0 mt-5 ml-3">
        <div class="mb-3 xl:w-96">
          <div class="input-group flex flex-wrap items-stretch w-40 mb-4">
            <input
              type="search"
              class="form-control  flex-auto min-w-0 block w-10 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              Go
            </button>
          </div>
        </div>

        <div class="w-full p-4 mt-10">
          <img src={Charts} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
