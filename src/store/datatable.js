// import { create } from "zustand";
// import axios from "../api/axios";
// import { devtools } from "zustand/middleware";

// const useDataTable = create(
//   devtools((set) => ({
//     dataTable: [],
//     fetch: async (url) => {
//       const response = await axios.get(url, {
//         headers: {
//           access_token: localStorage.access_token,
//         },
//       });
//       set({ dataTable: await response.data });
//       console.log(response.data, "ini dari datatable");
//     },
//   }))
// );

// export default useDataTable;
