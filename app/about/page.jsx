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

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" my-4 mx-2 md:mx-auto md:w-[90%] lg:w-[85%] rounded-md about flex items-center justify-center p-4">
        <div className="flex items-start justify-between flex-wrap lg:flex-nowrap">
          <div className="">
            <AboutImagePart />
            <br />
            <br />
            <div>
              <h1 className="text-lg font-semibold">Skill</h1>
              <br />
              {skills.map((item) => {
                return (
                  <div key={item.id}>
                    <p>
                      {item.name} {item.skill}%
                    </p>
                    <div className="w-full relative h-2 bg-yellow-200 my-2 rounded-lg">
                      <div
                        style={{ width: `${item.skill}%` }}
                        className={`h-full bg-yellow-500 absolute top-0 left-0 rounded-lg`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="font-semibold my-8 text-xl">Connect with me at</h1>
            <div className="flex items-center justify-around mb-8">
              <Link
                href="https://www.facebook.com/hr.sohel.980"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2xl"
                  color="rgb(59 130 246)"
                />
              </Link>
              <Link href="#" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  color="rgb(59 130 246)"
                />
              </Link>
              <Link href="https://twitter.com/HRSohel10" target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size="2xl"
                  color="rgb(30 48 80)"
                />
              </Link>
              <Link href="https://github.com/hrsohel" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2xl" color="#333" />
              </Link>
            </div>
            <div className="my-8">
              <h1 className="text-2xl font-semibold my-3">Interest</h1>
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
            </div>
          </div>
          <div className="md:w-[40rem] w-full md:ml-8">
            <h1 className="text-2xl font-bold mb-4">About me</h1>
            <div className="text-sm sm:text-lg font-sarif">
              <p className="my-1">
                Hello! I am Mohammad Harunur Rashid, a passionate and innovative
                web and software developer with a deep love for crafting elegant
                and efficient solutions. With a keen eye for detail and a knack
                for problem-solving, I am dedicated to creating meaningful and
                impactful digital experiences.
              </p>
              <p className="my-1">
                <span className="font-semibold">My Journey</span> <br />
                My journey in the world of technology began at a young age,
                sparked by curiosity and a drive to create. Over the years, I
                have honed my skills and embraced a diverse range of
                technologies and tools, constantly seeking to expand my
                knowledge and stay at the forefront of industry trends. <br />
              </p>
              <p className="my-1">
                <span className="font-semibold">What I Do</span> <br /> I
                specialize in developing responsive and user-friendly websites,
                robust web applications, and intuitive software solutions. My
                expertise encompasses a wide range of programming languages,
                frameworks, and libraries, allowing me to tailor my approach to
                each unique project. I believe that great software goes beyond
                lines of code—it is about creating seamless user experiences
                that leave a lasting impression. Whether I am architecting the
                backend of a complex application or meticulously crafting
                pixel-perfect frontend designs, my goal is to make technology
                work effortlessly for users. <br />
              </p>
              <div className="my-1">
                <span className="font-semibold">Why Work With Me</span> <br />
                <p className="ml-3">
                  <span className="font-semibold">**Passion:**</span> <br /> I
                  am genuinely passionate about what I do. This passion drives
                  me to deliver top-notch results and continuously improve my
                  craft.{" "}
                </p>
                <p className="ml-3">
                  <span className="font-semibold">**Innovation:**</span>
                  <br />I love to explore new technologies and find creative
                  ways to solve problems. I am not afraid to think outside the
                  box and push boundaries.
                </p>
                <p className="ml-3">
                  <span className="font-semibold">**Collaboration:**</span>{" "}
                  <br /> I thrive in collaborative environments and value open
                  communication. Working together, we can turn ideas into
                  reality and achieve remarkable outcomes.
                </p>
                <p className="ml-3">
                  <span className="font-semibold">**Detail-Oriented:**</span>{" "}
                  <br /> I believe that attention to detail is crucial in
                  delivering high-quality work. I take pride in my work and
                  always strive for excellence.
                </p>
              </div>
              <p className="my-1">
                <span className="font-semibold">Let us Connect</span> <br /> I
                am always excited to connect with fellow developers,
                entrepreneurs, and enthusiasts. Whether you have a project in
                mind or just want to chat tech, feel free to reach out! Let us
                work together to turn ideas into beautifully functional
                realities. Thank you for taking the time to get to know me. I
                look forward to the opportunity of working together and
                contributing to your next amazing project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
