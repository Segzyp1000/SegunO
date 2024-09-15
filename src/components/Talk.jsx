import React from "react";

function Talk() {
  return (
    <div className=" text-white bg-darkBlue">
      <div className="flex-wrap md:flex justify-between md:space-y-0 space-y-4 mx-4 md:mx-12 p-3 ">
        <div>
          <p className="font-serif">
            What does success look like for your project?
          </p>
        </div>
        <div>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="text-darkBlue rounded-xl font-light bg-white p-2 hover:bg-slate-700 hover:text-white"
          >
            Let's talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default Talk;
