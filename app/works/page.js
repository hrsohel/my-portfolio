import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[50vh] experience relative">
        <div className="overlay absolute top-0 left-0 w-full h-full"></div>
        <div className="flex items-center justify-around p-8 md:flex-nowrap flex-wrap">
          <div className="flex justify-center flex-col text-black my-2">
            <div className="w-[10rem] p-4 h-[10rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon icon={faCheckCircle} className="icons" />
            </div>
            <p className="text-4xl font-bold text-center my-2">10</p>
            <p className="uppercase text-center text-lg font-bold">
              Works completed
            </p>
          </div>
          <div className="flex justify-center flex-col text-black my-2">
            <div className="w-[10rem] p-4 h-[10rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon icon={faBriefcase} className="icons" />
            </div>
            <p className="text-4xl font-bold text-center my-2">3</p>
            <p className="uppercase text-center text-lg font-bold">
              years of experience
            </p>
          </div>
          <div className="flex justify-center flex-col text-black my-2">
            <div className="w-[10rem] p-4 h-[10rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon icon={faUsers} className="icons" />
            </div>
            <p className="text-4xl font-bold text-center my-2">12</p>
            <p className="uppercase text-center text-lg font-bold">
              total clients
            </p>
          </div>
          <div className="flex justify-center flex-col text-black my-2">
            <div className="w-[10rem] p-4 h-[10rem] rounded-full bg-white flex items-center justify-center">
              <FontAwesomeIcon icon={faAward} className="icons" />
            </div>
            <p className="text-4xl font-bold text-center my-2">2</p>
            <p className="uppercase text-center text-lg font-bold">
              awards won
            </p>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <h1 className="uppercase font-bold my-8 text-4xl text-center">
          portfolio
        </h1>
        <div className="flex items-center justify-center flex-wrap sm:px-8">
          <Portfolio
            image="/images/ssosupervisor.png"
            title="E-learning website"
            description="MERN stack website"
            date="17 Aug, 2023"
          />
          <Portfolio
            image="/images/ssofbloodbank.png"
            title="Blood bank website"
            description="Full-stack website"
            date="07 Aug, 2023"
          />
          <Portfolio
            image="/images/ssoffoodwebsite.png"
            title="Restaurant website"
            description="Frontend website"
            date="20 July, 2023"
          />
          <Portfolio
            image="/images/ssoftravel.png"
            title="Traveling website"
            description="Frontend website"
            date="25 July, 2023"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
