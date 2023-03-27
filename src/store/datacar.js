import { create } from "zustand";
import axios from "../api/axios";
import { devtools } from "zustand/middleware";
import moment from "moment/moment";

const useDataCars = create(
  devtools((set) => ({
    dataChart: [],
    setGraphicData: (params) => {
      const newData = params.data.map((item) => {
        const momentDate = moment(item.day, "YYYY-MM-DD");

        const formattedDay = momentDate.format("DD");
        return { day: formattedDay, orderCount: item.orderCount };
      });
      set({ dataChart: newData });
    },
  }))
);

export default useDataCars;
