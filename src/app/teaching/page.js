import Image from "next/image";
import React from "react";

const Page = () => {
  const reasons = [
    {
      icon: "https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg",
      title: "Teach your way",
      description:
        "Publish the course you want, in the way you want, and always have control of your own content.",
    },
    {
      icon: "https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg",
      title: "Inspire learners",
      description:
        "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
    },
    {
      icon: "https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg",
      title: "Get rewarded",
      description:
        "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
    },
  ];
  return (
    <>
      <div className="relative">
        <Image
          src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg"
          width={800}
          height={800}
          alt=""
          className="w-full"
        />
        <div className="absolute ml-28 top-1/2 transform -translate-y-1/2 p-4 w-[23rem]">
          <h1 className="font-bold text-5xl text-gray-800 mb-4">
            Come teach with us
          </h1>
          <p className="text-gray-700 text-xl">
            Become an instructor and change lives — including your own
          </p>
          <button className="py-4 px-6 mt-5 w-full bg-gray-800 text-white text-sm font-extrabold hover:bg-gray-700">
            Get started
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col justify-center items-center my-20">
        <h1 className="font-bold text-5xl text-gray-800 mb-4">
          So many reasons to start
        </h1>
        <div className="flex justify-between text-center w-full px-20">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-4 flex flex-col items-center">
              <Image
                src={reason.icon}
                width={100}
                height={100}
                alt=""
                className="mb-4"
              />
              <h2 className="font-bold text-xl text-gray-800 mb-4">
                {reason.title}
              </h2>
              <p className="text-gray-800 text-base w-[300px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="flex justify-evenly items-center my-20 bg-indigo-800 p-16 text-white text-center">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-5xl mb-2">73M</h1>
          <h2 className="text-base">student</h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-5xl mb-2">75+</h1>
          <h2 className="text-base">Languages</h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-5xl mb-2">1B</h1>
          <h2 className="text-base">Enrollments</h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-5xl mb-2">180+</h1>
          <h2 className="text-base">Countries</h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-5xl mb-2">16,000+</h1>
          <h2 className="text-base">Enterprise customers</h2>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center my-20 p-10 text-white text-center">
        <h1 className="font-bold text-5xl text-gray-800 mb-4">How to begin</h1>

        <div className="text-xl font-bold text-center text-gray-500 border-b border-gray-100">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Plan your curriculum
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 text-black border-b-2 border-black rounded-t-lg active text-black-500 border-black-500"
                aria-current="page"
              >
                Record your video
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Launch your course  
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
