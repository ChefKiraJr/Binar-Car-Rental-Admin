import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useListCar = create(
  devtools((set) => ({
    listCars: [],
    setList: (params) => {
      set({ listCars: params.data });
    },
    addCar: (params) => {
      //     let cars = listCars;
      //     cars.push()
      //     set({ listCars: params.data });
    },
  }))
);

export default useListCar;
