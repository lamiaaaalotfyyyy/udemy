import InstructorLandingPage from "@/app/_components/instructorLandingPage/page";
import InstructorHeader from "./InstructorHeader/InstructorHeader";
import SideNav from "./InstructorSidenav/SideNav";

export default function Home() {
  return (
    <>
      <InstructorHeader />
      <InstructorLandingPage/>
      <SideNav/>
      <div className="container mx-20">
        <h1 className="font-serif text-4xl font-bold text-gray-700">Courses</h1>
        <div className="flex justify-between items-center">
          
          <div>
            <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-28 p-2">
              <div>
                <select
                  id="sort-options"
                  name="sort"
                  required
                  className="block w-full py-1 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
                >
                  <option value="popularity">Newest</option>
                  <option value="highest-rated">Oldest</option>
                  <option value="newest">A-Z</option>
                  <option value="newest">Z-A</option>
                  <option value="newest">Published first</option>
                  <option value="newest">Unpublished first</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
