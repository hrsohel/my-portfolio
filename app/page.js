"use client";

import HomeComponent from "@/components/HomeComponent";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { data } from "@/controllers/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <div className="text-center my-4 text-lg sm:text-2xl md:text-4xl font-bold py-4">
        {/* SERVICES */}
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          S
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          E
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          R
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          V
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          I
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          C
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          E
        </span>
        <span className="px-[0.4rem] sm:px-3 mx-[0.1rem] sm:mx-1 rounded-md bg-yellow-200 text-yellow-500">
          S
        </span>
      </div>
      {/* <p className="text-center text-[1rem] sm:text-lg mb-4">
        These are the services I serve
      </p> */}
      <div className="flex items-start justify-center flex-wrap">
        {data.map((item) => {
          return (
            <ServiceCard
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          );
        })}
      </div>
      <div className="text-center flex items-center justify-center my-4 text-lg sm:text-2xl  font-bold py-4">
        <h1
          style={{ letterSpacing: "5px" }}
          className="bg-yellow-200 text-yellow-500 uppercase px-4 py-1 rounded-md"
        >
          connect with me
        </h1>
      </div>
      <div className="flex items-center justify-center gap-12 mb-8">
        <Link href="https://www.facebook.com/hr.sohel.980" target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            color="rgb(59 130 246)"
            className="text-2xl sm:text-4xl "
          />
        </Link>
        <Link href="#" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            color="rgb(59 130 246)"
            className="text-2xl sm:text-4xl "
          />
        </Link>
        <Link href="https://twitter.com/HRSohel10" target="_blank">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-2xl sm:text-4xl "
            color="rgb(30 48 80)"
          />
        </Link>
        <Link href="https://github.com/hrsohel" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl sm:text-4xl "
            color="#333"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default page;
