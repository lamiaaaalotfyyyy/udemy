"use client";
import React, { useState } from "react";
export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <>
      <div className="pt-6 px-48 pb-12 grid grid-cols-12">
        <div className="col-span-2 border border-gray-300">
          <div class="flex justify-center p-4">
            <div class="bg-gray-800 inline-flex items-center justify-center rounded-full bg-cover font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl text-white w-16 h-16">
              KA
            </div>
          </div>
          <div className=" font-bold leading-tight tracking-normal text-center pt-4">
            Karim Abdelkareem
          </div>
          <ul className="py-4">
            <li  >
              <a
                href="#"
               
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "View public profile"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("View public profile")}
              >
                View public profile
              </a>
            </li>
            <li >
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Profile"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("Profile")}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === " Photo"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab(" Photo")}
              >
               Photo
              </a>
            </li>
            <li >
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === " Account Security"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab(" Account Security")}
                
              >
                
                Account Security
              </a>

            </li>
            <li >
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Close account"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab(" Close account")}
                
              >
                
               Close account
              </a>

            </li>
          </ul>
        </div>

        <div className="col-span-10 border-y border-e border-gray-300">
        <div className=" text-black mr-6">
                  {activeTab === "Profile" && (
                    <div className="flex border-b border-gray-300 py-4">
                      <div class="mx-auto max-w-7xl px-6 text-center">
                      <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">Public profile</h1>
                      <p className="font-text mt-2 leading-6 ">Add information about yourself</p>
                      </div>
                      
                    </div>
                    

                    
                  )}
                  </div>
         
        </div>
      </div>
    </>
  );
}
