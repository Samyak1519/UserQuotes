import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import Addquote from "./Addquote";

function Navbar() {
  return (
    <>
      <div className="flex justify-between place-items-baseline flex-wrap w-full p-4 px-7 align-middle shadow-lg bg-white">
        <div className="flex gap-10 flex-wrap place-items-baseline ">
          <div className="cursor-pointer p-1.5">
            <Link to="/">
              <h1 className="font-bold text-3xl">User Quotes</h1>
            </Link>
          </div>

          <div className=" flex gap-3 text-lg flex-wrap rounded-full ">
            <Link
              to="/"
              className="p-2 rounded-full hover:border hover:bg-green-400 hover:rounded-full hover:text-white hover:p-2"
            >
              Home
            </Link>

            <Link
              to="/add_quote"
              className="p-2 rounded-full hover:border hover:bg-green-400 hover:rounded-full hover:text-white hover:p-2"
            >
              Add Quote
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap p-2.5">
          {/* Profile Icon and Name */}

          <div className="font-semibold text-lg flex place-items-center gap-1.5 flex-wrap">
            <VscAccount />

            <p className="flex p-1 ">
              Hola,<p className="text-green-700">&nbsp;Samyak.</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
