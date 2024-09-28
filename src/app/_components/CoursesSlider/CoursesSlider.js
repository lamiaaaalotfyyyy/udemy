import React from "react";
import CourseComponentCard from "../CourseComponentCard/CourseComponentCard";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "100px",
        right: "-10px",
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
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "100px",
        left: "-11px",
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
  );
}


const CoursesSlider = ({settings}) => {
  const setts = {...settings,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...setts}>
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
            title="The Complete Python Bootcamp From Zero to Hero in Python"
            instractour="Jose Portilla, Pierian Training"
            rate="4.6"
            price="E£299.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
            title="100 Days of Code: The Complete Python Pro Bootcamp"
            instractour="Dr. Angela Yu, Developer and Lead Instructor"
            rate="4.7"
            price="E£349.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg"
            title="Automate the Boring Stuff with Python Programming"
            instractour="Al Sweigart"
            rate="4.6"
            price="E£399.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg"
            title="Python for Data Science and Machine Learning Bootcamp"
            instractour="Jose Portilla, Pierian Training"
            rate="4.4"
            price="E£349.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg"
            title="Python : Master Programming and Development with 15 Projects"
            instractour="Dev Nirwal, Ritu Antil"
            rate="4.4"
            price="E£299.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg"
            title="Python : Master Programming and Development with 15 Projects"
            instractour="Dev Nirwal, Ritu Antil"
            rate="4.4"
            price="E£299.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg"
            title="Python : Master Programming and Development with 15 Projects"
            instractour="Dev Nirwal, Ritu Antil"
            rate="4.4"
            price="E£299.99"
          />
          <CourseComponentCard
            image="https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg"
            title="Python : Master Programming and Development with 15 Projects"
            instractour="Dev Nirwal, Ritu Antil"
            rate="4.4"
            price="E£299.99"
          />
        </Slider>
      </div>
    </>
  );
};

export default CoursesSlider;
