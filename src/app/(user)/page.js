import Become_Instractor from "../_components/BecomeInstructor/BecomeInstructor";
import Com_Logos from "../_components/ComLogos/ComLogos";
import Top_Categories from "../_components/TopCategories/TopCategories";
import Topics_Categories from "../_components/TopicsCategories/TopicsCategories";
import BroadSelection from "../broadSelection/page";
import LandingPage from "../landingPage/page";
import LandingPageSection4 from "../landingpageSection/page";
import LandingPageSection5 from "../landingPageSection5/page";
import LandingPageSection8 from "../landingPageSection8/page";
import LandingPageSection9 from "../landingPageSection9/page";
export default function Home() {
  return (
    <>
      <LandingPage />
      <Com_Logos />
      <BroadSelection />
      <LandingPageSection4 />
      <LandingPageSection5 />
      <Top_Categories />
      <LandingPageSection8 />
      <LandingPageSection9 />
      <Topics_Categories />
      <Become_Instractor />
    </>
  );
}
