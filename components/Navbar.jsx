"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faCog,
  faHome,
  faInfoCircle,
  faLaptop,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const history = useRouter();
  const [show, setShow] = React.useState(false);
  const [loadershow, setLoaderShow] = React.useState(false);
  const router = usePathname();
  let previousRoute = "";
  React.useEffect(() => {
    setShow(false);
    setLoaderShow(false);
  }, []);
  const manageLoader = (value) => {
    setLoaderShow(true);
    setShow(false);
    previousRoute = value;
    if (router === previousRoute) setLoaderShow(false);
  };
  return (
    <>
      <header className="flex items-center relative md:static justify-between bg-white shadow-lg px-4 py-4">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faLaptop}
            color="rgb(250 204 21)"
            size="2xl"
            className="text-lg sm:text-2xl"
          />
          <span className="text-lg sm:text-2xl font-bold text-yellow-400">
            HRFolio
          </span>
        </div>
        <nav
          className={`hidden sm:block md:static absolute top-[108%] bg-yellow-500 md:bg-transparent ${
            show ? "left-[0%]" : "left-[-150%]"
          } md:top-0 md:left-0 `}
        >
          <ul className="flex items-center bg-yellow-500 md:bg-transparent justify-center flex-col md:flex-row text-xl font-semibold">
            <li className={`mx-2 ${router === "/" ? "menu-list" : ""}`}>
              <Link onClick={() => manageLoader("/")} href="/">
                Home
              </Link>
            </li>
            <li className={`mx-2 ${router === "/about" ? "menu-list" : ""}`}>
              <Link onClick={() => manageLoader("/about")} href="/about">
                About
              </Link>
            </li>
            <li className={`mx-2 ${router === "/services" ? "menu-list" : ""}`}>
              <Link onClick={() => manageLoader("/services")} href="/services">
                Services
              </Link>
            </li>
            <li className={`mx-2 ${router === "/works" ? "menu-list" : ""}`}>
              <Link onClick={() => manageLoader("/works")} href="/works">
                Work
              </Link>
            </li>
            <li className={`mx-2 ${router === "/contact" ? "menu-list" : ""}`}>
              <Link onClick={() => manageLoader("/contact")} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="bars md:hidden block cursor-pointer border-2 border-yellow-500 p-2 rounded-md"
        >
          <FontAwesomeIcon
            icon={show ? faTimes : faBars}
            size="xl"
            color="#333"
            className={show ? "bars" : "fa-times"}
          />
        </div>
      </header>
      {loadershow ? <Loader /> : <></>}
      <div className="sm:hidden block z-40 fixed left-0 bottom-0 right-0 bg-yellow-600">
        <ul className="px-2 py-2 flex items-center justify-between">
          <li className="flex items-center justify-center flex-col">
            <Link href="/">
              <>
                <FontAwesomeIcon
                  icon={faHome}
                  size="lg"
                  color={`${router === "/" ? "#333" : "#fff"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/" ? "text-[#333]" : "text-white"
              }`}
            >
              Home
            </span>
          </li>
          <li className="flex items-center justify-center flex-col">
            <Link href="/about">
              <>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size="xl"
                  color={`${router === "/about" ? "#333" : "#fff"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/about" ? "text-[#333]" : "text-white"
              }`}
            >
              About
            </span>
          </li>
          <li className="flex items-center justify-center flex-col">
            <Link href="/services">
              <>
                <FontAwesomeIcon
                  icon={faCog}
                  size="xl"
                  color={`${router === "/services" ? "#333" : "#fff"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/services" ? "text-[#333]" : "text-white"
              }`}
            >
              Services
            </span>
          </li>
          <li className="flex items-center justify-center flex-col">
            <Link href="/works">
              <>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  size="xl"
                  color={`${router === "/works" ? "#333" : "#fff"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/works" ? "text-[#333]" : "text-white"
              }`}
            >
              Work
            </span>
          </li>
          <li className="flex items-center justify-center flex-col">
            <Link href="/contact">
              <>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  color={`${router === "/contact" ? "#333" : "#fff"}`}
                />
              </>
            </Link>
            <span
              className={`block font-semibold ${
                router === "/contact" ? "text-[#333]" : "text-white"
              } `}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
