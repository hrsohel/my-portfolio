import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import React from "react";
import { data } from "@/controllers/data";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl font-bold py-4">SERVICES</h1>
      <p className="text-center text-lg mb-4">These are the services I serve</p>
      <div className="flex items-start justify-center flex-wrap">
        {data.map((item) => {
          return (
            <ServiceCard
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default page;
