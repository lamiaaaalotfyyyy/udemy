"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import InstructorCard from "../InstructorCard/InstructorCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InstructorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const inssettings = {
    className: "center",
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: (
      <SampleNextArrow
        isHidden={currentSlide >= (instructors.length - 1) / 4}
      />
    ),
    prevArrow: <SamplePrevArrow isHidden={currentSlide === 0} />,

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
      <Slider {...inssettings} className="flex mt-4">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </Slider>
    </>
  );
};

export default InstructorSlider;
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
