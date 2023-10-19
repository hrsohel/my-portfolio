import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PorfolioContainer from "@/components/PorfolioContainer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-yellow-500">
        {/* <div className=" bg-red-500 absolute top-0 left-0 w-full h-full"></div> */}
        <div className="flex w-full h-full items-center justify-around flex-row py-8 px-2">
          <div className="flex items-center justify-center flex-col text-black my-2">
            <div className="w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem]  p-4  rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="icons text-yellow-500 text-4xl sm:text-7xl md:text-8xl"
              />
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-xl md:text-4xl font-bold text-center my-2 text-white"
            >
              10
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-sm md:text-lg font-bold text-white"
            >
              Works completed
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] p-4 rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="icons text-yellow-500 text-4xl "
              />
            </div>
            <p
              style={{ textShadow: "0 0 3px white" }}
              className="text-xl md:text-4xl font-bold text-center my-2 text-white"
            >
              3
            </p>
            <p
              style={{ textShadow: "0 0 3px white" }}
              className="uppercase text-center text-sm md:text-lg font-bold text-white"
            >
              years of experience
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] p-4 rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUsers}
                className="icons text-yellow-500 text-4xl  "
              />
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-xl md:text-4xl font-bold text-center my-2 text-white"
            >
              12
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-sm md:text-lg font-bold text-white"
            >
              total clients
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] p-4 rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faAward}
                className="icons text-yellow-500 text-4xl"
              />
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-xl md:text-4xl font-bold text-center my-2 text-white"
            >
              2
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-sm md:text-lg font-bold text-white"
            >
              awards won
            </p>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <div className="text-center my-4 text-lg sm:text-2xl md:text-4xl font-bold py-4">
          {/* SERVICES */}
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            P
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            R
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            O
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            J
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            E
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            C
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            T
          </span>
          <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
            S
          </span>
        </div>
        <PorfolioContainer />
      </div>
      <Footer />
    </>
  );
};

export default page;
