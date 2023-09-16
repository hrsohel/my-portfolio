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
        <div className="flex w-full h-full items-center justify-around p-8  md:flex-nowrap flex-wrap achievment">
          <div className="flex h-full items-center justify-center flex-col text-black my-2">
            <div className="w-[5rem] h-[5rem] sm:w-[8rem] p-4 sm:h-[8rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="icons text-yellow-500 text-5xl sm:text-7xl md:text-8xl"
              />
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-2xl md:text-4xl font-bold text-center my-2 text-white"
            >
              10
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-[1rem] md:text-lg font-bold text-white"
            >
              Works completed
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="w-[5rem] h-[5rem] sm:w-[8rem] p-4 sm:h-[8rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="icons text-yellow-500 text-5xl sm:text-7xl "
              />
            </div>
            <p
              style={{ textShadow: "0 0 3px white" }}
              className="text-2xl md:text-4xl font-bold text-center my-2 text-white"
            >
              3
            </p>
            <p
              style={{ textShadow: "0 0 3px white" }}
              className="uppercase text-center text-[1rem] md:text-lg font-bold text-white"
            >
              years of experience
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="w-[5rem] h-[5rem] sm:w-[8rem] p-4 sm:h-[8rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUsers}
                className="icons text-yellow-500 text-5xl sm:text-7xl "
              />
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-2xl md:text-4xl font-bold text-center my-2 text-white"
            >
              12
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-[1rem] md:text-lg font-bold text-white"
            >
              total clients
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="w-[5rem] h-[5rem] sm:w-[8rem] p-4 sm:h-[8rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faAward}
                className="icons text-yellow-500 text-5xl sm:text-7xl md:text-8xl"
              />
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-2xl md:text-4xl font-bold text-center my-2 text-white"
            >
              2
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-[1rem] md:text-lg font-bold text-white"
            >
              awards won
            </p>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <h1 className="uppercase font-bold my-8 text-2xl md:text-4xl text-center">
          projects
        </h1>
        <PorfolioContainer />
      </div>
      <Footer />
    </>
  );
};

export default page;
