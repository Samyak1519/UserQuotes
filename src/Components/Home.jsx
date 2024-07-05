import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

function Home() {
  return (
    <>
      <div>
        <div className="font-medium text-2xl ml-2 mb-3">
          <h1>All Quotes</h1>
        </div>
        <hr />
        <div
          id="add_quotes"
          name="all_quotes"
          className=" gap-3 justify-center flex-wrap inline-flex"
        >
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer ">
            <div className="bg-[#FFFFED] rounded-2xl p-5 border">
              <div className="py-2">
                <p>This is Quote 1 by Chan.</p>
                <p className="font-medium mt-1">- Chan</p>
              </div>

              <hr />

              <div className="flex gap-2 pt-3 justify-end">
                <button
                  id="Edit"
                  className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                </button>
                <button
                  id="delete"
                  className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
          {/* 2nd Card */}
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 border ">
              <div className="py-2">
                <p>This is Quote 2 by Samyak.</p>
                <p className="font-medium mt-1">- Samyak</p>
              </div>

              <hr />

              <div className="flex gap-2 pt-3 justify-end">
                <button
                  id="Edit"
                  className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                </button>
                <button
                  id="delete"
                  className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
          {/* 2nd Card */}
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 border">
              <div className="py-2">
                <p>This is Quote 3 by Nilesh.</p>
                <p className="font-medium mt-1">- Nilesh</p>
              </div>

              <hr />

              <div className="flex gap-2 pt-3 justify-end">
                <button
                  id="Edit"
                  className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                </button>
                <button
                  id="delete"
                  className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 border">
              <div className="py-2">
                <p>This is Quote 4 by Vaishnavi.</p>
                <p className="font-medium mt-1">- Moti</p>
              </div>
              <hr />
              <div className="flex gap-2 pt-3 justify-end">
                <button
                  id="Edit"
                  className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                </button>
                <button
                  id="delete"
                  className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
          {/* Card 5  */}
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 border">
              <div className="py-2">
                <p>This is Quote 5 by Ye kaam krega kya App.</p>
                <p className="font-medium mt-1">- Are bilkul.</p>
              </div>

              <hr />

              <div className="flex gap-2 pt-3 justify-end">
                <button
                  id="Edit"
                  className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                </button>
                <button
                  id="delete"
                  className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 border">
              <div className="py-2">
                <p>This is Quote 1 by Chan.</p>
                <p className="font-medium mt-1">- Chan</p>
              </div>

              <hr />

              <div className="flex gap-2 pt-3 justify-end">
                <button
                  id="Edit"
                  className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                </button>
                <button
                  id="delete"
                  className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
