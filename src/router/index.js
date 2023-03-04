import { createBrowserRouter, redirect } from "react-router-dom";
import AddCar from "../components/AddCar";
import EditCars from "../pages/EditCar";
import Dashboard from "../pages/Dashboard";
import ListCars from "../pages/ListCars";
import ListCars2 from "../pages/ListCars2";
import Main from "../pages/Main";
import MainDashboard from "../pages/MainDashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      } else {
        return null;
      }
    },
    element: <Main />,
  },
  {
    path: "/",
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      } else {
        return null;
      }
    },
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <MainDashboard />,
      },
      {
        path: "list",
        element: <ListCars />,
        children: [
          {
            path: "",
            element: <ListCars2 />,
          },
          {
            path: "add",
            element: <AddCar />,
          },
          {
            path: "edit/:id",
            element: <EditCars />,
          },
        ],
      },
    ],
  },
]);

export default router;
