import ReuseableInstructorCard from '@/app/(instructor)/instructor/reuseableInstructorCard/page';
import Link from 'next/link';
import { MdOutlineOndemandVideo , MdQuestionAnswer , MdHelpCenter , MdInsights   } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function InstructorSection2LandingPage() {

    return (
        <>
            <h1 className="text-center text-xl  text-gray-700 m-20">Based on your experience, we think these resources will be helpful.</h1>
            <div className="m-20">
                <ReuseableInstructorCard image="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg" name="Create an Engaging Course" des="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting." />
                <div className="grid grid-cols-2 gap-4">
                    <ReuseableInstructorCard image="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg" name="Get Started with Video" des="Quality video lectures can set your course apart. Use our resources to learn the basics." />
                    <ReuseableInstructorCard image="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg" name="Build Your Audience" des="Set your course up for success by building your audience" />
                </div>
                <ReuseableInstructorCard image="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg" name="Join the New Instructor Challenge!" des="Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!" />
            </div>
            <h1 className="text-center text-xl  text-gray-700 m-20">Have questions? Here are our most popular instructor resources.</h1>

            <div className="mx-52 pb-20 my-20 flex gap-10 justify-center">

                <div className="flex justify-center items-center flex-col ">
                    <a
                        href="test-video/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                    >
                        <MdOutlineOndemandVideo size={50} />
                        <Link href="" className='underline text-[#5022c3] font-bold mt-2'>Test Video</Link>
                        <div className="mt-2">
                            Send us a sample video and get expert feedback.
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <a
                        href="test-video/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                    >
                        <MdQuestionAnswer size={50} />
                        <Link href="" className='underline text-[#5022c3] font-bold mt-2'>Instructor Community</Link>
                        <div className=" mt-2">
                        Connect with experienced instructors. Ask questions, browse discussions, and more
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <a
                        href="test-video/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                    >
                        <FaChalkboardTeacher  size={50} />
                        <Link href="" className='underline text-[#5022c3] font-bold mt-2'>Teaching Center</Link>
                        <div className=" mt-2">
                        Learn about best practices for teaching on Udemy.
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <a
                        href="test-video/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                    >
                        <MdInsights  size={50} />
                        <Link href="" className='underline text-[#5022c3] font-bold mt-2'>Marketplace Insights</Link>
                        <div className=" mt-2">
                        Validate your course topic by exploring our marketplace supply and demand.
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <a
                        href="test-video/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                    >
                        <MdHelpCenter size={50} />
                        <Link href="" className='underline text-[#5022c3] font-bold mt-2'>Help and Support</Link>
                        <div className=" mt-2">
                        Browse our Help Center or contact our support team.
                        </div>
                    </a>
                </div>

            </div>
        </>
    );
}

export default InstructorSection2LandingPage;
