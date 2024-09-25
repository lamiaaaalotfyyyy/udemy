import { BreadcrumbDemo } from "@/app/_components/Breadcrumb/Breadcrumb";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="hidden lg:block bg-white border border-b-gray-300 z-10 font-sans relative">
        <BreadcrumbDemo />
      </div>
      <div className="container m-12">
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
    </>
  );
};

export default Page;
