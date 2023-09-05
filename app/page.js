"use client";

import HomeComponent from "@/components/HomeComponent";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const page = () => {
  const res = fetch("/api").then(() => console.log("data"));
  return (
    <>
      <Navbar />
      <HomeComponent />
      <Footer />
    </>
  );
};

export default page;
