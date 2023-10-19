"use client";
import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const HomeComponent = () => {
  const [image, setImage] = React.useState("/images/imaheforportfolio.png");
  React.useEffect(() => {
    if (window.innerWidth < 769) {
      setImage("/images/image with yellow.png");
    } else {
      setImage("/images/imaheforportfolio.png");
    }
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main className="px-2 py-4 md:px-8 min-h-[91vh] md:h-[91vh] border-b-2 border-yellow-400">
      <div className="">
        <p className="text-2xl font-bold">Create Best Technology</p>
        <p className="text-4xl md:text-6xl font-bold">For Any Device</p>
      </div>
      <div className="flex mt-8 items-center justify-center flex-wrap md:flex-nowrap">
        <div className="sm:ml-8">
          <div
            className="flex md:justify-normal justify-center"
            data-aos="zoom-in"
          >
            <Image
              // src="/images/image with yellow.png"
              src={image}
              alt="my image"
              width="1000"
              height="1000"
              style={{ width: "80%", height: "80%", marginTop: ".5rem" }}
            />
          </div>
        </div>
        <div className="mt-4 w-full  " data-aos="zoom-in">
          {/* <Image
            src="/images/electronjs.png"
            alt="desktop"
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
            width="1000"
            height="1000"
          /> */}

          {/* hr-sohel */}
          <div className="text-3xl sm:text-5xl  text-black font-bold text-center">
            HR SOHEL
          </div>
          <br />
          {/* skill */}
          <div className="text-center  font-bold text-lg md:text-2xl">
            WEB AND SOFTWARE DEVELOPER
          </div>
          <div className="flex items-center justify-center gap-12 my-8">
            <Link href="https://www.facebook.com/hr.sohel.980" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                color="rgb(59 130 246)"
                className="text-2xl sm:text-4xl "
              />
            </Link>
            <Link href="#" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="rgb(59 130 246)"
                className="text-2xl sm:text-4xl "
              />
            </Link>
            <Link href="https://twitter.com/HRSohel10" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-2xl sm:text-4xl "
                color="rgb(30 48 80)"
              />
            </Link>
            <Link href="https://github.com/hrsohel" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl sm:text-4xl "
                color="#333"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              className="text-white font-bold bg-[#333] rounded-md text-sm sm:text-lg px-4 py-2"
              href="/works"
            >
              See my work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
