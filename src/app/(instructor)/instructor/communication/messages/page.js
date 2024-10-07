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
            <h1 className="text-4xl font-serif font-bold text-gray-800">
              Messages
            </h1>
          </div>
          <div className="my-8 flex flex-col items-center text-center w-1/2 mx-auto">
            <Image
              src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
              width={240}
              height={180}
              alt="Empty Q&A"
            />
            <h3 className="text-xl font-bold">No new messages</h3>
            <p className="text-gray-500">
              Direct messages are for you to communicate with your students or
              other instructors privately. Here’s where you’ll see them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
