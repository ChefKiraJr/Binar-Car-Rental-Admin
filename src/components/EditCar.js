import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TestEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    async function sendListData() {
      const request = await fetch(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${params.id}`,
        {
          headers: {
            access_token: localStorage.access_token,
          },
        }
      );
      const response = await request.json();
      console.log("Mobil Detail", response);
      setName(response.name);
      setPrice(response.price);
      setImage(response.image);
      setCategory(response.category);
    }
    sendListData();
  }, []);

  const sendData = () => {
    const bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("image", image);
    bodyFormData.append("price", Number(price));
    bodyFormData.append("category", category);
    for (const [key, value] of bodyFormData.entries()) {
      console.log(`${key}: ${value}`);
    }
    axios
      .put(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${params.id}`,
        bodyFormData,
        {
          headers: {
            access_token: localStorage.access_token,
          },
        }
      )
      .then(
        (response) => {
          var hasil = response.data;
          console.log("respone", hasil);
        },
        (error) => {
          console.log("error", error);
        },
        alert("Update Berhasil"),
        navigate("/list")
      );
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setPrice(localStorage.getItem("price"));
    setImage(localStorage.getItem("image"));
    setCategory(localStorage.getItem("category"));
  }, []);

  return (
    <div className="p-8 lg:mt-0 shadow bg-slate-300 min-h-full">
      <div className="flex">
        <p className="font-bold">Cars &gt; List Car &gt;</p>
        <p className="font-normal pl-2"> Edit Car</p>
      </div>
      <div>
        <p className="font-bold text-left py-8 text-2xl">Edit Car</p>
      </div>
      <form className="lg:pl-4 lg:pr-[400px] py-8 rounded bg-white sm:pl-2">
        <div className="md:flex mb-6 items-center lg:px-0 px-4">
          <div className="md:w-1/3">
            <label className="block text-gray-600 font-normal text-left mb-3 md:mb-0 lg:pr-4">
              Nama/Tipe Mobil
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="form-input block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="namaMobil"
              type="text"
              value={name}
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
              value={price}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
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
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestEdit;
