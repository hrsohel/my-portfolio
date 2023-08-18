import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
            <form>
              <input
                type="text"
                className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
                placeholder="Your name"
                required={true}
              />
              <input
                type="email"
                className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
                placeholder="Your email"
                required={true}
              />
              <input
                type="text"
                className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
                placeholder="Subject"
                required={true}
              />
              <textarea
                className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
                cols="30"
                rows="5"
                required={true}
                placeholder="Message"
              ></textarea>
              <button className="px-4 py-2 text-lg sm:text-xl  bg-yellow-500 text-white hover:bg-yellow-400 hover:border-yellow-200 border-4 border-transparent">
                Send message
              </button>
            </form>
          </div>
          <div className="m-2 md:w-[50%]">
            <h1 className="text-2xl sm:text-4xl my-4 font-semibold">
              Get in touch
            </h1>
            <p className="text-[1rem] md:text-xl my-8">
              Feel free to contact me if you have any questions or queries. I
              respond quickly and am ready to get started on your desirable
              website or software. You can find in email, phone or any social
              media platform. Let us make something remarkable together.
            </p>
            <div>
              <p className="my-3">
                <span className="mr-4">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    color="rgb(250 204 21)"
                  />
                </span>
                <span className="text-[1rem] md:text-[1.2rem]">
                  Chattogram, Bangladesh
                </span>
              </p>
              <p className="my-3">
                <span className="mr-4">
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    size="xl"
                    color="rgb(250 204 21)"
                  />
                </span>
                <span className="text-[1rem] md:text-[1.2rem]">
                  (+880) 1690130452
                </span>
              </p>
              <p className="my-3">
                <span className="mr-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    color="rgb(250 204 21)"
                  />
                </span>
                <span className="text-[1rem] md:text-[1.2rem]">
                  hrsohel679@gmail.com
                </span>
              </p>
            </div>
            <div className="my-8">
              <Link
                className="mr-4"
                href="https://www.facebook.com/hr.sohel.980"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2xl"
                  color="rgb(59 130 246)"
                />
              </Link>
              <Link
                className="mr-4"
                href="https://www.linkedin.com/in/mohammad-harunur-rashid-057857287/"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  color="rgb(59 130 246)"
                />
              </Link>
              <Link
                className="mr-4"
                href="https://twitter.com/HRSohel10"
                target="_blank"
              >
                <FontAwesomeIcon icon={faXTwitter} size="2xl" color="black" />
              </Link>
              <Link
                className="mr-4"
                href="https://github.com/hrsohel"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" color="black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
