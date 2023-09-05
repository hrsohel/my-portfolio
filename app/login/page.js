import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "@/controllers/coonectMongo";
import Login from "@/components/Login";

const page = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default page;
