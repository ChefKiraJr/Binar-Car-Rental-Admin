import React, { useEffect } from "react";
import Chart from "../components/Chart";
import MainTable from "../components/MainTable";
import useDatas from "../store/data";

function MainDashboard() {
  const { data, fetch } = useDatas((state) => state);

  useEffect(() => {
    fetch(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=car_name%3Aasc"
    );
  }, []);

  return (
    <div className="px-6 ">
      <Chart />
      <MainTable data={data} />
    </div>
  );
}

export default MainDashboard;
