import Image from "next/image";
import React from "react";

const AboutImage = () => {
  return (
    <>
      <div className="flex my-8 items-center justify-center md:flex-nowrap flex-wrap">
        <div className="w-[20rem] h-[30rem]">
          <Image
            src="/images\aboutImage.jpeg"
            alt="about image"
            width="1000"
            height="1000"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </>
  );
};

export default AboutImage;
