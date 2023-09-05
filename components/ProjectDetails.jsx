"use client";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import axios from "axios";

const ProjectDetails = ({ data, setUpdate, update }) => {
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [cookie, setCookie] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    // getCookie().then((res) => {
    //   setCookie(JSON.parse(res).cookieValue);
    // });
    axios.get("/api/get-cookie").then((res) => {
      setCookie(res?.data?.cookie);
    });
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      const data = new FormData(e.target);
      const { desc, _id } = Object.fromEntries(data.entries());
      formData.append("_id", _id);
      formData.append("desc", desc);
      await axios.post("/api/update-desc", formData);
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
          <div className="p-4 bg-white mt-4 w-full">
            <h1 className="text-lg sm:text-2xl font-semibold">
              Update project details
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
                <form
                  onSubmit={submit}
                  method="post"
                  className="p-2 sm:p-4 bg-white"
                >
                  <input type="hidden" name="_id" defaultValue={data._id} />
                  <textarea
                    className="p-1 text-sm my-2 sm:text-lg w-full outline-none border-2 focus:border-yellow-500"
                    name="desc"
                    cols="30"
                    rows="5"
                    defaultValue={data.desc}
                  ></textarea>
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
          <div className="p-4 bg-white mt-4 relative w-full">
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
              Project detail
            </h1>
            <p className="text-sm md:text-lg mt-3">{data.desc}</p>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(ProjectDetails);
