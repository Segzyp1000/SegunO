import React from "react";

function Design() {
  return (
    <div className="bg-white text-gray-500 md:flex flex-col p-5 w-full space-y-5">
      <div className="flex flex-col w-full lg:w-[50%] ml-1 lg:ml-[500px]">
        <h1 className="text-4xl underline font-bold text-start items-start justify-start mr-44 text-darkBlue">
          Design.
        </h1>
        <p className="text-[15px] font-medium">
          Frequent times i find myself putting texts and shapes together to born
          out a pleasing UI like the one you are going through right now. I
          utilize tools like Figma, Adobe XD and Corel draw for various design
          crafting and manipulation.
        </p>
      </div>
      <div>
        <div className="flex flex-col w-full lg:w-[50%] ml-1 lg:ml-12 ">
          <h1 className="text-4xl text-darkBlue underline font-bold font-lg">
            Development.
          </h1>
          <p className="w-3/4 text-[15px] font-medium">
            In building applications, i utilize but not limited to tools like
            Javascript, Typescript, Git, Github, CSS, Html, Tailwind, Bootstrap
            ReactJs , SCSS among others. I can absolutely function independently
            and deliver fast, resilient solutions optimized for scale with
            performance, usability and scalabilty as the building blocks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Design;
