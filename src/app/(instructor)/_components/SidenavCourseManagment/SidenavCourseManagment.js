"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const SidenavCourseManagment = ({ path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="px-2 lg:px-0 lg:pr-6 flex justify-between flex-wrap lg:block mb-4 lg:mb-0">
        <button onClick={toggleMenu} className="lg:hidden">
          <GiHamburgerMenu className="text-[#5022c3]  text-2xl" />
        </button>
        <ul
          className={`py-6 ${
            isMenuOpen
              ? "flex flex-wrap items-start border-t mt-4 w-full order-3 lg:order-3"
              : "hidden"
          }  lg:block`}
        >
          <li>
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              Plan your course
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "goals"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="goals"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Intended learners</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "course-structure"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="course-structure"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Course structure</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "setup"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="setup"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>setup & test video</span>
                </Link>
              </li>
            </ul>
          </li>
          {/*  */}
          <li className="lg:mt-6">
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              create your content
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "film"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link href="film" className="flex items-center gap-3 py-1 px-4">
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Film & edit</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "curriculum"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="curriculum"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Curriculum</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "captions"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="captions"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Captions (optional)</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "accessibility"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="accessibility"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Accessibility (optional)</span>
                </Link>
              </li>
            </ul>
          </li>
          {/*  */}
          <li className="lg:mt-6">
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              Publish your course
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "basics"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="basics"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Course landing page</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "pricing"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="pricing"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Pricing</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "promotions"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="promotions"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Promotions</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "communications"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="communications/messages"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    <BsCircle className=" text-xl" />
                    <BsCheckCircle className=" text-xl hidden" />
                  </span>
                  <span>Course messages</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex justify-end flex-1 order-2 lg:order-3">
          <button className="bg-[#a435f0] hover:bg-[#8710d8] font-bold lg:w-full py-1 px-2 md:p-2 text-white text-base">
            Submit for Review
          </button>
        </div>
      </div>
    </>
  );
};

export default SidenavCourseManagment;
