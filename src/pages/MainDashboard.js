import React, { useEffect } from "react";
import Chart from "../components/Chart";
import LoginForm from "../components/LoginForm";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
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
    <div className="p-6 overflow-hidden overflow-y-scroll">
      {/* <p>
        {data.map((e, index) => {
          return <Table key={e.id} data={e} index={index} />;
        })}
      </p> */}
      <Chart />
      <Table data={data} />
      <div className="flex justify-between">
        <TableSetting />
        <Pagination />
      </div>
    </div>
  );
}

export default MainDashboard;
