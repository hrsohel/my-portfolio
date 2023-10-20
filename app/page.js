"use client";

import HomeComponent from "@/components/HomeComponent";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { data } from "@/controllers/data";
import { skills } from "@/controllers/skill";
import Skills from "@/components/Skills";

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
      <div className="flex items-start  justify-center sm:gap-4 gap-2 my-4 flex-wrap">
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
      <div className="mb-4 mt-20">
        <div className="text-center flex items-center justify-center text-lg sm:text-2xl font-bold">
          <h1
            style={{ letterSpacing: "0" }}
            className="bg-yellow-200 text-yellow-500 uppercase px-4 py-1 rounded-md"
          >
            skills
          </h1>
        </div>
        <br />
        <div className="flex items-start justify-center gap-2 sm:gap-4 flex-wrap">
          {skills.map((item) => {
            return <Skills key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
