"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';

function InstructorLandingPage() {
    // State for progress
    const [progress] = useState(20); // Example progress value

    return (
        <div className="mx-20">
            <h1 className="font-serif text-4xl font-bold text-gray-700 mb-6">Courses</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search your courses"
                        className="border border-black p-3 w-3/4"
                    />
                    <div className="bg-black text-white p-3">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-6" />
                    </div>
                    <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-28 p-2">
                        <select
                            id="sort-options"
                            name="sort"
                            required
                            className="block w-full py-2 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="published-first">Published first</option>
                            <option value="unpublished-first">Unpublished first</option>
                        </select>
                    </div>
                </div>
                <button className='bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold'>
                    New Course
                </button>
            </div>

            {/* Course Card */}
            <div className='flex border border-black mt-6 w-full grid grid-cols-8'>
                <div>
                    <Image src="https://s.udemycdn.com/course/200_H/placeholder.jpg" width="130" height="130" alt='' />
                </div>
                <div className='relative flex group hover:cursor-pointer col-span-7'>
                    <h1 className='invisible group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Edit/Manage Course</h1>
                    <div className='group-hover:opacity-5 w-full flex '>
                        <div className='w-3/4 flex-col' >
                            <h1 className='font-bold text-lg mt-4'>Learn JavaScript from Zero to Hero</h1>
                            <div className='flex gap-4 mt-12'>
                                <p className='text-xs font-bold'>DRAFT</p>
                                <p className='text-xs'>Public</p>
                            </div>
                        </div>
                        <div className='m-auto flex justify-center w-full'>
                            <h1 className='font-bold text-lg'>Finish your course</h1>
                            <div className="mt-2 ml-6 bg-gray-200 w-1/2 h-3">
                                <div className="bg-[#a435f0] h-full" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Course Card */}
            <div className='flex border border-black mt-6 w-full grid grid-cols-8'>
                <div>
                    <Image src="https://s.udemycdn.com/course/200_H/placeholder.jpg" width="130" height="130" alt='' />
                </div>
                <div className='relative flex group hover:cursor-pointer col-span-7'>
                    <h1 className='invisible group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Edit/Manage Course</h1>
                    <div className='group-hover:opacity-5 w-full flex '>
                        <div className='w-3/4 flex-col' >
                            <h1 className='font-bold text-lg mt-4'>Learn JavaScript from Zero to Hero</h1>
                            <div className='flex gap-4 mt-12'>
                                <p className='text-xs font-bold'>DRAFT</p>
                                <p className='text-xs'>Public</p>
                            </div>
                        </div>
                        <div className='m-auto flex justify-center w-full'>
                            <h1 className='font-bold text-lg'>Finish your course</h1>
                            <div className="mt-2 ml-6 bg-gray-200 w-1/2 h-3">
                                <div className="bg-[#a435f0] h-full" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Another Course Card */}
            <div className='flex border border-black mt-6 w-full grid grid-cols-8'>
                <div>
                    <Image src="https://s.udemycdn.com/course/200_H/placeholder.jpg" width="130" height="130" alt='' />
                </div>
                <div className='relative flex group hover:cursor-pointer col-span-7'>
                    <h1 className='invisible group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Edit/Manage Course</h1>
                    <div className='group-hover:opacity-5 w-full flex '>
                        <div className='w-3/4 flex-col' >
                            <h1 className='font-bold text-lg mt-4'>Learn JavaScript from Zero to Hero</h1>
                            <div className='flex gap-4 mt-12'>
                                <p className='text-xs font-bold'>DRAFT</p>
                                <p className='text-xs'>Public</p>
                            </div>
                        </div>
                        <div className='m-auto flex justify-center w-full'>
                            <h1 className='font-bold text-lg'>Finish your course</h1>
                            <div className="mt-2 ml-6 bg-gray-200 w-1/2 h-3">
                                <div className="bg-[#a435f0] h-full" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorLandingPage;
