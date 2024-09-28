"use client"
import { AiOutlineDown } from 'react-icons/ai';
import React, { useState } from 'react';

const CourseContent = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const sections = [
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
            ],
        },
        {
            title: "Advanced Tailwind Techniques",
            duration: "1h 15m",
            lectures: [
                { title: "Using Plugins", duration: "15m" },
                { title: "Optimizing for Production", duration: "30m" },
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
            ],
        },
        {
            title: "Advanced Tailwind Techniques",
            duration: "1h 15m",
            lectures: [
                { title: "Using Plugins", duration: "15m" },
                { title: "Optimizing for Production", duration: "30m" },
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
            ],
        },
        {
            title: "Advanced Tailwind Techniques",
            duration: "1h 15m",
            lectures: [
                { title: "Using Plugins", duration: "15m" },
                { title: "Optimizing for Production", duration: "30m" },
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
            ],
        },
        {
            title: "Advanced Tailwind Techniques",
            duration: "1h 15m",
            lectures: [
                { title: "Using Plugins", duration: "15m" },
                { title: "Optimizing for Production", duration: "30m" },
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-slate-800">Course content</h2>
            <p className="text-slate-600 mt-2 mb-4">
                {sections.length} sections • {sections.reduce((total, section) => total + section.lectures.length, 0)} lectures • 3h 15m total length
            </p>

            {sections.map((section, index) => (
                <div key={section.title} className="mb-4">
                    {/* Section Header */}
                    <button
                        onClick={() => toggleSection(index)}
                        className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg"
                    >
                        <div>
                            <h3 className="font-semibold text-slate-800">{section.title}</h3>
                            <p className="text-slate-500 text-sm">{section.duration}</p>
                        </div>
                        <AiOutlineDown size={24} color="black"
                            className={`h-5 w-5 transform ${openSection === index ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* Section Content */}
                    {openSection === index && (
                        <ul className="mt-3 pl-5 list-disc">
                            {section.lectures.map((lecture) => (
                                <li key={lecture.title} className="flex justify-between py-2">
                                    <span className="text-slate-700">{lecture.title}</span>
                                    <span className="text-slate-500 text-sm">{lecture.duration}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CourseContent;
