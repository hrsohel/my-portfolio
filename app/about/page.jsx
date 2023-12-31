import Navbar from "@/components/Navbar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import AboutImagePart from "@/components/AboutImagePart";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" my-4 mx-2 md:mx-auto md:w-[90%] lg:w-[95%] rounded-md about flex items-center justify-center p-4">
        <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-4">
          <div className="lg:w-[50%]">
            <AboutImagePart />
            {/* <div className="my-8">
              <div className="text-center flex items-center justify-center my-4 text-lg sm:text-2xl font-bold py-4">
                <h1
                  style={{ letterSpacing: "0" }}
                  className="bg-yellow-200 text-yellow-500 uppercase px-4 py-1 rounded-md"
                >
                  interest
                </h1>
              </div>
              <ul
                style={{ listStyle: "square" }}
                className="text-sm md:text-lg"
              >
                <li className="ml-8 my-2">Problem solving</li>
                <li className="ml-8 my-2">
                  Web technology (currently working on Machine Learning models)
                </li>
                <li className="ml-8 my-2">Cricket</li>
                <li className="ml-8 my-2">Cooking</li>
                <li className="ml-8 my-2">Reading</li>
              </ul>
            </div> */}
          </div>
          {/* md:w-[40rem] w-full md:ml-4 */}
          <div className="md:w-[50%]">
            <div className="text-center flex items-center mb-4 justify-center text-lg sm:text-2xl font-bold">
              <h1
                style={{ letterSpacing: "0" }}
                className="bg-yellow-200 text-yellow-500 uppercase px-4 py-1 rounded-md"
              >
                about me
              </h1>
            </div>
            <div className="text-sm sm:text-lg font-sarif">
              <article>
                I am an accomplished web and software developer with a strong
                background in front-end and back-end technologies. Proficient in
                a variety of programming languages, including HTML, CSS,
                JavaScript, React.js, Node.js, React Native, Electron.js, MySQL,
                Mongo DB and much more, I excel in creating responsive web
                applications and robust software solutions. My commitment to
                staying updated with industry trends, combined with effective
                communication and collaboration skills, allows me to deliver
                high-quality projects on time. With a passion for
                problem-solving and a dedication to clean code and agile
                methodologies, I am ready to contribute my expertise to your
                team.
              </article>
            </div>
            <div className="my-8">
              <div className="text-center flex items-center justify-center text-lg sm:text-2xl font-bold">
                <h1
                  style={{ letterSpacing: "0" }}
                  className="bg-yellow-200 text-yellow-500 uppercase px-4 py-1 rounded-md"
                >
                  interest
                </h1>
              </div>
              <ul
                style={{ listStyle: "square" }}
                className="text-sm md:text-lg"
              >
                <li className="ml-4 md:ml-8 my-2">Problem solving</li>
                <li className="ml-4 md:ml-8 my-2">
                  Web technology (currently working on Machine Learning and Deep
                  Learning models)
                </li>
                <li className="ml-4 md:ml-8 my-2">Cricket</li>
                <li className="ml-4 md:ml-8 my-2">Cooking</li>
                <li className="ml-4 md:ml-8 my-2">Reading</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
