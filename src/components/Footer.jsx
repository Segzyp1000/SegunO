import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-darkBlue text-white ">
      <div className="md:flex flex-wrap">
        <div className="mx-12 p-12">
          <h1 className="text-3xl">TALK TO ME 😀</h1>
          <a
            href="https://mail.google.com/mail/u/0/"
            className="text-navColor hover:text-slate-500"
          >
            segunolowoyeye@gmail.com
          </a>
        </div>
        <div className="mt-12 md:mx-12 mx-20 hover:text-slate-500">
          <Link to="/project">
            <p>Portfolio</p>
          </Link>
        </div>
      </div>
      <div className="separator2 mx-20 text-navColor"></div>
      <div className="md:flex flex-wrap justify-between items-center mx-20 mt-10">
        <h1 className="text-navColor">Segun Olowoyeye 2024</h1>
        <div className="flex space-x-5 text-navColor">
          <a
            href="https://www.linkedin.com/in/segun-olowoyeye-04909b76/"
            className="hover:text-slate-500"
          >
            LN
          </a>
          <a href="https://x.com/segzyp1000" className="hover:text-slate-500">
            X
          </a>
          <a href="#" className="hover:text-slate-500">
            GH
          </a>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
}

export default Footer;
