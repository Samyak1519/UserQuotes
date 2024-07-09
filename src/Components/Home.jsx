import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

function Home() {
  return (
    <>
      <div>
        <div className="font-medium text-2xl ml-2 mb-3 place-content-between ">
          <h1>All Quotes</h1>
        </div>
        <hr />
        <div
          id="add_quotes_main"
          name="all_quotes_main"
          className="gap-3 flex justify-center flex-wrap "
        >
          {/* Card 1 */}
          <div
            id="card_container"
            className="mt-5 
          hover:shadow-lg 
          hover:delay-75 
          hover:rounded-2xl 
          cursor-pointer 
          flex flex-wrap border"
          >
            <div
              id="card"
              className="bg-[#FFFFED] border rounded-2xl px-5 pt-5 size-52 relative flex flex-wrap "
            >
              <div id="card_text" className="border">
                <p>This is Quote 4 by Vaishnavi.</p>
                <p className="font-medium mt-1">- Moti</p>
              </div>

              <div className=" flex flex-wrap justify-end border w-full absolute bottom-0">
                <hr />

                <div id="action_buttons" className="flex gap-2">
                  <button
                    id="edit_button"
                    className="border p-2.5 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                  >
                    <FaRegEdit />
                  </button>

                  <button
                    id="delete_button"
                    className="border p-2.5 rounded-lg text-red-500  hover:bg-red-500 hover:text-white"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer ">
            <div className="bg-[#FFFFED] rounded-2xl p-5 size-52 border">
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

          {/* Card 1 */}

          <div className="mt-5 hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 size-52 border ">
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
            <div className="bg-[#FFFFED] rounded-2xl p-5 size-52 border">
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

          {/* Card 5  */}
          <div className="mt-5  hover:shadow-lg hover:delay-75 hover:rounded-2xl cursor-pointer">
            <div className="bg-[#FFFFED] rounded-2xl p-5 size-52 border">
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
            <div className="bg-[#FFFFED] rounded-2xl p-5 size-52 border">
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
