import React from "react";
import { NavLink } from "react-router-dom";
import { BiShowAlt } from "react-icons/bi";

function LoginPage() {
  return (
    <>
      <div id="mainComponent" className="flex justify-center rounded-lg p-3">
        <div className="flex flex-col rounded-lg border shadow-xl p-6 w-4/12 h-3/6">
          <div id="heading" name="heading" className="flex flex-col gap-0">
            <h1 className="text-3xl font-bold ">Welcome Back!</h1>
            <p className="font-normal  text-gray-500">
              To get starter, login to your account.
            </p>
          </div>

          <div
            id="inputSection"
            name="inputsection"
            className="flex flex-col flex-wrap gap-3 mt-8"
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-[#F8F8F8] p-3 rounded-lg"
            ></input>

            <div className="flex flex-row-reverse justify-start place-items-baseline gap-3 pr-3">
              <BiShowAlt className="cursor-pointer" border />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="bg-[#F8F8F8] p-3 rounded-lg w-full"
              ></input>
            </div>
          </div>

          <NavLink
            to="#"
            className="underline font-normal text-right text-base mt-3"
          >
            Forgot Password
          </NavLink>

          <button
            id="signIn"
            name="signIn"
            className="bg-[#171717] text-white rounded-lg p-3 mt-3 mb-3 hover:shadow-red-600"
          >
            Log In
          </button>

          <hr />

          <button className="border rounded-lg text-black mt-3 p-3 font-semibold text-sm hover:shadow-lg">
            Sign Up
          </button>
          <button className="border rounded-lg text-black mt-3 p-3 font-semibold text-sm hover:shadow-lg">
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
