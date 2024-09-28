"use client";
import { BreadcrumbDemo } from "@/app/_components/Breadcrumb/Breadcrumb";
import FeaturedCourseSlider from "@/app/_components/FeaturedCourseSlider/FeaturedCourseSlider";
import FilterSlider from "@/app/_components/FilterSlider/FilterSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InstructorCard from "@/app/_components/InstructorCard/InstructorCard";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import FilterAccordion from "@/app/_components/FilterAccordion/FilterAccordion";
import CourseLargeCard from "@/app/_components/CourseLargeCard/CourseLargeCard";
const SampleNextArrow = (props) => {
  const { className, style, onClick, isHidden } = props;
  return (
    !isHidden && ( // Only render if not hidden
      <div
        className={`${className} custom-next-arrow`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: "-30px",
          backgroundColor: "#252525",
          position: "absolute",
          zIndex: "10",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <FaChevronRight style={{ color: "white", fontSize: "16px" }} />
      </div>
    )
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick, isHidden } = props;
  return (
    !isHidden && (
      <div
        className={`${className} custom-prev-arrow`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: "-30px",
          backgroundColor: "#252525",
          position: "absolute",
          zIndex: "10",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <FaChevronLeft style={{ color: "white", fontSize: "16px" }} />
      </div>
    )
  );
}

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: "center",
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 4,
    rows: 2,
    slidesPerRow: 1,
  };
  const inssettings = {
    className: "center",
    infinite: false,
    speed: 500,
    nextArrow: (
      <SampleNextArrow
        isHidden={
          currentSlide >= (instructors.length - 1) / settings.slidesToScroll
        }
      />
    ),
    prevArrow: <SamplePrevArrow isHidden={currentSlide === 0} />,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <>
      <div className="hidden lg:block bg-white border border-b-gray-300 font-sans ">
        <BreadcrumbDemo />
      </div>
      <div className="mx-12 mt-12">
        <h1 className="font-bold text-3xl text-gray-800">
          Development Courses
        </h1>
        <div className="mt-16">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">
            Courses to get you started
          </h3>
          <p className="text-gray-600 mb-2">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
      </div>
      <FilterSlider />
      {/* Featured Courses*/}
      <div className="mx-12 mt-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          Featured Courses
        </h3>
        <p className="text-gray-600 mb-2">
          Many learners enjoyed this highly rated course for its engaging
          content.
        </p>
        {/* Course Card */}
        <div className="border border-gray-200 font-sans hover:cursor-pointer hover:bg-slate-50">
          <FeaturedCourseSlider />
        </div>
      </div>
      {/* Popular Topics*/}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          Popular Topics
        </h3>
        <Slider {...settings} className="text-center ">
          {topics.map((topic, index) => (
            <div key={index} className=" border border-gray-300 py-4 mb-2 h-15">
              <h1 className="font-bold text-base text-gray-800">{topic}</h1>
            </div>
          ))}
        </Slider>
      </div>
      {/* Popular Instructor*/}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          Popular Instructor
        </h3>
        <p className="text-gray-600 mb-2">
          Many learners enjoyed this highly rated course for its engaging
          content.
        </p>
        <Slider {...inssettings} className="flex">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </Slider>
      </div>
      {/* All Courses */}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-4">
          All Development courses
        </h3>
        <div className="flex items-center border border-gray-200 text-gray-800 mb-6 p-4">
          <IoIosInformationCircle style={{ fontSize: "32px" }} />
          <p className="font-bold text-base text-gray-800 ml-6">
            Not sure? All courses have a 30-day money-back guarantee
          </p>
        </div>
        {/* Course Cards */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center border border-black font-sans hover:cursor-pointer hover:bg-gray-200 p-4">
              <IoFilterOutline style={{ fontSize: "18px" }} />
              <span className="font-bold ml-2">Filter</span>
            </div>
            <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-40 p-2">
              <div className="relative w-full">
                <select
                  id="sort-options"
                  name="sort"
                  required
                  className="block w-full px-2 pt-5 text-base focus:outline-none bg-transparent text-gray-800"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <label
                  htmlFor="sort-options"
                  className="absolute text-xs font-bold text-gray-700 transition-all left-3 top-0 peer-focus:text-xs peer-focus:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 hover:text-gray-600"
                >
                  Sort by
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mb-12">
          <div className="w-[25%] hidden lg:block pt-4">
            <FilterAccordion />
          </div>
          <div className="w-full ml-6">
            {Array.from({ length: 16 }, (_, i) => (
              <CourseLargeCard key={i} />
            ))}
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};
const topics = [
  "Python",
  "Web Development",
  "Data Science",
  "JavaScript",
  "React JS",
  "Java",
  "Unreal Engine",
  "Machine Learning",
  "C# (Programming Language)",
  "Unity",
  "C++ (Programming Language)",
  "SQL",
  "Google Flutter",
  "Angular",
  "Artificial Intelligence (AI)",
  "Generative AI (GenAI)",
  "Docker",
  "Deep Learning",
];

const instructors = [
  {
    image: "https://img-c.udemycdn.com/user/100x100/31334738_a13c_3.jpg",
    name: "Dr. Angela Yu, Developer and Lead Instructor",
    lable: "Python, Data Science",
    rating: 4.7,
    courses: 7,
    students: "2,884,610",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/13952972_e853.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    lable: "React JS, React Hooks",
    rating: 4.6,
    courses: 47,
    students: "3,069,472",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/9685726_67e7_4.jpg",
    name: "Jose Portilla",
    lable: "Python, Data Science",
    rating: 4.6,
    courses: 87,
    students: "4,012,459",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/7799204_2091_5.jpg",
    name: "Jonas Schmedtmann",
    lable: "JavaScript, React JS",
    rating: 4.7,
    courses: 7,
    students: "2,030,524",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/4466306_6fd8_3.jpg",
    name: "Colt Steele",
    lable: "Web Development, MySQL",
    rating: 4.7,
    courses: 30,
    students: "1,777,338",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/13952972_e853.jpg",
    name: "Maximilian Schwarzmüller",
    lable: "Angular, Next.js",
    rating: 4.6,
    courses: 62,
    students: "3,106,260",
  },
];

export default Page;
