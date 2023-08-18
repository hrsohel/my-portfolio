"use client";
import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  const [image, setImage] = React.useState("/images/imaheforportfolio.png");
  React.useEffect(() => {
    if (window.innerWidth < 769) {
      setImage("/images/image with yellow.png");
    } else {
      setImage("/images/imaheforportfolio.png");
    }
  }, []);
  return (
    <main className="px-2 md:px-8 min-h-[90vh] ">
      <div>
        <p className="text-2xl font-bold">Create Best Technology</p>
        <p className="text-4xl md:text-6xl font-bold">For Any Device</p>
      </div>
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="">
          <div className="flex md:justify-normal justify-center">
            <Image
              // src="/images/image with yellow.png"
              src={image}
              alt="my image"
              width="1000"
              height="1000"
              style={{ width: "80%", height: "80%", marginTop: ".5rem" }}
            />
          </div>
          <div className="text-3xl sm:text-5xl hr-sohel text-black font-semibold text-center">
            HR SOHEL
          </div>
          <br />
          <div className="text-center skill font-bold text-lg md:text-xl">
            WEB AND SOFTWARE DEVELOPER
          </div>
        </div>
        <div className="mt-4 w-full h-full flex justify-center md:justify-end">
          <Image
            src="/images/electronjs.png"
            alt="desktop"
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
            width="1000"
            height="1000"
          />
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
