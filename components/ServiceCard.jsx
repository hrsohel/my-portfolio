"use client";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ title, content, icon }) => {
  const divRef = useRef();
  const iconRef = useRef();
  const mouseOver = () => {
    if (iconRef.current && divRef.current) {
      iconRef.current.style.color = "white";
      divRef.current.style.borderColor = "rgb(254 240 138)";
      divRef.current.style.background = "rgb(250 204 21)";
    }
  };
  const mouseLeave = () => {
    if (iconRef.current && divRef.current) {
      iconRef.current.style.color = "rgb(250 204 21)";
      divRef.current.style.borderColor = "rgb(250 204 21)";
      divRef.current.style.background = "white";
    }
  };
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
      className="service-card m-2 p-4 w-full min-h-[20rem] sm:min-h-[30rem] rounded-md sm:w-[25rem]"
      data-aos="zoom-in"
    >
      <div
        ref={divRef}
        className="p-8 my-4 border-8 mx-auto flex items-center justify-center w-[5rem] h-[5rem] sm:w-[10rem] sm:h-[10rem] transition-all bg-transparent border-yellow-400 rounded-full"
      >
        <FontAwesomeIcon
          ref={iconRef}
          icon={icon}
          // size="4x"
          className="text-yellow-400 text-4xl sm:text-7xl"
        />
      </div>
      <h1 className="text-center text-lg sm:text-xl mb-2 uppercase">{title}</h1>
      <p className="text-center text-sm sm:text-[1rem]">{content}</p>
    </div>
  );
};

export default React.memo(ServiceCard);
