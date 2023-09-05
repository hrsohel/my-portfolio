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

const Portfolio = ({
  title,
  category,
  image,
  date,
  id,
  setUpdate,
  update,
  images,
}) => {
  const [showLoader, setShowLoader] = React.useState(false);
  const [cookie, setCookie] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    axios.get(`/api/get-cookie`).then((res) => {
      setCookie(res?.data?.cookie);
    });
  }, []);
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
    formData.append("image", image);
    formData.append("images", images);
    const res = await axios.patch(`/api/change-portfolio-image`, formData);
    if (res?.data?.error) alert("Failed to delete!");
    setLoading(true);
    setUpdate(!update);
  };
  return (
    <>
      <div
        style={{ boxShadow: "0 0 .3rem #333" }}
        className="md:w-[20rem] lg:w-[25rem] rounded-md m-4"
      >
        <div className="overflow-hidden relative">
          <Image
            src={`/uploads/${image}`}
            width="1000"
            height="1000"
            alt="supersolution"
            className="portfolio-image w-full h-[12rem] md:h-[15rem] object-cover"
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
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="my-3 text-xl font-bold">{title}</h1>
            <p>
              <span className="text-yellow-600 text-sm sm:text-lg">
                {category}
              </span>{" "}
              /{" "}
              <span className="text-[#333] text-sm sm:text-lg">
                {moment(date).format("DD MMM, YYYY")}
              </span>
            </p>
          </div>
          <div>
            <Link
              className="py-2 px-3 border-yellow-500 border-2 rounded-full"
              onClick={() => setShowLoader(true)}
              href={`/works/${id}`}
            >
              <FontAwesomeIcon
                icon={faPlus}
                color="rgb(250 204 21)"
                className="text-sm sm:text-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Portfolio);
