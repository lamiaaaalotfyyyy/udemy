import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex  justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-full w-[100%] md:w-[60%] lg:w-[100%]">
          <div className="flex justify-center items-center">
            <Image
              width={980}
              height={900}
              src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp"
              alt="Udemy Illustration"
              className="hidden lg:block max-w-full h-auto"
            />
            <Image
              width={980}
              height={900}
              src="https://frontends.udemycdn.com/components/auth/mobile-illustration-x2.webp"
              alt="Udemy Illustration"
              className="block lg:hidden max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center w-full lg:w-[65%]">
              <h1 className="text-3xl font-bold mb-6 text-gray-950">
                Sign up and start learning
              </h1>
              <div className="relative">
                <input
                  type="text"
                  id="floating_filled"
                  className="block border w-full p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="floating_filled"
                  className="block border w-full mt-5 p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="floating_filled"
                  className="block border w-full mt-4 p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Password
                </label>
              </div>
              <div className="flex mt-4">
                <input
                  type="checkbox"
                  className="w-5 h-4 mt-0.5 border border-black-800 disabled:opacity-50 disabled:pointer-events-none checked:bg-black"
                  id="hs-default-checkbox"
                />
                <label
                  htmlFor="hs-default-checkbox"
                  className="text-sm text-black-500 text-left	ms-3"
                >
                  Send me special offers, personalized recommendations, and
                  learning tips.
                </label>
              </div>
              <button className="mt-6 w-full bg-purple-500 text-white text-lg font-medium py-3 px-6 hover:bg-purple-800">
                Sign up
              </button>
              <div className="flex justify-center items-center mt-6">
                <p className="text-xs">
                  By signing up, you agree to our{" "}
                  <a className="text-xs underline text-purple-800 hover:text-purple-950 sdecoration-purple-800 decoration-1 underline-offset-4">
                    Terms of Use
                  </a>{" "}
                  and
                  <a className="text-xs underline text-purple-800 hover:text-purple-950 sdecoration-purple-800 decoration-1 underline-offset-4">
                    {" "}
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="flex justify-center items-center mt-12 bg-slate-50 p-4">
                <p>Already have any account?</p>
                <a
                  href="#"
                  className="text-md font-bold underline text-purple-800 hover:text-purple-950 ml-1 decoration-purple-800 decoration-1 underline-offset-4"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
