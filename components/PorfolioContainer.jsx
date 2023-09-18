"use client";
import axios from "axios";
import React from "react";
import AddWork from "./AddWork";
import Portfolio from "./Portfolio";
import Image from "next/image";

const PorfolioContainer = () => {
  const [work, setWork] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [update, setUpdate] = React.useState(true);
  const [cookie, setCookie] = React.useState("");
  React.useEffect(() => {
    setLoading(true);
    const getWork = async () => {
      const [data, res] = await Promise.all([
        axios.get(`/api/get-work`),
        axios.get(`/api/get-cookie`),
      ]);
      setCookie(res?.data?.cookie);
      setWork(data?.data?.works);
      setLoading(false);
    };
    getWork();
  }, [update]);
  return (
    <>
      <div className="flex items-center justify-center flex-wrap sm:px-8">
        {loading ? (
          <div className=" flex items-center justify-center">
            <Image
              src="/images/loader.svg"
              width="200"
              height="200"
              alt="Loader"
            />
          </div>
        ) : (
          work?.map((item) => {
            return (
              <Portfolio
                key={item._id}
                image={item.image}
                title={item.title}
                category={item.category}
                date={item.date}
                id={item._id}
                github={item.github}
                setUpdate={setUpdate}
                images={item.carouselImages}
                update={update}
                cookie={cookie}
              />
            );
          })
        )}
        <AddWork />
      </div>
    </>
  );
};

export default PorfolioContainer;
