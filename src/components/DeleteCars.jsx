import React from "react";
import deleteImg from "../assets/img-BeepBeep.png"

export default function DeleteCars({modalActive, setModalActive , deletePost}) {
    return (
        <div className="relative w-full max-w-2xl mx-auto bg-gray-200 rounded-md shadow-lg ">
            <div className="bg-white pb-8">
                <div className="">
                    <div className="pt-6 pb-2 flex justify-center">
                        <img className="" src={deleteImg}/>
                    </div>
                    <div className="pt-6 pb-2">
                        <p className="text-lg font-bold">
                            Menghapus Data Mobil
                        </p>
                    </div>
                    <div className="flex justify-center pb-6">
                        <p className="text-sm text-center w-72">
                            Setelah dihapus, data mobil tidak dapat
                            dikembalikan. Yakin ingin menghapus?
                        </p>
                    </div>
                    <div className="flex justify-around">
                        <button class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-[90px] " onClick={() => deletePost()}>
                            Ya
                        </button>
                        <button class="bg-white hover:text-blue-500 text-blue-700 border-[1px] border-blue-700 border-solid  font-bold py-2 px-4 rounded w-[90px]" onClick={() => setModalActive(false)}>
                            Tidak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
