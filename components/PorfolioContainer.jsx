"use client";
import axios from "axios";
import React from "react";
import AddWork from "./AddWork";
import Portfolio from "./Portfolio";
import Image from "next/image";
import useSWR from "swr";

const fetcher = async () => {
  const { data } = await axios.get("/api/get-work");
  return data;
};

const PorfolioContainer = () => {
  const [loading, setLoading] = React.useState(false);
  const [update, setUpdate] = React.useState(true);
  const [cookie, setCookie] = React.useState("");
  const { data, isLoading } = useSWR("/api/get-work", fetcher, {
    refreshInterval: 1000 * 3600,
  });
  React.useEffect(() => {
    const getWork = async () => {
      const res = await axios.get(`/api/get-cookie`);
      setCookie(res?.data?.cookie);
    };
    getWork();
  }, [update]);
  return (
    <>
      <div className="flex items-stretch justify-center gap-2 flex-wrap p-0 sm:px-8">
        {isLoading ? (
          <div className=" flex items-center justify-center">
            <Image
              src="/images/loader.svg"
              width="200"
              height="200"
              alt="Loader"
            />
          </div>
        ) : (
          data?.works?.map((item) => {
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
