import React from "react";
import { toast } from "react-toastify";
import { TbTextSize } from "react-icons/tb";
import { CgUserList } from "react-icons/cg";

function Addquote() {
  const successToast = () => {
    toast.success("Quote Added Successfully...", { position: "bottom-right" });
  };

  return (
    <>
      <div>
        <div className="font-medium text-2xl ml-2 mb-3">
          <h1>Add Quote</h1>
        </div>
        <hr />

        <div
          className="flex 
        flex-col 
        gap-5 
        justify-center 
        flex-wrap 
        mt-5 
        items-center"
        >
          <div className="flex flex-col gap-3  w-5/6">
            <div className="flex justify-center place-items-baseline gap-5">
              <TbTextSize />
              <textarea
                className=" border rounded-md p-1 pl-3 h-32 w-3/6 shadow-md"
                type="text"
                placeholder="Quote"
              />
            </div>

            <div className="flex justify-center place-items-center gap-5 ">
              <CgUserList />

              <input
                className="border rounded-md p-1 pl-3 w-3/6 h-10 shadow-md"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 w-full">
            <button className="bg-white border font-semibold hover:shadow-md hover:shadow-red-300 text-red-700 w-20 h-9 rounded-lg">
              Clear
            </button>
            <button
              onClick={successToast}
              className="font-semibold bg-green-400 text-slate-700 hover:bg-white hover:text-green-700 hover:shadow-md hover:shadow-green-400 hover:border flex justify-center flex-wrap items-center rounded-lg w-20 h-9"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addquote;
