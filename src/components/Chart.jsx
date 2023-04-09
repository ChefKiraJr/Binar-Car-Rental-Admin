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
  ResponsiveContainer,
} from "recharts";

import moment from "moment";
import useDataCars from "../store/datacar";
import { fetchApiGet } from "../services/api";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

function Chart() {
  const { dataChart, setGraphicData } = useDataCars((state) => state);
  const fetchData = async () => {
    const data = await fetchApiGet(
      `https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?from=${startDate}&until=${endDate}`
    );
    setGraphicData({ data });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
  console.log(startDate, "tes value month");
  const handleDateChange = (date) => {
    setStartDate(dayjs(date).format("YYYY-MM-DD"));
  };
  const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
  console.log(endDate, "tes value month");
  const handleEndDateChange = (date) => {
    setEndDate(dayjs(date).format("YYYY-MM-DD"));
  };
  return (
    <div className="p-5 font-semibold text-md text-left mr-10 hidden md:block">
      Dashboard
      <div className="flex flex-wrap gap-3 ml-3 mt-10 ">
        <div className="justify-self-end ">
          <img className="w-5 h-10 md:max-xl:flex" src={Recteangle} alt="" />
        </div>
        <div className="justify-self-start ">
          <div className="font-semibold">Rented Car Data Visualization</div>
        </div>
      </div>
      <p className="mt-5">From</p>
      <DatePicker
        className="mt-5"
        selected={dayjs(startDate).toDate()}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
      />
      <p className="mt-5">Until</p>
      <DatePicker
        className="mt-5"
        selected={dayjs(endDate).toDate()}
        onChange={handleEndDateChange}
        dateFormat="yyyy-MM-dd"
      />
      <button
        onClick={fetchData}
        className=" mt-5 btn px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
        type="button"
        id="button-addon2"
      >
        Go
      </button>
      <p className="text-xs ml-4 mt-5 text-left ">Month</p>
      <div className="inset-y-0 left-0 mt-5 ml-3 ">
        <form>
          <div className="mb-3 xl:w-96"></div>
        </form>
        {/* <ResponsiveContainer> */}
        <BarChart
          className=""
          width={1100}
          height={500}
          data={dataChart}
          margin={{
            top: 10,
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
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
}

export default Chart;
