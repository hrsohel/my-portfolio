import React from "react";
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

const GetinTouch = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl my-4 font-semibold">Get in touch</h1>
      <p className="text-[1rem] md:text-xl my-8">
        Feel free to contact me if you have any questions or queries. I respond
        quickly and am ready to get started on your desirable website or
        software. You can find in email, phone or any social media platform. Let
        us make something remarkable together.
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
        <Link className="mr-4" href="#">
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
    </>
  );
};

export default GetinTouch;
