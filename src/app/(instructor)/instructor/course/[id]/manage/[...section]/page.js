import CourseManagmentContent from "@/app/(instructor)/_Pages/CourseManagmentContent/CourseManagmentContent";
import ManageCourseHeader from "@/app/(instructor)/_components/ManageCourseHeader/ManageCourseHeader";
import SidenavCourseManagment from "@/app/(instructor)/_components/SidenavCourseManagment/SidenavCourseManagment";
import Footer from "@/app/_components/Footer/Footer";
import React from "react";

const Page = ({ params: { section } }) => {
  let path = section[0];

  return (
    <>
      <ManageCourseHeader />
      <div className="lg:container flex flex-col lg:flex-row pt-2 lg:pt-8 px-4 pb-24 mx-auto">
        <SidenavCourseManagment path={path} />
        <CourseManagmentContent path={path} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
