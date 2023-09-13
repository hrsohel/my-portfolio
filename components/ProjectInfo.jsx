"use client";
import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const ProjectInfo = ({ data, setUpdate, update }) => {
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [cookie, setCookie] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    axios.get("/api/get-cookie").then((res) => {
      setCookie(res?.data?.cookie);
    });
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      const dataToServer = new FormData(e.target);
      const { category, client, date, url, id, github } = Object.fromEntries(
        dataToServer.entries()
      );
      let dateValue;
      if (!date) dateValue = data.date;
      else dateValue = date;
      formData.append("category", category);
      formData.append("client", client);
      formData.append("date", dateValue);
      formData.append("url", url);
      formData.append("github", github);
      formData.append("_id", id);
      await axios.post("/api/update-work", formData);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
      setUpdate(!update);
      setShowUpdate(false);
    }
  };
  return (
    <>
      {showUpdate ? (
        <>
          <div className="w-full p-4 bg-white relative">
            <h1 className="text-lg sm:text-2xl font-semibold">
              Update project information
            </h1>
            {loading ? (
              <>
                <div className="flex p-4 items-center justify-center">
                  <Image
                    src="/images/loader.svg"
                    width="80"
                    height="80"
                    alt="Loader"
                  />
                </div>
              </>
            ) : (
              <>
                <form onSubmit={submit} method="post" className="p-4 bg-white">
                  <input defaultValue={data._id} type="hidden" name="id" />
                  <input
                    className="p-1 text-sm my-2 sm:text-lg w-full outline-none border-2 focus:border-yellow-500"
                    type="text"
                    name="category"
                    defaultValue={data.category}
                  />
                  <input
                    className="p-1 text-sm my-2 sm:text-lg w-full outline-none border-2 focus:border-yellow-500"
                    type="text"
                    name="client"
                    defaultValue={data.client}
                  />
                  <input
                    className="p-1 text-sm my-2 sm:text-lg w-full outline-none border-2 focus:border-yellow-500"
                    type="date"
                    name="date"
                    defaultValue={moment(data.date).format("MM/DD/YYYY")}
                  />
                  <input
                    className="p-1 text-sm my-2 sm:text-lg w-full outline-none border-2 focus:border-yellow-500"
                    type="text"
                    name="url"
                    defaultValue={data.url}
                  />
                  <input
                    className="p-1 text-sm my-2 sm:text-lg w-full outline-none border-2 focus:border-yellow-500"
                    type="text"
                    name="github"
                    defaultValue={data.github}
                  />
                  <button className="px-4 py-2 mx-2 bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-300 hover:border-yellow-500 border2 my-2">
                    Update
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowUpdate(false);
                    }}
                    className="px-4 py-2 mx-2 bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-300 hover:border-yellow-500 border2 my-2"
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="p-4 bg-white mt-4 md:mt-0 relative w-full mx-auto ">
            {cookie ? (
              <>
                <span
                  onClick={() => setShowUpdate(true)}
                  className="p-1 bg-slate-200 absolute top-4 right-4 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faPenSquare}
                    size="2x"
                    color="rgb(250 204 21)"
                  />
                </span>
              </>
            ) : (
              <></>
            )}
            <h1 className="text-lg sm:text-2xl font-semibold">
              Project information
            </h1>
            <p className="text-sm sm:text-lg text-[#333] my-3">
              <span className="font-semibold">Category: </span> {data.category}
            </p>
            <p className="text-sm sm:text-lg text-[#333] my-3">
              <span className="font-semibold">Client: </span> {data.client}
            </p>
            <p className="text-sm sm:text-lg text-[#333] my-3">
              <span className="font-semibold">Project date: </span>{" "}
              {moment(data.date).format("DD MMM, YYYY")}
            </p>
            <p className="text-sm sm:text-lg text-[#333] my-3">
              <span className="font-semibold">Project URL: </span>{" "}
              {data.url ? <Link href={`${data.url}`}>{data.url}</Link> : "N/A"}
            </p>
            <p className="text-sm sm:text-lg text-[#333] my-3">
              <span className="font-semibold">Github URL: </span>{" "}
              <Link href={`${data.github}`}>{data.github}</Link>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(ProjectInfo);
