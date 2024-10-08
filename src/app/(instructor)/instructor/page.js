import Footer from "@/app/_components/Footer/Footer";
import InstructorLandingPage from "@/app/_components/instructorLandingPage/page";
import InstructorSection2LandingPage from "@/app/_components/instructorSection2LandingPage/page";
import InstructorFooter from "./instractorFooter/page";
import InstructorHeader from "./InstructorHeader/InstructorHeader";
import SideNav from "./InstructorSidenav/SideNav";

export default function Home() {
  return (
    <>
      <InstructorHeader />
      <InstructorLandingPage/>
      <InstructorSection2LandingPage/>
      <InstructorFooter/>
      <SideNav/>
    </>
  );
}
