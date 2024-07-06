import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import Addquote from "./Addquote";

function Navbar() {
  return (
    <>
      <div
        className="flex justify-between flex-wrap w-full
      p-4 px-6 
      shadow-lg 
      bg-white 
      "
      >
        <div className="cursor-pointer">
          <Link to="/">
            <h1 className="font-bold text-3xl">User Quotes</h1>
          </Link>
        </div>

        <div className="flex gap-7 flex-wrap">
          <div className=" flex gap-10 text-lg flex-wrap">
            <Link
              to="/"
              className="p-1 hover:border hover:bg-green-400 hover:rounded-full hover:text-white hover:p-2 hover:text-base"
            >
              Home
            </Link>

            <Link
              to="/add_quote"
              className="p-1 hover:border hover:bg-green-400 hover:rounded-full hover:text-white hover:p-2 hover:text-base"
            >
              Add Quote
            </Link>
          </div>

          {/* Profile Icon and Name */}

          <div className="font-semibold text-lg flex place-items-center gap-1.5 flex-wrap">
            <VscAccount />

            <p className="flex p-1 ">
              Hola,<p className="text-green-700">Samyak.</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
