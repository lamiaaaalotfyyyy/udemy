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

export default function Page() {
  return (
    <>
      <InstructorHeader />
      {/* Main Content */}
      <div className="flex h-screen">
        <div className="w-1/5">
          <SideNav />
        </div>
        <div className="flex-1 flex flex-col px-4">
          <div className="flex items-baseline gap-6 ">
            <h1 className="text-4xl font-serif font-bold text-gray-800">
              Assignments
            </h1>
            <DropdownMenu >
              <div className="text-2xl font-bold flex items-center gap-3">
                <DropdownMenuTrigger className="appearance-none outline-none">
                  All Courses
                </DropdownMenuTrigger>
                <GoChevronDown className="text-xs" />
              </div>
              <DropdownMenuContent className="w-48 mt-4 bg-white">
              
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
       
          <div class="relative flex w-full flex-col  mt-6">
            <nav class="flex flex-1 flex-row  ">
              <div
                role="button"
                class="flex w-full items-center rounded-lg p-0 transition-all"
              >
                <label
                  for="check-vertical-list-group4"
                  class="flex w-full cursor-pointer items-center px-3 py-2 "
                >
                  <div class="inline-flex items-center">
                    <label
                      class="flex items-center cursor-pointer relative"
                      for="check-vertical-list-group4"
                    >
                      <input
                        type="checkbox"
                        class="peer h-5 w-5  border-2 border-black cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md  checked:bg-slate-800 checked:border-slate-800"
                        id="check-vertical-list-group4"
                      />
                      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      class="cursor-pointer ml-2 text-slate-600 text-sm"
                      for="check-vertical-list-group4"
                    >
                      Unread (0)
                    </label>
                  </div>
                </label>
              </div>
              <div className="flex items-baseline">
                <p className="font-serif  text-gray-800">Sharing prefrence:</p>
                <DropdownMenu>
                  <div className="font-bold flex items-center gap-3">
                    <DropdownMenuTrigger className="appearance-none outline-none">
                      All (0)
                    </DropdownMenuTrigger>
                    <GoChevronDown className="text-xs" />
                  </div>
                  <DropdownMenuContent className="w-48 mt-4">
                    
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                     All (0)
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                     Instructor only (0)
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                     Public (0)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
          <div className="my-8 flex flex-col items-center text-center w-1/2 mx-auto">
            <Image
              src="https://s.udemycdn.com/communication/empty-search.jpg"
              width={240}
              height={180}
              alt="Empty Q&A"
            />
            <h3 className="text-xl font-bold">No result</h3>
            <p className="text-gray-500">
            Try a different filter
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
