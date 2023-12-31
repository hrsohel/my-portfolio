"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Link from "next/link";

const AboutImagePart = () => {
  const [cookie, setCookie] = React.useState("");
  const [image, setImage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        const [cookie, image] = await Promise.all([
          axios.get(`/api/get-cookie`),
          axios.get(`/api/user`),
        ]);
        setCookie(cookie?.data?.cookie);
        setImage(image?.data?.user[0]?.aboutImage?.url);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [openModel]);
  const changeImage = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    formData.append("cookie", cookie);
    await axios.post(`/api/get-cookie`, formData);
    setLoading(false);
    setOpenModel(false);
  };
  return (
    <>
      <div className="flex items-start sm:items-center justify-center flex-wrap sm:flex-nowrap">
        {!openModel ? (
          <Image
            onClick={() => {
              if (cookie) setOpenModel(true);
            }}
            src={image ? image : "/images/loader.svg"}
            alt="HR Sohel's image"
            style={{ objectFit: "cover" }}
            width="1000"
            height="1000"
            className="rounded-md mb-2 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px]"
          />
        ) : (
          <div className="w-[10rem] h-[10rem] relative bg-yellow-500">
            {loading ? (
              <>
                <div className="flex items-center justify-center pt-8">
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
                <form encType="martipart/form-data">
                  <label
                    className="absolute left-0 w-full top-[50%] text-white text-xl cursor-pointer text-center bg-[#333] px-2 py-1"
                    htmlFor="image"
                  >
                    Upload image
                  </label>
                  <input
                    onChange={changeImage}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </form>
                <span
                  onClick={() => setOpenModel(false)}
                  className="absolute top-4 right-4"
                >
                  <FontAwesomeIcon icon={faTimes} size="xl" color="white" />
                </span>
              </>
            )}
          </div>
        )}

        <div className="ml-2 sm:ml-8 font-semibold sm:text-lg text-sm">
          <div className="mb-2">
            Name: <span className="font-normal">Mohammad Harunur Rashid</span>
          </div>
          <div className="mb-2">
            Profile:{" "}
            <span className="font-normal">
              Full-stack, Mobile and Desktop application developer
            </span>
          </div>
          <div className="mb-2">
            Address: <span className="font-normal">Chattogram, Bangladesh</span>
          </div>
          <div className="mb-2">
            Email:{" "}
            <Link href="mailto:hrsohel679@gmail.com" className="font-normal">
              hrsohel679@gmail.com
            </Link>
          </div>
          <div className="mb-0">
            Phone: <span className="font-normal">(+880) 1690130452</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutImagePart;
