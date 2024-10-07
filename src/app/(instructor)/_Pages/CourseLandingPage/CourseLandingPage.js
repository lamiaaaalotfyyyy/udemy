"use client";
import React, { useState } from "react";
import RichText from "../../_components/RichText/RichText";
import { IoMdInformationCircle } from "react-icons/io";
import AutoSuggest from "../../_components/AutoSuggest/AutoSuggest";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoPerson } from "react-icons/io5";

const CourseLandingPage = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    subtitle: "",
    description: "",
  });

  const MAX_TITLE_LENGTH = 60;
  const MAX_SUBTITLE_LENGTH = 120;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "courseName" && value.length > MAX_TITLE_LENGTH) return;
    if (name === "subtitle" && value.length > MAX_SUBTITLE_LENGTH) return;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const categories = [
    { id: "1", name: "Development" },
    { id: "2", name: "Design" },
    { id: "3", name: "Marketing" },
  ];

  const subcategories = {
    1: ["Web Development", "Mobile Development", "Game Development"],
    2: ["Graphic Design", "UX/UI Design"],
    3: ["Digital Marketing", "SEO", "Content Marketing"],
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="py-9 px-7 md:px-12">
      <p>
        Your course landing page is crucial to your success on Udemy. If it’s
        done right, it can also help you gain visibility in search engines like
        Google. As you complete this section, think about creating a compelling
        Course Landing Page that demonstrates why someone would want to enroll
        in your course. Learn more about{" "}
        <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
          creating your course landing page
        </span>{" "}
        and{" "}
        <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
          course title standards.
        </span>
      </p>
      {/* Course Title */}
      <div className="my-5">
        <h2 className="font-bold text-base">Course title</h2>
        <div className="relative mt-4 w-full">
          <input
            name="courseName"
            className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Insert your course title"
            value={formData.courseName}
            onChange={handleInputChange}
          />
          <span className="absolute right-2 bottom-3 pr-1 text-gray-600">
            {`${MAX_TITLE_LENGTH - formData.courseName.length}`}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          Your title should be a mix of attention-grabbing, informative, and
          optimized for search
        </span>
      </div>

      {/* Course Subtitle */}
      <div className="my-5">
        <h2 className="font-bold text-base">Course Subtitle</h2>
        <div className="relative mt-4 w-full">
          <input
            name="subtitle"
            className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pr-12" // Add padding to the right side
            type="text"
            placeholder="Insert your course Subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
          />
          <span className="absolute right-4 bottom-3 pr-1 text-gray-600">
            {`${MAX_SUBTITLE_LENGTH - formData.subtitle.length}`}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you&apos;ve covered during your course.
        </span>
      </div>

      {/* Course Description */}
      <div className="my-5">
        <h2 className="font-bold text-base mb-4">Course description</h2>
        <RichText />
        <span className="text-xs text-gray-500">
          Description should have minimum 200 words.
        </span>
      </div>

      {/* Course Basic Info */}
      <div className="my-5">
        <h2 className="font-bold text-base mb-4">Basic Info</h2>
        <div className="flex gap-5 flex-wrap justify-start">
          {/* Language Selection */}
          <div className="flex-1 min-w-72">
            <div className="border border-black p-3">
              <select
                id="lang-options"
                name="lang"
                required
                className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
              >
                <option value="en">English (US)</option>
                <option value="ar">Arabic</option>
              </select>
            </div>
          </div>

          {/* Level Selection */}
          <div className="flex-1 min-w-72">
            <div className="border border-black p-3">
              <select
                id="level-options"
                name="level"
                required
                className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
              >
                <option value="0">--Select Level--</option>
                <option value="1">Beginner Level</option>
                <option value="2">Intermediate Level</option>
                <option value="3">Expert Level</option>
                <option value="4">All Levels</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col flex-1 min-w-80 gap-5">
            <div className="border border-black p-3">
              <select
                id="category-options"
                name="category"
                required
                className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">--Select Category--</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {selectedCategory && (
                <div
                  className="border border-black p-3"
                  style={{ height: selectedCategory ? "auto" : 0 }}
                >
                  <select
                    id="subcategory-options"
                    name="subcategory"
                    required
                    className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
                    value={selectedSubcategory}
                    onChange={handleSubcategoryChange}
                  >
                    <option value="">--Select Subcategory--</option>
                    {subcategories[selectedCategory]?.map(
                      (subcategory, index) => (
                        <option key={index} value={subcategory}>
                          {subcategory}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* What is primarily taught in your course? */}
      <div className="my-5 relative">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-bold text-base">
            What is primarily taught in your course?
          </h2>
          <button
            type="button"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="focus:outline-none"
          >
            <IoMdInformationCircle className="text-xl" />
          </button>

          {tooltipVisible && (
            <div
              id="tooltip-right"
              role="tooltip"
              className="absolute z-10 left-[350px] w-[300px] inline-block p-6 text-sm text-gray-600 bg-white border border-gray-200"
            >
              Each individual topic chosen should comprehensively describe your
              course&apos;s content without being too broad. E.g. &quotThe
              Complete Tennis Course&quot should have &quot;Tennis&quot; – not
              &quot;Tennis Serve&quot; (specific, but not comprehensive) and not
              &quot;Sports&quot; (comprehensive, but not specific).{" "}
              <a
                href="#"
                className="text-violet-700 underline underline-offset-2"
              >
                Learn more.
              </a>
            </div>
          )}
        </div>
        <AutoSuggest />
      </div>

      {/* Course image */}
      <div className="my-5">
        <h2 className="font-bold text-base">Course image</h2>
        <div className="mt-2 w-full flex flex-col md:flex-row">
          <div className="border border-gray-200 flex-1">
            <Image
              src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
              width={750}
              height={422}
              alt=""
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex-1">
            <p>
              Upload your course image here. It must meet our{" "}
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
                course image quality standards
              </span>{" "}
              to be accepted. Important guidelines: 750x422 pixels; .jpg,
              .jpeg,. gif, or .png. no text on the image.
            </p>
            <div className="mt-4 flex w-full">
              <span className="p-3 text-gray-500  border border-black flex-1">
                No file selected
              </span>

              {/* File input */}
              <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                <span className="font-bold text-black">Upload File</span>
                <input
                  name="courseName"
                  className="hidden"
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Course Video */}
      <div className="my-5">
        <h2 className="font-bold text-base">Promotional video</h2>
        <div className="mt-2 w-full flex flex-col md:flex-row">
          <div className="border border-gray-200 flex-1">
            <Image
              src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
              width={750}
              height={422}
              alt=""
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex-1">
            <p>
              Your promo video is a quick and compelling way for students to
              preview what they’ll learn in your course. Students considering
              your course are more likely to enroll if your promo video is
              well-made.
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
                Learn how to make your promo video awesome!
              </span>
            </p>
            <div className="mt-2 flex w-full">
              <span className="p-3 text-gray-500  border border-black flex-1">
                No file selected
              </span>

              {/* File input */}
              <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                <span className="font-bold text-black">Upload File</span>
                <input
                  name="courseName"
                  className="hidden"
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Profile */}
      <div className="my-5">
        <h2 className="font-bold text-base">Instructor profile(s)</h2>
        <div className="flex gap-4 items-center my-6">
          <Avatar className="bg-gray-800 text-white w-[50px] h-[50px]">
            <AvatarFallback>
              <IoPerson />
            </AvatarFallback>
          </Avatar>
          <p className="text-[#5022c3] hover:text-[#3b198f] font-medium cursor-pointer">
            Karim Abdelkareem
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseLandingPage;
