import React from "react";
import Recteangle from "../assets/Rectangle9.png";
import TableRowData from "./TableRowData";

function Table({ data }) {
  return (
    <div>
      <div className="justify-self-end">
        <div class="p-5 font-semibold text-md text-left mr-10 ">Dashboard</div>
        <div className="flex flex-wrap gap-3 ml-3 mt-10">
          <div className="justify-self-end">
            <img
              classNameName="w-5 h-10 md:max-xl:flex"
              src={Recteangle}
              alt=""
            />
          </div>
          <div className="justify-self-start">
            <div className="font-semibold">List Order</div>
          </div>
        </div>
        <div className="relative mt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#CFD4ED] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Car
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Rent
                </th>
                <th scope="col" className="px-6 py-3">
                  Finish Rent
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((cars, index) => {
                return <TableRowData key={cars.id} cars={cars} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
