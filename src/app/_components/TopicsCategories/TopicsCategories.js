import React from "react";

export default function Topics_Categories() {
  return (
    <>
      <div className="px-8 bg-gray-50 py-16 font-sans">
        <h1 className="font-semibold tracking-normal text-2xl md:text-3xl my-8 text-gray-800">
          Featured topics by category
        </h1>
        <div className="flex justify-between flex-wrap">
          {/* Development */}
          <div className="pr-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Development
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Python
              </a>
              <div className="text-sm text-gray-500">36,354,994 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Web Development
              </a>
              <div className="text-sm text-gray-500">11,415,615 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Machine Learning
              </a>
              <div className="text-sm text-gray-500">7,070,015 learners</div>
            </div>
          </div>
          {/* Business */}
          <div className="pl-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Business
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Financial Analysis
              </a>
              <div className="text-sm text-gray-500">1,195,282 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                SQL
              </a>
              <div className="text-sm text-gray-500">5,977,561 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                PMP
              </a>
              <div className="text-sm text-gray-500">1,733,398 learners</div>
            </div>
          </div>
          {/* IT */}
          <div className="pr-1 md:pr-0 pl-0 md:pl-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              IT and Software
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Amazon AWS
              </a>
              <div className="text-sm text-gray-500">6,123,456 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Ethical Hacking
              </a>
              <div className="text-sm text-gray-500">10,931,066 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Cyber Security
              </a>
              <div className="text-sm text-gray-500">3,998,037 learners</div>
            </div>
          </div>
          {/* Design */}
          <div className="pl-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Design</h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Photoshop
              </a>
              <div className="text-sm text-gray-500">10,909,736 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Graphic Design
              </a>
              <div className="text-sm text-gray-500">3,381,052 learners</div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                Drawing
              </a>
              <div className="text-sm text-gray-500">2,410,849 learners</div>
            </div>
          </div>
          <a href="https://www.example.com" className="mt-6 inline-block">
            <button className="hover:bg-gray-300 border-black border border-solid h-10 px-3 ">
              <span className="text-black font-semibold">
                Explore more topics
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
