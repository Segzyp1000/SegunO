import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/SEGUN.png";
import SecondLogo from "../assets/SEGUN (1).png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const location = useLocation();

  return (
    <div className="w-full z-[100] absolute fade-in">
      <nav className="flex justify-between mx-4 md:mx-12 p-5 md:flex-row md:items-center">
        <div className="flex space-x-2">
          <Link to="/">
            <img
              src={location.pathname !== "/" ? SecondLogo : Logo}
              alt="Segun Olowoyeye"
              className="w-[121px] p-5"
            />
          </Link>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className={`text-${
              location.pathname !== "/" ? "darkBlue" : "white"
            } menu-button ${menuOpen ? "rotate" : ""}`}
          >
            {menuOpen ? (
              <FaX />
            ) : (
              <svg
                className={`w-9 h-9 ${
                  location.pathname !== "/" ? "menu-icon-color-change" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 12h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="fixed right-0 top-[15px] flex flex-col mt-12 bg-white p-5 space-y-12 md:space-y-7 text-black font-bold md:w-80 w-full md:h-auto h-[557px] faded-in">
            <Link
              to="/project"
              onClick={toggleMenu}
              className="hover:text-blue-900 py-5"
            >
              Portfolio
            </Link>
            <a
              onClick={toggleMenu}
              href="https://drive.google.com/file/d/1j53bCnrgLrWE_xJBg4bUZ6ld_P84zEzo/view?usp=drivesdk"
              className="text-white bg-blue-500 p-2 rounded-lg hover:bg-slate-400 flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <h1 className="text-gray-300 text-3xl">TALK TO ME 😀</h1>

            <a href="mailto:segunolowoyeye@gmail.com">
              segunolowoyeye@gmail.com
            </a>
            <a href="https://wa.link/aozrti" className="text-slate-500">
              https://wa.link/aozrti
            </a>
            <div className="flex space-x-5 text-darkBlue">
              <a
                href="https://www.linkedin.com/in/segun-olowoyeye-04909b76/"
                className="hover:text-slate-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://x.com/segzyp1000"
                className="hover:text-slate-500"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://github.com/Segzyp1000"
                className="hover:text-slate-500"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
