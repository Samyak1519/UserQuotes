import React from "react";

function Tailwindpra() {
  return (
    <>
      <div className="text-center mt-20 mx-52 flex flex-wrap rounded border-2 border-black"> 
       <div className="w-full text-xl h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-white h-24 flex justify-center items-center font-bold">
          NEWS
       </div>
       <div className="w-full text-center" >
        <h3 className="text-lg font-semibold">Stay upto date with latest</h3>
        <p>Subscribe</p>
        <form className="flex flex-wrap">
        <input className="w-full mx-52 bg-slate-200 text-center p-2" type="name" placeholder="Your Good Name" />
        <br></br>
        <button className="bg-purple-500 w-full mx-52 text-white p-2 text-center mb-4" type="submit">Subscribe</button>
       </form>
       </div>
       

      </div>
    </>
  );
}

export default Tailwindpra;
