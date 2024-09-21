import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project0 from "../assets/project11.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";
import Projec from "../assets/timbo-shop.png";
import Project4 from "../assets/project4.png";
import Barb from "../assets/Barb-show.png";

const Project = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      AOS.init({
        duration: 1000, // animation duration
        delay: 500, // animation delay
        easing: "ease-in-out", // animation easing
      });
    }, 3000); // 3-second delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="container bg-white text-4xl  text-black mt-2 mb-12 p-4 w-3/4">
        <div className="mt-20 flex flex-col">
          <div>
            <h1 className="text-[15px] font-bold text-center">
              Some of the project I have worked on:
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  place-content-center">
            <div className="mt-10 mb-4 p-5 flex flex-wrap justify-center items-center text-sm rounded-lg shadow-2xl w-auto overflow-hidden">
              <a
                href="https://seg-barb-show-8myq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 p-2"
              >
                <div data-aos="fade-right">
                  <img src={Barb} alt="" className="w-[323px]" />
                </div>
              </a>
              <div className="flex flex-col items-center mt-5">
                <p className="text-black w-3/4">
                  Built a shoe e-commerce platform with robust search,
                  filtering, and authentication using React and Firebase.
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
                className="bg-blue-100 p-2"
              >
                <div data-aos="fade-left">
                  <img src={Project4} alt="" />
                </div>
              </a>
              <div className="flex flex-col items-center mt-5 w-3/4">
                <p className="text-black">
                  Built Lendsqr dashboard replica with React, TypeScript, and
                  SCSS.
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
                className="bg-cyan-200 p-2"
              >
                <div data-aos="fade-up-right">
                  <img src={Projec} alt="" />
                </div>
              </a>
              <div className="flex flex-col items-center w-3/4 mt-5">
                <p className="text-black">
                  Developed a responsive e-commerce site with React and Tailwind
                  CSS.
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
                <div data-aos="fade-up-left">
                  <img src={Project2} className="imgg" alt="" />
                </div>
              </a>
              <div className="flex flex-col items-center w-3/4 mt-5">
                <p className="text-black">
                  Developed a movie website with React, Tailwind CSS, and
                  Firebase, demonstrating full-stack skills.
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
                <div data-aos="flip-left">
                  <img src={Project0} alt="" />
                </div>
              </a>
              <div className="flex flex-col items-center w-3/4 mt-5">
                <p className="text-black">
                  Built a responsive banana bread ordering site with Context API
                  for state management and a smooth UI.
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
                <div data-aos="flip-right">
                  <img src={Project3} alt="" />
                </div>
              </a>
              <div className="flex flex-col justify-center items-center w-3/4 mt-5">
                <p className="text-black">
                  Built a transport logistics website replica using React,
                  Tailwind, HTML, and CSS, showcasing responsive and dynamic web
                  development skills.
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
    </div>
  );
};

// AOS.init();

export default Project;
