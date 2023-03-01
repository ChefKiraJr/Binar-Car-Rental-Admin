import { create } from "zustand";
import axios from "../api/axios";
import { devtools } from "zustand/middleware";

const useDatas = create(
  devtools((set) => ({
    data: [],
    fetch: async (url) => {
      const response = await axios.get(url, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      console.log(response.data, "ini dari URL");
      set({ data: await response.data.orders });
    },
  }))
);

export default useDatas;
