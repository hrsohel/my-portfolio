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
import { skills } from "@/controllers/skill";
import Footer from "@/components/Footer";
import AboutImagePart from "@/components/AboutImagePart";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" my-4 mx-2 md:mx-auto md:w-[90%] lg:w-[95%] rounded-md about flex items-center justify-center p-4">
        <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-4">
          <div className="lg:w-[50%]">
            <AboutImagePart />
            <br />
            <br />
            <div>
              <div className="text-center flex items-center justify-center text-lg sm:text-2xl font-bold">
                <h1
                  style={{ letterSpacing: "0" }}
                  className="bg-yellow-200 text-yellow-500 uppercase px-4 py-1 rounded-md"
                >
                  skills
                </h1>
              </div>
              <br />
              <div className="flex items-start justify-center gap-4 flex-wrap">
                {skills.map((item) => {
                  return <Skills key={item.id} item={item} />;
                })}
              </div>
            </div>
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
                <p>
                  Hello, I am Mohammad Harunur Rashid, a passionate web and
                  software developer with a knack for turning ideas into digital
                  realities. With a strong foundation in coding and an eye for
                  design, I thrive on crafting intuitive, user-friendly
                  applications and websites that not only meet objectives but
                  also exceed expectations.
                </p>{" "}
                <br />
                <p>
                  My journey in the world of development has equipped me with a
                  diverse skill set, allowing me to tackle a range of projects,
                  from responsive web design to robust software solutions. I am
                  committed to staying at the forefront of emerging technologies
                  and best practices, ensuring that my work remains cutting-edge
                  and innovative.
                </p>{" "}
                <br />
                <p>
                  Collaboration and problem-solving are at the core of my
                  approach. I relish the opportunity to work with clients,
                  understanding their unique needs and translating them into
                  functional, aesthetically pleasing digital products. Whether
                  it is a complex software system or a sleek, user-centric
                  website, I am dedicated to delivering solutions that leave a
                  lasting impression.
                </p>{" "}
                <br />
                <p>
                  In a rapidly evolving digital landscape, I am your reliable
                  partner, ready to transform your concepts into reality. Let us
                  embark on this journey together and bring your ideas to life
                  through code and creativity.
                </p>
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
                  Web technology (currently working on Machine Learning models)
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
