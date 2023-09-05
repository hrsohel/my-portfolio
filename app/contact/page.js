import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GetinTouch from "@/components/GetinTouch";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center about mx-2 rounded-md my-4 justify-center md:mx-auto md:w-[90%] p-4 md:p-8 ">
        <div className="flex items-start justify-center flex-wrap md:flex-nowrap">
          <div className="m-2 md:w-[50%]">
            <h1 className="text-2xl sm:text-4xl my-4 font-semibold">
              Send Message
            </h1>
            <ContactForm />
          </div>
          <div className="m-2 md:w-[50%]">
            <GetinTouch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
