"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faL, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import ProjectInfo from "./ProjectInfo";
import ProjectDetails from "./ProjectDetails";

const PortfolioDetails = () => {
  const router = usePathname();
  const params = router.split("/")[2];
  const [loading, setLoading] = React.useState(true);
  const [imageLoading, setImageLoading] = React.useState(false);
  const [showImageUpdate, setShowImageUpdate] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [image, setImage] = React.useState("");
  const [cookie, setCookie] = React.useState("");
  const [update, setUpdate] = React.useState(true);
  const addImage = async (e) => {
    const formData = new FormData();
    formData.append("add-image", e.target.files[0]);
    formData.append("_id", data._id);
    const res = await axios.post(`/api/add-carousel-image`, formData);
    if (res?.data?.error) alert("Failed to delete image");
    setShowImageUpdate(false);
    setUpdate(!update);
  };
  React.useEffect(() => {
    setImageLoading(true);
    setLoading(true);
    (async () => {
      const [cookie, data] = await Promise.all([
        axios.get(`/api/get-cookie`),
        axios.get(`/api/get-work/${params}`),
      ]);
      setCookie(cookie?.data?.cookie);
      setData(data?.data?.message[0]);
      setImage(data?.data?.message[0]?.carouselImages[0]);
    })();
    setLoading(false);
    setImageLoading(false);
  }, [params, update]);
  const deleteImage = async (image) => {
    const formData = new FormData();
    formData.append("image_id", image._id);
    formData.append("_id", data?._id);
    const res = await axios.put(`/api/add-carousel-image`, formData);
    if (res?.data?.error) alert("Failed to delete image");
    setShowImageUpdate(false);
    setUpdate(!update);
  };
  const updateImage = async (e) => {
    const formData = new FormData();
    formData.append("update-image", e.target.files[0]);
    formData.append("_id", data?._id);
    formData.append("old-image", image._id);
    const res = await axios.patch(`/api/add-carousel-image`, formData);
    if (res?.data?.error) alert("Failed to update image");
    setShowImageUpdate(false);
    setUpdate(!update);
  };
  return (
    <>
      {loading ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            <Image
              src="/images/loader.svg"
              width="200"
              height="200"
              alt="Loader"
            />
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[50vh]  bg-yellow-300 flex items-center justify-center">
            <h1 className="text-center uppercase text-xl text-white font-semibold sm:text-2xl md:text-4xl">
              Portfolio details
            </h1>
          </div>
          <div className="flex items-start px-2 sm:px-4 bg-slate-200 py-4 justify-around flex-wrap md:flex-nowrap overflow-hidden">
            <div className="md:w-[40rem] w-full relative">
              {showImageUpdate && cookie ? (
                <>
                  <div className="w-full h-[18rem] bg-white relative sm:h-[25rem]  flex items-center justify-center">
                    <div className="text-yellow-500 absolute top-4 right-4 cursor-pointer">
                      <FontAwesomeIcon
                        onClick={() => setShowImageUpdate(false)}
                        icon={faTimes}
                        size="xl"
                      />
                    </div>
                    {data?.carouselImages.length ? (
                      <div className="p-2 cursor-pointer rounded-full bg-slate-200 text-lg text-yellow-500">
                        <label htmlFor="update-image">
                          <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                        </label>
                        <input
                          onChange={updateImage}
                          type="file"
                          name="update-image"
                          id="update-image"
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="p-2 cursor-pointer mx-4 rounded-full bg-slate-200 text-lg text-yellow-500">
                      <label htmlFor="add-image">
                        <FontAwesomeIcon icon={faPlus} size="xl" />
                      </label>
                      <input
                        onChange={addImage}
                        className="hidden"
                        type="file"
                        name="add-image"
                        id="add-image"
                      />
                    </div>
                    {data?.carouselImages.length ? (
                      <div className="p-2 cursor-pointer px-3 rounded-full bg-slate-200 text-lg text-yellow-500">
                        <FontAwesomeIcon
                          onClick={() => deleteImage(image)}
                          icon={faTimes}
                          size="xl"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {!imageLoading ? (
                    <Image
                      onClick={() => setShowImageUpdate(true)}
                      src={`${image ? image?.url : "/images/pxfuel.jpg"}`}
                      width="1000"
                      height="1000"
                      className="w-full h-[18rem] sm:h-[25rem] object-cover"
                      alt="sub image"
                    />
                  ) : (
                    <>
                      <h1 className="text-lg font-semibold text-center">
                        Loading ...
                      </h1>
                    </>
                  )}
                </>
              )}

              <div className="flex items-center justify-center my-4">
                {data?.carouselImages?.map((value, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setImage(data?.carouselImages[index])}
                      className={`w-[1rem] h-[1rem] cursor-pointer ${
                        data?.carouselImages.indexOf(value) ===
                        data?.carouselImages.indexOf(image)
                          ? "bg-yellow-300"
                          : "bg-white"
                      } rounded-full mx-2`}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="md:ml-4 ml-0 md:w-[30rem]">
              <ProjectInfo setUpdate={setUpdate} update={update} data={data} />
              <ProjectDetails
                setUpdate={setUpdate}
                update={update}
                data={data}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioDetails;
