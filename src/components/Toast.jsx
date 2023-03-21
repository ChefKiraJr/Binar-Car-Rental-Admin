import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Toast({ message, status }) {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, [open]);

  return (
    <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[600px]">
      {open === false ? null : (
        <div
          id="toast-danger"
          className={`flex items-center justify-center  p-4 mb-4 text-white  rounded-sm shadow  ${
            status === "error"
              ? "bg-red-500"
              : status === "success"
              ? "bg-black"
              : ""
          }`}
          role="alert"
        >
          <div className="ml-3 text-sm font-normal">{message}</div>
        </div>
      )}
    </div>
  );
}
