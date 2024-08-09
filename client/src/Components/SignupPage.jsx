import React, { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const goToLogin = () => {
    navigate("/login");
  };

  let Submit = (e) => {
    //event.preventDefault();
    setData(e.target.value);
    console.log(data);
  };

  return (
    <>
      <div id="mainComponent" className="flex justify-center rounded-2xl p-3">
        <div className="flex flex-col rounded-2xl border shadow-xl p-6 w-4/12 h-3/6">
         
          <div id="heading" name="heading" className="flex flex-col gap-0">
            <h1 className="text-3xl font-semibold"> Create an Account! </h1>
            <p className="font-normal text-gray-500">
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

            {/* <h1 className="font-medium text-right text-base mt-5">
              Already User?
              <NavLink className="underline hover:text-green-600" to="/login">
                Login
              </NavLink>
            </h1> */}

            <button
              type="submit"
              id="signIn"
              name="signIn"
              className="bg-[#171717] text-white rounded-lg p-3 mt-4 mb-3 hover:shadow-red-600 hover:bg-gray-800 hover:delay-75 w-full "
              onClick={Submit} //function to handle form submission
            >
              Register
            </button>
          </form>
          <hr />
          <button
            type="submit"
            id="logIn"
            name="loginIn"
            className="border rounded-lg text-black mt-3 p-3 font-semibold text-sm hover:shadow-lg hover:font-bold hover:text-green-800"
            onClick={goToLogin} //function to handle form submission
          >
            Already a user? Login
          </button>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
