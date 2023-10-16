"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCog,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

const BootomNav = () => {
  const [loader, setLoader] = React.useState(false);
  const router = usePathname();
  const showLoader = () => {
    setLoader(true);
  };
  React.useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <>
      <div
        style={{ boxShadow: "0 0 .3rem #333" }}
        className="sm:hidden block z-40 fixed left-0 bottom-0 right-0 bg-white"
      >
        {loader ? <Loader /> : <></>}
        <ul className="px-2 py-[.40rem] flex items-center justify-between">
          <li className="flex items-center justify-center flex-col">
            <Link onClick={showLoader} href="/">
              <>
                <FontAwesomeIcon
                  icon={faHome}
                  size="lg"
                  color={`${router === "/" ? "rgb(234 179 8)" : "#333"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/" ? "text-yellow-500" : "text-[#333]"
              } text-sm`}
            >
              Home
            </span>
          </li>
          <li className="flex items-center justify-center flex-col">
            <Link onClick={showLoader} href="/about">
              <>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size="xl"
                  color={`${router === "/about" ? "rgb(234 179 8)" : "#333"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/about" ? "text-yellow-500" : "text-[#333]"
              } text-sm`}
            >
              About
            </span>
          </li>
          {/* <li className="flex items-center justify-center flex-col">
            <Link onClick={showLoader} href="/services">
              <>
                <FontAwesomeIcon
                  icon={faCog}
                  size="xl"
                  color={`${
                    router === "/services" ? "rgb(234 179 8)" : "#333"
                  }`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/services" ? "text-yellow-500" : "text-[#333]"
              } text-sm`}
            >
              Services
            </span>
          </li> */}
          <li className="flex items-center justify-center flex-col">
            <Link onClick={showLoader} href="/works">
              <>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  size="xl"
                  color={`${
                    router === "/works" || router === "/add-work"
                      ? "rgb(234 179 8)"
                      : "#333"
                  }`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/works" ? "text-yellow-500" : "text-[#333]"
              } text-sm`}
            >
              Work
            </span>
          </li>
          <li className="flex items-center justify-center flex-col">
            <Link onClick={showLoader} href="/contact">
              <>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  color={`${router === "/contact" ? "rgb(234 179 8)" : "#333"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/contact" ? "text-yellow-500" : "text-[#333]"
              } text-sm`}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BootomNav;
