"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ item }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="box rounded-lg relative w-[10rem] sm:w-[15rem] min-h-[10rem] py-4 flex items-center justify-center flex-col"
      style={{ "--i": `${item.skill}%` }}
      data-aos="zoom-in-up"
    >
      <div className="circle relative w-[125px] h-[125px] rounded-full flex items-center justify-center flex-col">
        <h1 className="relative text-center font-semibold text-lg">
          {item.skill} <small>%</small>
        </h1>
        {/* <h3
          style={{ letterSpacing: "" }}
          className="relative text-center font-semibold "
        >
          {item.name}
        </h3> */}
      </div>
      <h3
        style={{ letterSpacing: "" }}
        className="relative text-center font-semibold my-1"
      >
        {item.name}
      </h3>
    </div>
    // <div>
    //   <p>
    //     {item.name} {item.skill}%
    //   </p>
    //   <div className="w-full relative h-2 bg-yellow-200 my-2 rounded-lg">
    //     <div
    //       style={{ width: `${item.skill}%` }}
    //       className={`h-full bg-yellow-500 absolute top-0 left-0 rounded-lg`}
    //     ></div>
    //   </div>
    // </div>
  );
};

export default Skills;
