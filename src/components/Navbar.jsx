// Here's the complete code with the new solution:

// jsx
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/SEGUN.png";
import SecondLogo from "../assets/SEGUN (1).png"; // replace with your actual logo import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const location = useLocation();

  return (
    <div className="w-full z-[100] absolute">
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
            } `}
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
          <div className="fixed right-0 top-[15px] flex flex-col mt-10 bg-white p-5 space-y-5 text-black font-bold md:w-80 w-full md:h-auto h-[172px]">
            <Link to="/project" onClick={toggleMenu}>
              Portfolio
            </Link>
            <a
              onClick={toggleMenu}
              href="https://drive.google.com/file/d/1vfQFM1Xdf_cd6Qf2p004iBPWauliVyVQ/view"
              className="text-white bg-blue-500 p-2 rounded-lg hover:bg-slate-400 flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

// And the CSS:

// .bg-darkBlue {
//   background-color: #032B44; /* or any other dark blue color you prefer */
// }

// .menu-icon-color-change {
//   stroke: white;
// }
