"use client";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ title, content, icon }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      data-aos="zoom-in"
      className="service-card p-2 min-h-[10rem] rounded-md w-[10rem] sm:w-[20rem]"
    >
      <div className="flex h-full items-center justify-center  flex-col ">
        <div className="p-1 w-[4rem] h-[4rem] my-4 service-icon-container border-2 flex items-center justify-center transition-all bg-white border-yellow-400 rounded-full">
          <FontAwesomeIcon
            icon={icon}
            // size="4x"
            className="text-yellow-500 text-lg sm:text-3xl"
          />
        </div>
        <h1 className="text-center  font-bold text-[.9rem] sm:text-lg uppercase">
          {title}
        </h1>
      </div>
      {/* <p className="text-center text-sm sm:text-[1rem]">{content}</p> */}
    </div>
  );
};

export default React.memo(ServiceCard);
