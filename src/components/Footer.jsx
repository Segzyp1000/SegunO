import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-darkBlue text-white ">
      <div className="md:flex flex-wrap">
        <div className="mx-12 p-12">
          <h1 className="text-3xl">TALK TO ME 😀</h1>
          <a href="#" className="text-navColor">
            segunolowoyeye@gmail.com
          </a>
        </div>
        <div className="mt-12 md:mx-12 mx-20 ">
          <Link to="/project">
            <p>Portfolio</p>
          </Link>
        </div>
      </div>
      <div className="separator2 mx-20 text-navColor"></div>
      <div className="md:flex flex-wrap justify-between items-center mx-20 mt-10">
        <h1 className="text-navColor">Segun Olowoyeye 2024</h1>
        <div className="flex space-x-5 text-navColor">
          <a href="#">LN</a>
          <a href="#">X</a>
          <a href="#">GH</a>
          <a href="#"></a>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
}

export default Footer;
