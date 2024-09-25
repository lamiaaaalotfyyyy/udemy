"use client";
import { BreadcrumbDemo } from "@/app/_components/Breadcrumb/Breadcrumb";
import CourseComponentCard from "@/app/_components/CourseComponentCard/CourseComponentCard";
import CoursesSlider from "@/app/_components/CoursesSlider/CoursesSlider";
import React, { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("MostPopular");

  return (
    <>
      <div className="hidden lg:block bg-white border border-b-gray-300 z-10 font-sans relative">
        <BreadcrumbDemo />
      </div>
      <div className=" m-12">
        <h1 className="font-bold text-3xl text-gray-800">
          Development Courses
        </h1>
        <div className="mt-16">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">
            Courses to get you started
          </h3>
          <p className="text-gray-600 mb-8">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
      </div>
      {/* Course cards */}
      <div className=" m-12 font-sans">
        <div className="text-sm font-bold text-center text-gray-500">
          <ul className="flex border-b-2 border-gray-200 ">
            <li>
              <div
                className={`inline-block p-4 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "MostPopular"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("MostPopular")}
              >
                Most Popular
              </div>
            </li>

            <li>
              <div
                className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                  activeTab === "New"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("New")}
              >
                New
              </div>
            </li>

            <li>
              <div
                className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                  activeTab === "Trending"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("Trending")}
              >
                Trending
              </div>
            </li>
          </ul>
        </div>
        <div className=" text-black mt-10">
          {activeTab === "MostPopular" && <CoursesSlider />}

          {activeTab === "New" && <CoursesSlider />}

          {activeTab === "Trending" && <CoursesSlider />}
        </div>
      </div>
    </>
  );
};

export default Page;
