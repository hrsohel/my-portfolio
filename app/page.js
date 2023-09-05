"use client";

import HomeComponent from "@/components/HomeComponent";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <Footer />
    </>
  );
};

export default page;
