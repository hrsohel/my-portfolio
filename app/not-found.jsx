import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const notFound = () => {
  return (
    <>
      <Navbar />
      <section className="h-[90vh] flex items-center justify-center">
        <h1 className="text-2xl text-yellow-500 font-semibold">
          404 |{" "}
          <span className="text-lg font-normal">Page could not be found.</span>
        </h1>
      </section>

      <Footer />
    </>
  );
};

export default notFound;
