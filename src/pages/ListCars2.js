import React, { useState, useEffect } from "react";
import Logo from "../assets/fi_plus.png";
import User from "../assets/fi_users.png";
import Clock from "../assets/fi_clock.png";
import Hapus from "../assets/fi_trash-2.png";
import Edit from "../assets/fi_edit.png";
import { Link } from "react-router-dom";
import axios from "axios";
import useListCar from "../store/listCar";
import Modal from "../components/Modal";
import DeleteCars from "../components/DeleteCars";
import Toast from "../components/Toast";

function ListCars2() {
  const [filteredCars, setFilteredCars] = useState([]);
  const [category, setCategory] = useState("all");
  const { listCars, setList, deleteCar } = useListCar((state) => state);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [toast, setToast] = useState("");

  //Get List data
  async function getCarData() {
    const request = await fetch(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?pageSize=50",
      {
        headers: {
          access_token: localStorage.access_token,
        },
      }
    );
    const response = await request.json();
    setList({ data: response.cars });
  }

  useEffect(() => {
    getCarData();
  }, []);

  const onClickShowModalDelete = (id) => {
    setModal(true);
    setId(id);
  };

  const deletePost = async (userId) => {
    try {
      const respone = await axios.delete(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${userId}`,
        {
          headers: {
            access_token: localStorage.access_token,
          },
        }
      );
      setModal(false);
      setToast("Data Berhasil Disimpan");
      deleteCar({ id: userId });
      getCarData();
    } catch (error) {
      console.log(error);
    }
  };

  //Replace Value Category
  function getSize(size) {
    if (size === "small") {
      return "2 - 4 Orang";
    } else if (size === "medium") {
      return "4 - 6 Orang";
    } else if (size === "large") {
      return "6 - 8 Orang";
    }
  }

  // Filter List Car
  const handleButton = (e) => {
    let test;
    if (e.target.value === "all") {
      test = listCars;
    } else {
      test = listCars.filter((item) => item.category === e.target.value);
    }
    setCategory(e.target.value);
    setFilteredCars(test);
  };

  const setID = (id) => {
    // alert(id);
    // console.log(id);
    localStorage.setItem("ID", id);
  };

  //List Car Card
  const renderCarItem = (item) => {
    return (
      <div key={item.id} className="pr-2">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img src={item.image} alt="ikon" className="w-full h-[300px]"></img>
          <div className="px-4 py-1">
            <h6 className="text-left pt-1">{item.name}</h6>
            <p className="text-left font-bold pt-2">Rp.{item.price} / hari</p>
            <div className="flex py-2">
              <img src={User} alt="img" />
              <p className="text-left pl-2">{getSize(item.category)}</p>
            </div>
            <div className="flex py-2">
              <img src={Clock} alt="img" />
              <p className="text-left pl-2">
                Updated at {item.updatedAt.split("T")[0]}
              </p>
            </div>
            <div className="flex py-2 justify-between">
              <button
                className="flex items-center w-full bg-white h-10 rounded outline outline-red-300 text-red-300 py-2 px-4"
                type="button"
                onClick={() => onClickShowModalDelete(item.id)}
              >
                <img src={Hapus} alt="img" />
                <p className="pl-2 font-bold">Delete</p>
              </button>
              <div className="flex pl-4 w-full">
                <Link
                  to={"edit/" + item.id}
                  className="flex w-full bg-green-500 h-10 rounded outline outline-green-500 text-white py-2 px-2"
                  type="button"
                  onClick={() => setID(item.id)}
                >
                  <img src={Edit} alt="img" />
                  <p className="pl-4 font-bold">Edit</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {modal === true ? (
        <Modal
          content={
            <DeleteCars
              modalActive={modal}
              setModalActive={setModal}
              deletePost={() => deletePost(id)}
            />
          }
        />
      ) : null}
      {toast === "" ? null : <Toast message={toast} status={"success"} />}

      <div className="p-8 lg:mt-0 shadow bg-slate-300 h-max w-full">
        <div className="flex">
          <p className="font-bold">Cars &gt;</p>
          <p className="font-normal pl-2"> List Car</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-left py-8 text-2xl">List Car</p>
          <Link
            to="add"
            className="flex bg-blue-600 h-10 rounded text-white py-2 px-2 mr-2"
          >
            <img src={Logo} alt="img" className="pr-2"></img>
            <p>Add New Car</p>
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className="shadow bg-white hover:bg-slate-200 outline outline-2 outline-blue-400 focus:outline-blue-800 focus:text-blue-800  focus:bg-blue-300 text-blue-400 font-bold py-2 px-4 rounded"
            type="button"
            value="all"
            onClick={handleButton}
          >
            All
          </button>
          <button
            className="shadow bg-white hover:bg-slate-200 outline outline-2 outline-blue-400 focus:outline-blue-800 focus:text-blue-800  focus:bg-blue-300 text-blue-400 font-bold py-2 px-4 rounded"
            type="button"
            value="small"
            onClick={handleButton}
          >
            2 - 4 Orang
          </button>
          <button
            className="shadow bg-white hover:bg-slate-200 outline outline-2 outline-blue-400 focus:outline-blue-800 focus:text-blue-800  focus:bg-blue-300 text-blue-400 font-bold py-2 px-4 rounded"
            type="button"
            value="medium"
            onClick={handleButton}
          >
            4 - 6 Orang
          </button>
          <button
            className="shadow bg-white hover:bg-slate-200 outline outline-2 outline-blue-400 focus:outline-blue-800 focus:text-blue-800  focus:bg-blue-300 text-blue-400 font-bold py-2 px-4 rounded"
            type="button"
            value="large"
            onClick={handleButton}
          >
            6 - 8 Orang
          </button>
        </div>

        <div className="grid grid-cols-1 py-4 gap-y-8 lg:grid-cols-3 md:grid-cols-2">
          {category === "all" &&
            listCars.length > 0 &&
            listCars.map((item) => renderCarItem(item))}
          {category !== "all" &&
            filteredCars.length > 0 &&
            filteredCars.map((item) => renderCarItem(item))}
        </div>
      </div>
    </>
  );
}

export default ListCars2;
