"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Loader from "./Loader";
import moment from "moment";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = ({
  title,
  category,
  image,
  date,
  id,
  setUpdate,
  update,
  images,
  cookie,
}) => {
  const [showLoader, setShowLoader] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const updateImage = async (e) => {
    setLoading(true);
    const fromData = new FormData();
    fromData.append("new-image", e.target.files[0]);
    fromData.append("old-image", image);
    fromData.append("_id", id);
    await axios.post(`/api/change-portfolio-image`, fromData);
    setLoading(false);
    setUpdate(!update);
  };
  const deleteImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("_id", id);
    formData.append("image", image.public_id);
    const res = await axios.patch(`/api/change-portfolio-image`, formData);
    if (res?.data?.error) alert("Failed to delete!");
    setLoading(true);
    setUpdate(!update);
  };
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        style={{ boxShadow: "0 0 .3rem #333" }}
        // h-[21rem]
        className=" w-[10.5rem] sm:w-[15rem]  sm:h-[28rem] md:w-[20rem] lg:w-[25rem] rounded-md"
        data-aos="zoom-in"
      >
        <div className="overflow-hidden relative rounded-t-md">
          <Image
            src={image?.url}
            width="1000"
            height="1000"
            alt="supersolution"
            className="portfolio-image rounded-t-md w-full h-[7rem] sm:h-[12rem] md:h-[15rem] object-contain object-top"
          />
          {cookie ? (
            <>
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <Image
                    src="/images/loader.svg"
                    width="30"
                    height="30"
                    alt="Loader"
                  />
                </div>
              ) : (
                <>
                  <>
                    <label
                      htmlFor={id}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                    >
                      <FontAwesomeIcon
                        icon={faPenSquare}
                        className="text-yellow-500 text-3xl"
                      />
                    </label>
                    <input
                      onChange={updateImage}
                      className="hidden"
                      type="file"
                      id={id}
                    />
                  </>
                  <span
                    onClick={deleteImage}
                    className="absolute top-2 right-2 cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-yellow-500 text-2xl"
                    />
                  </span>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        {showLoader ? <Loader /> : <></>}
        {/* flex items-center justify-between */}
        <div className=" p-2  sm:p-4 flex flex-col">
          <div>
            <h1 className="my-1 text-[1rem] sm:text-xl font-bold">{title}</h1>
            <p className="text-sm sm:text-lg">
              Category:
              <span className="text-yellow-600  ml-2">{category}</span>
            </p>
            <p className="text-sm sm:text-lg my-1">
              Date:
              <span className="text-[#333] ml-2">
                {moment(date).format("DD MMM, YYYY")}
              </span>
            </p>
          </div>
          <Link
            className="w-[80%] mx-auto my-2 px-2 py-1 text-center border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white text-yellow-500"
            onClick={() => setShowLoader(true)}
            href={`/works/${id}`}
          >
            See details
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Portfolio);
