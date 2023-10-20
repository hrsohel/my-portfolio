import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faBriefcase,
  faCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PorfolioContainer from "@/components/PorfolioContainer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-slate-100">
        {/* <div className=" bg-red-500 absolute top-0 left-0 w-full h-full"></div> */}
        <div className="flex w-full h-full items-center justify-around flex-row py-8 px-2">
          <div className="flex  items-center justify-center flex-col text-black my-2">
            <div className="opera-container2 w-[5rem] h-[5rem] sm:w-[8rem] sm:h-[8rem]  p-4  rounded-full  flex items-center justify-center">
              <div
                className="round-div h-full w-full flex items-center justify-center "
                style={{
                  "--before": "rgb(234 179 8)",
                  "--after": "rgb(255, 218, 72)",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  // "text-4xl
                  // sm:text-7xl
                  // md:text-8xl"
                  className="icons text-yellow-500 text-4xl sm:text-6xl"
                />
              </div>
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-[1.2rem] md:text-4xl font-bold text-center my-2 text-[#444]"
            >
              10
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-[0.8rem] md:text-lg font-bold text-[#444]"
            >
              Works completed
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="opera-container2 w-[5rem] h-[5rem] sm:w-[8rem] sm:h-[8rem]  p-4  rounded-full  flex items-center justify-center">
              <div
                className="round-div h-full w-full flex items-center justify-center "
                style={{
                  "--before": "rgb(234 179 8)",
                  "--after": "rgb(255, 218, 72)",
                }}
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  // "text-4xl
                  // sm:text-7xl
                  // md:text-8xl"
                  className="icons text-yellow-500 text-3xl sm:text-6xl"
                />
              </div>
            </div>
            <p
              style={{ textShadow: "0 0 3px white" }}
              className="text-[1.2rem] text-[#444] md:text-4xl font-bold text-center my-2"
            >
              3
            </p>
            <p
              style={{ textShadow: "0 0 3px white" }}
              className="uppercase text-center text-[0.8rem] text-[#444] md:text-lg font-bold "
            >
              years of experience
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="opera-container2 w-[5rem] h-[5rem] sm:w-[8rem] sm:h-[8rem]  p-4  rounded-full  flex items-center justify-center">
              <div
                className="round-div h-full w-full flex items-center justify-center "
                style={{
                  "--before": "rgb(234 179 8)",
                  "--after": "rgb(255, 218, 72)",
                }}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  // "text-4xl
                  // sm:text-7xl
                  // md:text-8xl"
                  className="icons text-yellow-500 sm:text-5xl text-2xl"
                />
              </div>
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-[1.2rem] text-[#444] md:text-4xl font-bold text-center my-2 "
            >
              12
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-[0.8rem] text-[#444] md:text-lg font-bold "
            >
              total clients
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-black my-2">
            <div className="opera-container2 w-[5rem] h-[5rem] sm:w-[8rem] sm:h-[8rem]  p-4  rounded-full  flex items-center justify-center">
              <div
                className="round-div h-full w-full flex items-center justify-center "
                style={{
                  "--before": "rgb(234 179 8)",
                  "--after": "rgb(255, 218, 72)",
                }}
              >
                <FontAwesomeIcon
                  icon={faAward}
                  // "text-4xl
                  // sm:text-7xl
                  // md:text-8xl"
                  className="icons text-yellow-500 sm:text-6xl text-3xl"
                />
              </div>
            </div>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="text-[1.2rem] text-[#444] md:text-4xl font-bold text-center my-2 "
            >
              2
            </p>
            <p
              style={{ textShadow: "0px 0px 3px white" }}
              className="uppercase text-center text-[0.8rem] text-[#444] md:text-lg font-bold "
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
