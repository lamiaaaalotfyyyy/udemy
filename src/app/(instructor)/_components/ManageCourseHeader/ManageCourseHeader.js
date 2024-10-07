import Link from "next/link";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const ManageCourseHeader = () => {
  return (
    <>
      <div className="bg-[#2d2f31] text-white shadow-md sticky top-0 py-4 px-5 z-10">
        <div className="flex gap-5 items-center">
          <div>
            <Link
              href="/instructor/courses"
              className="flex items-center gap-2"
            >
              <MdArrowBackIos />
              <span className="font-medium hidden lg:block">
                Back to courses
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-0 md:items-center flex-1">
            <div className="flex gap-3 items-center flex-wrap">
              <h1 className="font-bold md:text-lg">Course Name</h1>
              <span className="bg-[#6a6f73] px-2 py-[1px] md:px-2 md:py-1 text-[9px] md:text-xs text-white font-bold text-center">
                DRAFT
              </span>
              <span className="text-xs md:text-base font-medium">
                0min of video content uploaded
              </span>
            </div>
            <div>
              <IoMdSettings className="text-lg md:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCourseHeader;
