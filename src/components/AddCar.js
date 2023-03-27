import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "./Toast";

function AddCar() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const sendData = () => {
    let bodyFormData = new FormData();
    bodyFormData.append("image", image);
    bodyFormData.append("name", name);
    bodyFormData.append("price", price);
    bodyFormData.append("category", category);

    axios
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/car",
        bodyFormData,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(
        (response) => {
          var hasil = response.data;
          console.log("hasil", hasil);
          setMessage("Input Data Berhasil");
          setTimeout(() => {
            setMessage("");
          }, 3000);
          navigate("/list", {
            state: { message: "Input Data Berhasil" },
          });
        },

        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      {message === "" ? null : <Toast message={message} status={"success"} />}
      <div className="p-8 lg:mt-0 shadow bg-slate-300 min-h-full">
        <div className="flex">
          <p className="font-bold">Cars &gt; List Car &gt;</p>
          <p className="font-normal pl-2"> Add New Car</p>
        </div>
        <div>
          <p className="font-bold text-left py-8 text-2xl">Add New Car</p>
        </div>
        <form className="lg:pl-8 lg:pr-[400px] py-8 rounded bg-white">
          <div className="md:flex mb-6 items-center lg:px-0 px-4">
            <div className="md:w-1/3">
              <label className="block text-gray-600 font-normal text-left mb-3 md:mb-0 pr-4">
                Nama/Tipe Mobil
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="form-input block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="namaMobil"
                type="text"
                placeholder="Input Nama/Tipe Mobil"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="md:flex mb-6 items-center lg:px-0 px-4">
            <div className="md:w-1/3">
              <label className="block text-gray-600 font-normal text-left mb-3 md:mb-0 pr-4">
                Harga
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="form-input block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="hargaMobil"
                type="number"
                placeholder="Input Harga Sewa Mobil"
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div className="md:flex mb-6 lg:px-0 px-4">
            <div className="md:w-1/3 mt-2">
              <label className="block text-gray-600 font-normal text-left md:mb-0 pr-4">
                Foto
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="form-input block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="fotoMobil"
                type="file"
                placeholder="Upload Foto Mobil"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <p className="text-left text-sm text-slate-500">
                File Size Max.2MB
              </p>
            </div>
          </div>
          <div className="md:flex mb-6 items-center lg:px-0 px-4">
            <div className="w-1/3">
              <label className="block text-gray-600 font-normal text-left mb-3 md:mb-0 pr-4">
                Kategori
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                name=""
                className="form-select block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="my-select"
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Default">Pilih Kategori Mobil</option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </select>
            </div>
          </div>
          <div className="flex mb-6 lg:px-0 px-4">
            <div className="md:w-1/3">
              <label className="block text-gray-600 font-normal md:text-left mb-3 md:mb-0 pr-4">
                Created at
              </label>
            </div>
            <div className="w-2/3">
              <p className="text-left">-</p>
            </div>
          </div>
          <div className="flex mb-6 lg:px-0 px-4">
            <div className="md:w-1/3">
              <label className="block text-gray-600 font-normal md:text-left mb-3 md:mb-0 pr-4">
                Updated at
              </label>
            </div>
            <div className="md:w-2/3">
              <p className="text-left">-</p>
            </div>
          </div>
        </form>
        <div className="flex md:items-center mt-5">
          <div className="">
            <Link
              to="/list"
              className="shadow bg-white hover:bg-slate-200 focus:shadow-outline focus:outline-none text-blue-700 font-bold py-2 px-4 rounded"
              type="button"
            >
              Cancel
            </Link>
          </div>
          <div className="pl-4">
            <button
              className="shadow bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={sendData}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCar;
