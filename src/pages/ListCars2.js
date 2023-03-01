import React from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";

function ListCars2() {
  return (
    <div className="mt-64">
      <p>HALLO ASUWWWW GAYUHDASD;</p>
      <div className="text-center lg:text-left">
        <Link to="/list/add">
          <button
            type="submit"
            className="inline-block px-20 py-3 w-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Tambah Gan
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ListCars2;
