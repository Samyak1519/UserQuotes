import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
// import Addquote from "./Addquote";

function Navbar() {
  return (
    <>
      <div className="flex justify-between place-items-baseline flex-wrap w-full px-10 align-middle shadow-lg bg-white pt-1.5">
        <div className="flex gap-10 flex-wrap place-items-baseline ">
          <div className="cursor-pointer p-1.5">
            <Link to="/">
              <h1 className="font-bold text-3xl">User Quotes</h1>
            </Link>
          </div>

          <div className="flex gap-3 text-lg flex-wrap rounded-full ">
            <NavLink
              to="/"
              className="p-2 rounded-full hover:delay-75 hover:text-green-600 hover:font-bold hover:text-xl h-9 hover:h-9"
            >
              Home
            </NavLink>

            <NavLink
              to="/add_quote"
              className="p-2 rounded-full hover:delay-75 hover:text-green-600 hover:font-bold hover:text-xl h-9 hover:h-9"
            >
              Add Quote
            </NavLink>
          </div>
        </div>

        <div className="flex flex-wrap p-3.5">
          {/* Profile Icon and Name */}

          <NavLink
            to="/Login"
            name="login_button"
            id="login_button"
            className="hover:border hover:shadow-lg hover:font-semibold flex flex-wrap justify-center bg-white p-1 text-black font-medium text-base h-9 w-20 rounded-lg"
          >
            LogIn
          </NavLink>

          <NavLink
            to="/signup"
            name="signup_button"
            id="signup_button"
            className="hover:border p-1 hover:shadow-lg hover:bg-white hover:text-black hover:text-base hover:font-semibold flex flex-wrap justify-center bg-black text-white font-normal text-base h-9 w-20 rounded-lg"
          >
            SignUp
          </NavLink>

          {/* <div className="font-semibold text-lg flex place-items-center gap-1.5 flex-wrap">
            <VscAccount />

            <p className="flex p-1 ">
              Hola,<p className="text-green-700">&nbsp;Samyak.</p>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
