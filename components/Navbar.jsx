"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaptop, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

const Navbar = () => {
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
          className={`md:static absolute top-[108%] bg-yellow-500 md:bg-transparent ${
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
          className="md:hidden block cursor-pointer border-2 border-yellow-500 p-2 rounded-md"
        >
          <FontAwesomeIcon
            icon={show ? faTimes : faBars}
            size="xl"
            color="black"
            className={show ? "bars" : "fa-times"}
          />
        </div>
      </header>
      {loadershow ? <Loader /> : <></>}
    </>
  );
};

export default Navbar;
