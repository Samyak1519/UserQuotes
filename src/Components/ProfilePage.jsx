import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

function ProfilePage() {
  return (
    <>
      <div className="bg-white shadow-lg p-5 rounded-2xl border flex justify-around max-h-screen min-w-screen mx-20">
        <div id="UserInfo" className=" size-full p-5">
          {/* <h1>Profile Section</h1> */}

          <div
            id="userInfo"
            className="flex flex-col items-start p-5 justify-center "
          >
            <img
              className="rounded-full border size-32 mb-3 hover:shadow-lg"
              id="profileImage"
              href="#"
              alt="Profile Pic"
            ></img>
            <p className="font-semibold text-lg">Samyak Nimsarkar</p>
            <p className="font-medium text-sm text-gray-500">
              Software Developer
            </p>
            <div
              id="contactinfo"
              className="flex flex-col gap-2 mt-2 align-middle justify-items"
            >
              <p className="font-medium text-sm text-gray-500">
                Email:
                <p className="font-normal text-sm text-gray-500">
                  samyak.alaska@jao.com
                </p>
              </p>
              <p className="font-medium text-sm text-gray-500">
                Contact No:
                <p className="font-normal text-sm text-gray-500">
                  +91YesYesYesYes
                </p>
              </p>
            </div>
            <hr />
            <div id="actions" className="min-w-full flex justify-start mt-3">
              <button className="border hover:shadow-lg font-semibold flex flex-wrap justify-center bg-white p-1 text-black h-9 w-20 rounded-lg">
                Edit
              </button>
            </div>
          </div>

          <div id="about" className=" border  p-5 rounded-2xl">
            <h2 className="font-semibold text-lg ">About me</h2>
            <p className="font-medium text-sm text-gray-500">
              Heyyy there,
              <p>
                My name is Samyak Nimsarkar (*Mujhe pata hai tu yaha pe change
                krne hi wali hai kr le kya hi bol sakte hai).
              </p>
            </p>
          </div>
        </div>

        <div id="UserRelatedQuotes" className=" size-full p-5">
          <h2 className="font-semibold text-2xl mb-5">Your Quotes</h2>
          <hr />

          {/* User's Quotes */}
          <div id="all_user_speific_quotes" className="mt-5 ">
            <div className="border p-5 rounded-xl mb-5">
              <div className="mb-3">
                <p className="font-normal text-gray-600">
                  Hello, This is suppose to be the same quote related to which
                  this user has Written in his lifeee
                </p>
              </div>
              <hr />

              <div id="quote_actions" className="flex gap-3 mt-3">
                <button
                  id="Edit"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                  <p>Edit</p>
                </button>

                <button
                  id="delete"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                  <p>Delete</p>
                </button>
              </div>
            </div>

            {/* QUOTE  - 2 */}

            <div className="border p-5 rounded-xl mb-5">
              <div className="mb-3">
                <p className="font-normal text-gray-600">
                  Hello, This is suppose to be the same quote related to which
                  this user has Written in his lifeee
                </p>
              </div>
              <hr />

              <div id="quote_actions" className="flex gap-3 mt-3">
                <button
                  id="Edit"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                  <p>Edit</p>
                </button>

                <button
                  id="delete"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                  <p>Delete</p>
                </button>
              </div>
            </div>

            {/* QUOTE - 3 */}

            <div className="border p-5 rounded-xl mb-5">
              <div className="mb-3">
                <p className="font-normal text-gray-600">
                  Hello, This is suppose to be the same quote related to which
                  this user has Written in his lifeee
                </p>
              </div>
              <hr />

              <div id="quote_actions" className="flex gap-3 mt-3">
                <button
                  id="Edit"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                  <p>Edit</p>
                </button>

                <button
                  id="delete"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                  <p>Delete</p>
                </button>
              </div>
            </div>

            {/* QUOTE - 4 */}

            <div className="border p-5 rounded-xl mb-5">
              <div className="mb-3">
                <p className="font-normal text-gray-600">
                  Hello, This is suppose to be the same quote related to which
                  this user has Written in his lifeee
                </p>
              </div>
              <hr />

              <div id="quote_actions" className="flex gap-3 mt-3">
                <button
                  id="Edit"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                  <p>Edit</p>
                </button>

                <button
                  id="delete"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                  <p>Delete</p>
                </button>
              </div>
            </div>

            {/* QUOTE - 5 */}

            <div className="border p-5 rounded-xl mb-5 ">
              <div className="mb-3">
                <p className="font-normal text-gray-600">
                  Hello, This is suppose to be the same quote related to which
                  this user has Written in his lifeee
                </p>
              </div>
              <hr />

              <div id="quote_actions" className="flex gap-3 mt-3">
                <button
                  id="Edit"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                  <p>Edit</p>
                </button>

                <button
                  id="delete"
                  className="flex gap-3 items-center border px-3 py-1.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
