"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
        top: "150px",
        right: "-25px",
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

function SamplePrevArrow({ className, style, onClick, isHidden }) {
  return (
    <div
      className={`${className} custom-prev-arrow ${isHidden ? "hidden" : ""}`}
      style={{
        ...style,
        display: isHidden ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "150px",
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

const LearnersAchieves = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setts = {
    className: "slider variable-width",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow isHidden={currentSlide === 0} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="bg-gray-100 my-20 p-10">
      <h1 className="text-2xl my-4 font-bold mx-12">
        How learners like you are achieving their goals
      </h1>
      <Slider {...setts} className="max-w-full mx-8">
        {/* Slide 1 */}
        <div
          className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
        >
          <div className={styles.mainContent}>
            <Image
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              width="18"
              height="16"
              alt="quote"
              className="my-2"
            />
            <span>
              I am proud to say that after a few months of taking this course...
              <span className={styles.udTextBold}>
                I passed my exam and am now an AWS Certified Cloud Practitioner!
              </span>
              This content was exactly what the CCP exam covered.
            </span>
          </div>
          <div className="my-2">
            <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>WA</div>
            <span className="mx-2">Will A</span>
          </div>
          <hr className="border-t border-gray-500 my-4" />
          <div className="flex justify-center items-center my-2">
            <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                className="w-20 text-white p-2 ml-1"
                icon={faPlay}
              />
            </div>
            <span className="text-[#5022c3] mx-2 font-bold">
              [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
            </span>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
        >
          <div className={styles.mainContent}>
            <Image
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              width="18"
              height="16"
              alt="quote"
              className="my-2"
            />
            <span>
              This course helped me{" "}
              <span className={styles.udTextBold}>
                freshen up on my product manager skills and land a job at
                Facebook!
              </span>
              Thanks guys :)
            </span>
          </div>
          <div className="my-2">
            <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>RF</div>
            <span className="mx-2">Ron F</span>
          </div>
          <hr className="border-t border-gray-500 my-4" />
          <div className="flex justify-center items-center my-2">
            <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                className="w-20 text-white p-2 ml-1"
                icon={faPlay}
              />
            </div>
            <span className="text-[#5022c3] mx-2 font-bold">
              Become a Product Manager | Learn the Skills & Get the Job
            </span>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
        >
          <div className={styles.mainContent}>
            <Image
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              width="18"
              height="16"
              alt="quote"
              className="my-2"
            />
            <span>
              One of the best courses on management and leadership I have come
              across so far. The advice is practical, and examples highly
              relatable.
              <span className={styles.udTextBold}>
                {" "}
                Would help anyone become a better manager.
              </span>
            </span>
          </div>
          <div className="my-2">
            <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>PW</div>
            <span className="mx-2">Phillip W</span>
          </div>
          <hr className="border-t border-gray-500 my-4" />
          <div className="flex justify-center items-center my-2">
            <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                className="w-20 text-white p-2 ml-1"
                icon={faPlay}
              />
            </div>
            <span className="text-[#5022c3] mx-2 font-bold">
              Leadership : Practical Leadership Skills
            </span>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          className={`${styles.achieves} border border-gray-500 p-5 bg-white`}
        >
          <div className={styles.mainContent}>
            <Image
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              width="18"
              height="16"
              alt="quote"
              className="my-2"
            />
            <span>
              I am proud to say that after a few months of taking this course...
              <span className={styles.udTextBold}>
                I passed my exam and am now an AWS Certified Cloud Practitioner!
              </span>
              This content was exactly what the CCP exam covered.
            </span>
          </div>
          <div className="my-2">
            <div className={`${styles.udAvatar} ${styles.udHeadingSm}`}>WA</div>
            <span className="mx-2">Will A</span>
          </div>
          <hr className="border-t border-gray-500 my-4" />
          <div className="flex justify-center items-center my-2">
            <div className="bg-[#5022c3] w-10 h-10 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                className="w-20 text-white p-2 ml-1"
                icon={faPlay}
              />
            </div>
            <span className="text-[#5022c3] mx-2 font-bold">
              [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LearnersAchieves;
