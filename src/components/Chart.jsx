import React, { useEffect } from "react";
import Recteangle from "../assets/Rectangle9.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import useDataCars from "../store/datacar";
import { fetchApiGet } from "../services/api";

function Chart() {
  const { dataChart, setGraphicData } = useDataCars((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiGet(
        "https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?from=2022-10-01&until=2022-11-01"
      );
      setGraphicData({ data });
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 font-semibold text-md text-left mr-10 ">
      Dashboard
      <div className="flex flex-wrap gap-3 ml-3 mt-10">
        <div className="justify-self-end">
          <img className="w-5 h-10 md:max-xl:flex" src={Recteangle} alt="" />
        </div>
        <div className="justify-self-start">
          <div className="font-semibold">Rented Car Data Visualization</div>
        </div>
      </div>
      <p className="text-xs ml-4 mt-5 text-left">Month</p>
      <div className="inset-y-0 left-0 mt-5 ml-3">
        <div className="mb-3 xl:w-96">
          <div className="input-group flex flex-wrap items-stretch w-40 mb-4">
            <input
              type="search"
              className="form-control  flex-auto min-w-0 block w-10 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              Go
            </button>
          </div>
        </div>
        <BarChart
          width={1800}
          height={500}
          data={dataChart}
          margin={{
            top: 5,
            right: 1,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="orderCount" />
          <Tooltip />
          <Legend />
          <Bar dataKey="orderCount" fill="#586B90" />
        </BarChart>
      </div>
    </div>
  );
}

export default Chart;
