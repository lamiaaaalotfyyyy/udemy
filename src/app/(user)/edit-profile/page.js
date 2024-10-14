"use client";
import RichText from "@/app/(instructor)/_components/RichText/RichText";
import React, { useState } from "react";
export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: "",
    headline:"",
    social: {
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChangeUpdate = (event) => {
    const { name, value } = event.target;

    if (name in formData.social) {
      // Update social field
      setFormData((prevData) => ({
        ...prevData,
        social: {
          ...prevData.social,
          [name]: value,
        },
      }));
    } else {
      // Update other fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    console.log(formData.social.facebook);
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.put(
        `https://udemy-eosin-eight.vercel.app/user/669904f9ad62aaee0f072f8a`,

        formData
      );
      setSuccess("User data updated successfully!");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };
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

                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${activeTab === "View public profile"
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
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${activeTab === "Profile"
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
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${activeTab === " Photo"
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
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${activeTab === " Account Security"
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
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${activeTab === "Close account"
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
                    <><div className="flex border-b border-gray-300 py-4">
                <div class="mx-auto max-w-7xl px-6 text-center">
                  <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">Public profile</h1>
                  <p className="font-text mt-2 leading-6 ">Add information about yourself</p>
                </div>
              </div><div grid grid-rows-6>
                <h2 className="font-bold px-3 mt-3">Basics:</h2>
                  <div class="w-full px-3 mt-3 m mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      
                    </label>
                    <input
                      class="appearance-none block w-full  text-gray-700 border border-black  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      name="name"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={(e) => {
                        handleChangeUpdate(e);
                      } } />
                  </div>
            
                  <div class="w-full  px-3 mt-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                    </label>
                    <input
                      class="appearance-none block w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Last Name"
                      name="lastName" />
                  </div>
                  <div class="w-full  px-3 mt-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-headline"
                          >
                        
                          </label>
                          <div class="relative">
                            <input
                                name="headline"
                              value={formData.headline}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }} 
                              class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              placeholder="Headline"
                              /*     value={bio}
                              onChange={handleChange} */
                            />
                            <span className="absolute top-0 right-0 m-2 text-gray-500">
                              {/* {remainingChars} */}
                            </span>
                          </div>
                          <div className="flex align-center text-gray-500 ">

                          Add a professional headline like, "Instructor at Udemy" or "Architect."
                         
                          </div>
                        </div>
                        <div className="w-full px-3 mt-6 md:mb-0  ">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-biography"
                          >
                           
                          </label>
                          <RichText />
                          <div className="text-gray-500 align-center mt-2">
                          Links and coupon codes are not permitted in this section.
                          </div>
                        </div>
                        <div className="w-ful  px-3 mt-6 md:mb-0 border-b border-gray-300">
                          <label
                            for="grid-youtube-url"
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                           
                          </label>
                          <select
                            id="laguage"
                            class=" border  border-black py-3 px-4 mb-3 text-gray-900 text-sm  block w-full h-12"
                          >
                            <option className="  " selected>
                              {" "}
                             English (US)
                            </option>
                            <option value="US"> English (US)</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="ES">Spain</option>
                            <option value="IT">Italy</option>
                            <option value="UK">United Kingdom</option>
                            <option value="NL">Netherlands</option>
                            <option value="AU">Australia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="IN">India</option>
                            <option value="BR">Brazil</option>
                            <option value="MX">Mexico</option>
                            <option value="CN">China</option>
                            <option value="RU">Russia</option>
                          </select>
                        </div>
                        <div className="w-full  px-3 mt-6 md:mb-0">
                          <label
                            for="grid-linkedin-url"
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                           
                          </label>
                          <div class="relative mb-4 flex w-full items-stretch">
                            <span
                              class="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                              id="basic-addon3"
                            >
                              http://www.linkedin.com/
                            </span>
                            <input
                              name="linkedin"
                              value={formData.social.linkedin}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                              type="text"
                              class="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-linkedin-url"
                              aria-describedby="basic-addon3"
                            />
                          </div>
                          </div>
                          <div className="w-full  px-3 mt-6 md:mb-0">
                          <label
                            for="grid-youtube-url"
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                           
                          </label>
                          <div class="relative mb-4 flex w-full items-stretch">
                            <span
                              class="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                              id="basic-addon3"
                            >
                              http://www.youtube.com/
                            </span>
                            <input
                              name="youtube"
                              value={formData.social.youtube}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                              type="text"
                              class="relative m-0 block flex-auto appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-youtube-url"
                              aria-describedby="basic-addon3"
                            />
                            </div>
                          
                        </div>




                </div></>
                  



            )}
          </div>

        </div>
      </div>
    </>
  );
}
