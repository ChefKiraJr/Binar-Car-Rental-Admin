import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App flex h-full ">
      <div className="flex-1 max-h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
