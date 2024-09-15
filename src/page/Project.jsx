import React from "react";
import Project0 from "../assets/project11.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";
import Projec from "../assets/timbo-shop.png";
import Project4 from "../assets/project4.png";
import Barb from "../assets/Barb-show.png";

const Project = () => {
  return (
    <div className="bg-white text-4xl  text-black mt-2 mb-12 p-4">
      <div className="mt-20 flex flex-col justify-center items-center text-center ">
        <h1 className="text-[15px] font-bold flex flex-start">
          Some of the project I have worked on
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm space-x-2  rounded-lg shadow-2xl w-auto overflow-hidden">
            <a
              href="https://seg-barb-show-8myq.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 p-2"
            >
              <img src={Barb} alt="" className="w-[323px]" />
            </a>
            <div className="flex flex-col items-center mt-5">
              <p className="text-black w-3/4">
                Built a shoe e-commerce platform with robust search, filtering,
                and authentication using React and Firebase.
              </p>

              <a
                href="https://seg-barb-show-8myq.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>

          <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm rounded-lg shadow-2xl w-auto overflow-hidden">
            <a
              href="https://segun-olowoyeye-lendsqr-fe-test.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-200 p-2"
            >
              <img src={Project4} alt="" />
            </a>
            <div className="flex flex-col items-center mt-5 w-3/4">
              <p className="text-black">
                Built Lendsqr dashboard replica with React, TypeScript, and SCSS
              </p>

              <a
                href="https://segun-olowoyeye-lendsqr-fe-test.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>

          <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm rounded-lg shadow-2xl w-auto overflow-hidden">
            <a
              href="https://timbo-shop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 p-2"
            >
              <img src={Projec} alt="" />
            </a>
            <div className="flex flex-col items-center w-3/4 mt-5">
              <p className="text-black">
                Developed a responsive e-commerce site with React and Tailwind
                CSS
              </p>

              <a
                href="https://timbo-shop.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>

          <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm rounded-lg shadow-2xl w-auto overflow-hidden">
            <a
              href="https://movieboxlist.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 p-2"
            >
              <img src={Project2} className="imgg" alt="" />
            </a>
            <div className="flex flex-col items-center w-3/4 mt-5">
              <p className="text-black">
                Developed a movie website with React, Tailwind CSS, and
                Firebase, demonstrating full-stack skills
              </p>

              <a
                href="https://movieboxlist.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
              >
                Preview
              </a>
            </div>
          </div>

          <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm rounded-lg shadow-2xl w-auto overflow-hidden">
            <a
              href="https://dariola-banana-bread.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-400 p-2"
            >
              <img src={Project0} alt="" />
            </a>
            <div className="flex flex-col items-center w-3/4 mt-5">
              <p className="text-black">
                Designed and developed a responsive banana bread ordering
                website, implementing Context API for efficient state management
                and ensuring a smooth user interface
              </p>

              <a
                href="https://dariola-banana-bread.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>

          <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm rounded-lg shadow-2xl w-auto overflow-hidden">
            <a
              href="https://trans-flows.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 p-2"
            >
              <img src={Project3} alt="" />
            </a>
            <div className="flex flex-col justify-center items-center w-3/4 mt-5">
              <p className="text-black">
                Developed a transport logistics website replica with Tailwind,
                HTML, CSS, and JavaScript, demonstrating my skills in building
                responsive, dynamic, and modern web applications
              </p>

              <a
                href="https://trans-flows.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
              >
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
