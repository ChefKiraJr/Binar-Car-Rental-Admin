import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useListCar = create(
  devtools((set) => ({
    listCars: [],
    setList: (params) => {
      set({ listCars: params.data });
    },
    deleteCar: (params) => {
      set((state) => ({
        listCars: state.listCars.filter((item) => item.id !== params.id),
      }));
    },
  }))
);

export default useListCar;
