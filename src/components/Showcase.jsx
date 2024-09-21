import React from "react";
import segz from "../assets/seg.png";

const Showcase = () => {
  return (
    <div className="nav-bar w-full h-full fade-in">
      <main className="show grid grid-cols-1 md:grid-cols-2 gap-4 p-6 ml-0 md:ml-10">
        <div className=" flex flex-col text-darkBlue mb-12 mt-1 md:mt-40 max-w-full">
          <h1 className="text-[70px] xl:text-[100px] w-full font-extrabold text-navColor">
            Frontend Developer.
          </h1>
          <p className="max-w-full mt-10  font-light text-[17px] xl:text-[25px] text-white">
            I like to make things, especially those that work on computers and
            on the web.
          </p>
          <div className="flex space-x-12  mt-10 text-sm md:text-[15px] xl:text-[25px]  text-navColor">
            <ul className="space-y-0 xl:space-y-4">
              <li>Highly skilled with web</li>
              <li>performance, accessibility & UI</li>
              <li>Engineering</li>
            </ul>
            <ul className="space-y-0 xl:space-y-4">
              <li>Approach engineering with</li>
              <li>usability and user experience as</li>
              <li>core building block.</li>
            </ul>
          </div>
        </div>

        <div className="flex md:mx-3 p-5 max-w-full h-full justify-center items-center mt-10">
          <img src={segz} alt="" className="w-[321px] lg:w-[521px]" />
        </div>
      </main>
    </div>
  );
};

export default Showcase;
