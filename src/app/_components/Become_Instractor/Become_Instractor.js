import Image from "next/image";
import React from "react";

export default function Become_Instractor() {
    return ( <
        >
        <
        div className = "container my-20 p-20" >
        <
        div className = "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2" >
        <
        div className = "mr-32" >
        <
        Image src = "https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg"
        alt = "Volkswagen logo gray and white logo"
        width = { 400 }
        height = { 400 }
        />{" "} <
        /div>{" "} <
        div >
        <
        div className = " grid grid-cols-1 justify-center max-w-full text-left" >
        <
        h3 className = "font-bold mb-2" > Become an instructor < /h3>{" "} <
        div className = "mb-2" > { " " }
        Instructors from around the world teach millions of learners on Udemy.We provide the tools and skills to teach what you love. { " " } <
        /div>{" "} <
        div className = "flex lg:flex-row xl:flex-row  justify-start " >
        <
        button className = "   border-black border-2 bg-black border-solid h-16" > { " " } <
        span className = "text-white font-bold px-4" > { " " }
        Explore more topics { " " } <
        /span>{" "} <
        /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
}