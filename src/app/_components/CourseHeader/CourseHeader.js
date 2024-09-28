import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'
import Rating from '../Rating/Rating'
import CourseSideBar from '../CourseSideBar/CourseSideBar'

const CourseHeader = ({ title, description, categories, rating, numberOfStudent, numberOfRates, instructorName, courseImg, price }) => {
    return (
            <div className=" text-white p-4 " >

                <div className="mt-5 mb-7">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-indigo-400 font-sans font-bold font-extrabold" >{categories[0]}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-indigo-400 font-sans font-bold font-extrabold" >{categories[1]}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-indigo-400 font-sans font-bold font-extrabold">{categories[2]}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>

                <h1 className="text-3xl font-bold font-sans">{title}</h1>
                <p className='text-2xl	 mt-7 font-sans ' >{description}</p>

                <div className="flex items-center mt-5 ">
                    <div className="bg-amber-50 text-yellow-600 p-1 mr-4">  Best Saller </div>
                    <span className="text-yellow-500 mr-2 font-sans font-extrabold">{rating}</span>
                    <Rating ratingValue={rating} readOnly={true} />
                    <a className="mr-3 ml-4 text-indigo-400 font-semibold underline"> ({numberOfRates} ratings) </a>
                    <p className='font-medium	'>{numberOfStudent} students</p>
                </div>
                <div className="flex items-center mt-5">Created by < a className="mr-3 ml-4 text-indigo-400 font-semibold underline">{instructorName}</a> </div>
            </div>


    )
}

export default CourseHeader