import React, { useState, useEffect } from "react";
import Logo from "../assets/fi_plus.png";
import User from "../assets/fi_users.png";
import Clock from "../assets/fi_clock.png";
import Hapus from "../assets/fi_trash-2.png";
import Edit from "../assets/fi_edit.png";
import { Link } from "react-router-dom";

function ListCar() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCarData() {
      const request = await fetch(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car",
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NzM5NTMyM30.it0iLexfB8AUImiqIVssJ2Z1RiSmuH_b9-Um8_Bc4c0",
          },
        }
      );
      console.log(request);
      const response = await request.json();
      setCars(response.cars);
    }
    getCarData();
  }, []);
  console.log(cars);

  return (
    <div className="p-8 lg:mt-0 shadow bg-slate-300 h-max-screen">
      <div className="flex">
        <p className="font-bold">Cars &gt;</p>
        <p className="font-normal pl-2"> List Car</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-left py-8 text-2xl">List Car</p>
        <Link
          to="/AddCar"
          className="flex bg-blue-600 h-10 rounded text-white py-2 px-4 mr-12"
        >
          <img src={Logo} className="pr-2"></img>
          <p>Add New Car</p>
        </Link>
      </div>
      <div className="flex gap-4">
        <button
          className="shadow bg-white hover:bg-slate-200 outline outline-blue-400 focus:shadow-outline focus:bg-blue-100 text-blue-400 font-bold py-2 px-4 rounded"
          type="button"
        >
          All
        </button>
        <button
          className="shadow bg-white hover:bg-slate-200 outline outline-blue-400 focus:shadow-outline focus:bg-blue-100 text-blue-400 font-bold py-2 px-4 rounded"
          type="button"
        >
          2 - 4 Orang
        </button>
        <button
          className="shadow bg-white hover:bg-slate-200 outline outline-blue-400 focus:shadow-outline focus:bg-blue-100 text-blue-400 font-bold py-2 px-4 rounded"
          type="button"
        >
          4 - 6 Orang
        </button>
        <button
          className="shadow bg-white hover:bg-slate-200 outline outline-blue-400 focus:shadow-outline focus:bg-blue-100 text-blue-400 font-bold py-2 px-4 rounded"
          type="button"
        >
          6 - 8 Orang
        </button>
      </div>
      <div className="grid grid-cols-1 py-4 gap-y-8 lg:grid-cols-3 md:grid-cols-2">
        {cars.length > 0 &&
          cars.map((item) => (
            <div key={item.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img
                  src={item.image}
                  alt="ikon"
                  className="w-full h-[300px]"
                ></img>
                <div className="px-4 py-1">
                  <h6 className="text-left pt-1">{item.name}</h6>
                  <p className="text-left font-bold pt-2">
                    Rp.{item.price} / hari
                  </p>
                  <div className="flex py-2">
                    <img src={User}></img>
                    <p className="text-left pl-2">{item.category}</p>
                  </div>
                  <div className="flex py-2">
                    <img src={Clock}></img>
                    <p className="text-left pl-2">
                      Updated at {item.updatedAt}
                    </p>
                  </div>
                  <div className="flex py-2 justify-between">
                    <button
                      className="flex items-center w-full bg-white h-10 rounded outline outline-red-300 text-red-300 py-2 px-4"
                      type="button"
                    >
                      <img src={Hapus} />
                      <p className="pl-2 font-bold">Delete</p>
                    </button>
                    <div className="flex pl-4 w-full">
                      <Link
                        to="/EditCar"
                        className="flex w-full bg-green-500 h-10 rounded outline outline-green-500 text-white py-2 px-2"
                        type="button"
                      >
                        <img src={Edit} />
                        <p className="pl-4 font-bold">Edit</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListCar;
