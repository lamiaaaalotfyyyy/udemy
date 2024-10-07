import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GoChevronDown } from "react-icons/go";
import Image from "next/image";
import InstructorHeader from "../../InstructorHeader/InstructorHeader";
import SideNav from "../../InstructorSidenav/SideNav";

const Page = () => {
  return (
    <>
      <InstructorHeader />
      {/* Main Content */}
      <div className="flex h-screen">
        <div className="w-1/5">
          <SideNav />
        </div>
        <div className="flex-1 flex flex-col px-10">
          <div className="flex items-baseline gap-6 mt-6">
            <h1 className="text-4xl font-serif font-bold text-gray-800">Q&A</h1>
            <DropdownMenu>
              <div className="text-2xl font-bold flex items-center gap-3">
                <DropdownMenuTrigger className="appearance-none outline-none">
                  All Courses
                </DropdownMenuTrigger>
                <GoChevronDown className="text-xs" />
              </div>
              <DropdownMenuContent className="w-48 mt-4">
                <DropdownMenuLabel className="font-normal text-sm hover:text-violet-700 cursor-pointer">
                  All Courses
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                  Course 1
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                  Course 2
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                  Course 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="my-8 flex flex-col items-center text-center w-1/2 mx-auto">
            <Image
              src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
              width={240}
              height={180}
              alt="Empty Q&A"
            />
            <h3 className="text-xl font-bold">No questions yet</h3>
            <p className="text-gray-500">
              Q&A is a forum where your students can ask questions, hear your
              responses, and respond to one another. Here’s where you’ll see
              your courses’ Q&A threads
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
