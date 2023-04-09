import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div className="App flex h-full ">
      <div className="flex-1 max-h-full">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default App;
