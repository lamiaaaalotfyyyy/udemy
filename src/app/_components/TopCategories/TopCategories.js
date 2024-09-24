import Image from "next/image";
import React from "react";

export default function Top_Categories() {
  return (
    <>
      <div className=" px-10 mx-auto m-20 ">
        <h1 className="font-bold tracking-normal text-4xl mb-10">
          Top Categories
        </h1>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/design/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
                  alt="Design"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>Design</span>
            </div>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/development/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
                  alt="Development"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-left font-bold">
                <span>Development</span>
              </div>
            </a>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/marketing/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
                  alt="Marketing"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>Marketing</span>
            </div>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/it-and-software/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
                  alt="IT And Software"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>IT And Software</span>
            </div>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/personal-development/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
                  alt="Personal Development"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>Personal Development</span>
            </div>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/business/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
                  alt="Business"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>Business</span>
            </div>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/photograohy/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
                  alt="Photography"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>Photography</span>
            </div>
          </div>

          <div className="relative mb-6 ">
            <a href="https://www.udemy.com/courses/music/">
              <div className="relative w-[168px] h-[168px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  className="transition duration-200 transform hover:scale-105"
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
                  alt="Music"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="mt-3 text-left font-bold">
              <span>Music</span>
            </div>
          </div>
        </div>

        <div className=" flex-wrap md:hidden flex ">
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4"> Design </span>
            </button>
          </a>
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4">Development</span>
            </button>
          </a>
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4">
                Marketing IT and Software
              </span>
            </button>
          </a>
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4">
                Personal Development
              </span>
            </button>
          </a>
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4"> Business </span>
            </button>
          </a>
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4">Photography</span>
            </button>
          </a>
          <a href="https://www.example.com" className="mr-3 mb-3 ">
            <button className="  hover:bg-gray-200 border-black border-2 rounded-full border-solid h-16">
              <span className="text-black font-bold px-4"> Music </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
