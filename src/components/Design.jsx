import React from "react";

function Design() {
  return (
    <div className="bg-white md:flex flex-col p-5 space-y-5">
      <div className="flex flex-col max-w-full lg:w-[50%] ml-0 lg:ml-[500px] xl:ml-[700px] 2xl:ml-[900px]">
        <h1 className="text-3xl underline font-bold font-lg text-darkBlue">
          Design.
        </h1>
        <p className="text-[23px] lg:text-[17px] xl:text-[25px] font-medium w-4/5 text-black">
          Frequent times i find myself putting texts and shapes together to born
          out a pleasing UI like the one you are going through right now. I
          utilize tools like Figma, Adobe XD and Corel draw for various design
          crafting and manipulation.
        </p>
      </div>

      <div className="flex flex-col max-w-full lg:w-[50%] ml-1 lg:ml-12 ">
        <h1 className="text-3xl underline font-bold font-lg text-darkBlue">
          Development.
        </h1>
        <p className="text-[23px] lg:text-[17px] xl:text-[25px]  font-medium w-4/5 text-black">
          In building applications, i utilize but not limited to tools like
          Javascript, Typescript, Git, Github, CSS, Html, Tailwind, Bootstrap
          ReactJs , SCSS among others. I can absolutely function independently
          and deliver fast, resilient solutions optimized for scale with
          performance, usability and scalabilty as the building blocks.
        </p>
      </div>
    </div>
  );
}

export default Design;
