"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddWork = () => {
  const router = useRouter();
  const [cookie, setCookie] = React.useState("");
  React.useEffect(() => {
    axios.get("/api/get-cookie").then(async (res) => {
      setCookie(res?.data?.cookie);
    });
  }, []);
  return (
    <>
      {cookie ? (
        <div
          onClick={() => router.push("/add-work")}
          className="sm:w-[15rem]
md:h-[28rem] w-[10.5rem] md:w-[20rem] h-[20rem] sm:h-[15rem] rounded-md cursor-pointer"
        >
          <div className="w-full h-full bg-slate-100 hover:bg-slate-200 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} className="text-xl sm:text-4xl" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddWork;
