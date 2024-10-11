import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
const AddContentForm = () => {
  return (
    <>
      <div className="bg-white text-center gap-2 border border-black border-t-0 p-4 ml-20 mr-2">
        <p>
          Select the main type of content. Files and links can be added as
          resources.
          <span className="text-[#5022c3] cursor-pointer underline underline-offset-4 hover:text-[#3b198f]">
            Learn about content types.
          </span>
        </p>
        <button className="relative flex flex-col items-center gap-2 bg-gray-50 border border-gray-300 mx-auto mt-5 w-20 font-medium hover:bg-gray-900 group overflow-hidden">
          {/* Gray circle */}
          <FaCirclePlay className="text-3xl mt-2 text-gray-200 transition-all duration-300 transform group-hover:translate-y-[-100%] group-hover:opacity-0" />

          {/* White circle */}
          <FaCirclePlay className="text-3xl absolute top-full mt-2 text-white transition-all duration-300 transform group-hover:translate-y-[-230%]" />

          {/* Video label */}
          <span className="text-gray-800 text-xs w-full relative z-10 bg-gray-200 p-1 group-hover:bg-gray-950 group-hover:text-white">
            video
          </span>
        </button>
      </div>
    </>
  );
};

export default AddContentForm;
