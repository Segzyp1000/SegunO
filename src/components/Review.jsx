import React from "react";
import Cert from "../assets/Cert.png";

function Review() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 my-12 md:mx-auto mx-12">
      <h1 className="text-darkBlue text-3xl">Certification</h1>
      <img src={Cert} alt="certificate" />
    </div>
  );
}

export default Review;
