// Quotes From that User

import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

function Viewquote() {
  return (
    <>
      <div>
        <div className="font-semibold text-2xl ml-6 mb-3">
          <h1>Quote (Person's Name whose Quotes.)</h1>
        </div>
        <hr />

        <div id="viewingQuote" name="viewingQuote" className="border">
          <div className="flex justify-center flex-wrap my-5">
            <div className="bg-orange-50 rounded-2xl p-5 w-3/4 border">
              <div className="py-2 mb-2">
                <p>This is Quote 1 by Vaishnavi.</p>
                <p className="font-medium mt-1 text-right">- Moti</p>
              </div>
              <hr />
              <div className="flex flex-wrap justify-center gap-10 pt-3">
                <button
                  id="Edit"
                  className="flex gap-3 align-middle border p-2 rounded-lg text-green-800 hover:bg-green-500  hover:text-white"
                >
                  <FaRegEdit />
                  Edit
                </button>
                <button
                  id="delete"
                  className="flex gap-3 border p-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          id="related_quotes"
          name="related_quotes"
          className="border flex justify-center"
        >
          <div className="mx-5 p-3 border">
            {/* Related Card 1 */}
            <div className="my-3">
              <div className="bg-[#FFFFED] rounded-2xl  p-3  border cursor-pointer hover:shadow-md">
                <div className="py-2">
                  <p>This is Quote 1 by Vaishnavi.</p>
                  {/* <p className="font-medium mt-1">- Moti</p> */}
                </div>
              </div>
            </div>

            {/* Related Card 1 */}
            <div>
              <div className="bg-[#FFFFED] rounded-2xl p-3  border cursor-pointer hover:shadow-md">
                <div className="py-2">
                  <p>This is Quote 1 by Vaishnavi.</p>
                  {/* <p className="font-medium mt-1">- Moti</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewquote;
