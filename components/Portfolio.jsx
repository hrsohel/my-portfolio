import React from "react";
import Image from "next/image";

const Portfolio = ({ title, description, image, date }) => {
  return (
    <>
      <div
        style={{ boxShadow: "0 0 .3rem #333" }}
        className="md:w-[20rem] lg:w-[25rem] rounded-md m-4"
      >
        <div className="overflow-hidden">
          <Image
            src={image}
            width="1000"
            height="1000"
            alt="supersolution"
            className="portfolio-image w-full h-[12rem] md:h-[15rem] object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="my-3 text-xl font-bold">{title}</h1>
          <p>
            <span className="text-yellow-600 text-sm sm:text-lg">
              {description}
            </span>{" "}
            / <span className="text-[#333] text-sm sm:text-lg">{date}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
