"use client";
import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <>
      <div className="h-[.3rem] bg-yellow-700 line-loader"></div>
      {/* <div className="min-h-screen flex items-center justify-center">
        <Image src="/images/loader.svg" width="200" height="200" alt="Loader" />
      </div> */}
    </>
  );
};

export default Loader;
