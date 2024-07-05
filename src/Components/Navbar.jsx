import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 px-6 shadow-lg bg-white">
        <div className="cursor-pointer">
          <h1 className="font-bold text-3xl">User Quotes</h1>
        </div>

        <div className="flex gap-7">
          <div className=" flex gap-10 text-lg ">
            <a
              href="#"
              className="p-1
              hover:text-green-500
              hover:underline
              hover:font-bold
              "
            >
              Home
            </a>
            <a
              href="#"
              className="p-1 
              hover:underline 
              hover:font-bold
              hover:text-green-500 
              "
            >
              All Quotes
            </a>
            <a
              href="#"
              className="p-1 
              hover:text-green-500 
              hover:underline 
              hover:font-bold 
              "
            >
              Add Quote
            </a>
          </div>
          <div className="font-semibold text-lg">
            <p className="flex p-1">
              Hola,<p className="text-green-700">Samyak.</p>
            </p>
            <img></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
