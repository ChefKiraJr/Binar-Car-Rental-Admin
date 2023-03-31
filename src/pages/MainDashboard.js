import React, { useEffect } from "react";
import Chart from "../components/Chart";
import Pagination from "../components/Pagination";
import MainTable from "../components/MainTable";
import TableSetting from "../components/TableSetting";
import useDatas from "../store/data";

function MainDashboard() {
  const { data, fetch } = useDatas((state) => state);

  useEffect(() => {
    fetch(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=car_name%3Aasc"
    );
  }, []);

  return (
    <div className="px-6 overflow-hidden overflow-y-scroll">
      <Chart />
      <MainTable data={data} />
      {/* <div className="flex justify-between">
        <TableSetting />
        <Pagination />
      </div> */}
    </div>
  );
}

export default MainDashboard;
