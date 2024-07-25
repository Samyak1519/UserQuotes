import React, { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function SignupPage() {
  const [data, setData] = useState([]);
  let Submit = (e) => {
    //event.preventDefault();
    setData(e.target.value);
    console.log(data);
  };

  return (
    <>
      <div id="mainComponent" className="flex justify-center rounded-lg p-3">
        <div className="flex flex-col rounded-lg border shadow-xl p-6 w-4/12 h-3/6">
          <div id="heading" name="heading" className="flex flex-col gap-0">
            <h1 className="text-3xl font-bold  "> Sign Up </h1>
            <p className="font-normal  text-gray-500">
              Sign up for awesome quotes.
            </p>
          </div>
          <form>
            <div
              id="inputSection"
              name="inputsection"
              className="flex flex-col flex-wrap gap-3 mt-8 valid:border-green-500 ..."
            >
              <input
                id="Name"
                name="Name"
                type="Name"
                placeholder="Enter your Good Name"
                className="bg-[#F8F8F8] p-3 rounded-lg "
                required
              ></input>
              <input
                id="Email"
                name="Email"
                type="Email"
                placeholder="Enter your Email"
                className="bg-[#F8F8F8] p-3 rounded-lg "
                required
              ></input>
              <input
                id="Contact"
                name="Contact"
                type="Contact"
                placeholder="Enter your Contact Number"
                className="bg-[#F8F8F8] p-3 rounded-lg "
                required
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
              <div className="flex flex-row-reverse justify-start place-items-baseline gap-3 pr-3">
                <BiShowAlt className="cursor-pointer" border />

                <input
                  id=" Confirm password"
                  name=" Confirm password"
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-[#F8F8F8] p-3 rounded-lg w-full"
                ></input>
              </div>
            </div>
            <h1 className=" font-normal text-right text-base mt-3">
              Already User? &nbsp;
              <NavLink className="underline" to="/login">
                Login
              </NavLink>
            </h1>
            <button
              type="submit"
              id="signIn"
              name="signIn"
              className="bg-[#171717] text-white rounded-lg p-3 mt-3 mb-3 hover:shadow-red-600  w-full"
              onClick={Submit} //function to handle form submission
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
