"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("plan-curriculum");

  return (
    <div className="container flex justify-center p-8">
      <div>
        <div className="text-2xl font-bold text-center text-gray-500 flex justify-center">
          <ul className="flex w-[fit-content] border-b-2 border-gray-200">
            <li className="me-2">
              <div
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "plan-curriculum"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("plan-curriculum")}
              >
                Plan your curriculum
              </div>
            </li>

            <li className="me-2">
              <div
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "record-video"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("record-video")}
              >
                Record your video
              </div>
            </li>

            <li className="me-2">
              <div
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "launch-course"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("launch-course")}
              >
                Launch your course
              </div>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <div className="p-6 text-black mr-6">
            {activeTab === "plan-curriculum" && (
              <div className="flex justify-center items-center">
                <div className="w-[24rem] mr-[50px]">
                  <p className="text-lg">
                    You start with your passion and knowledge. Then choose a
                    promising topic with the help of our Marketplace Insights
                    tool.
                  </p>
                  <p className="text-lg mt-2">
                    The way that you teach — what you bring to it — is up to
                    you.
                  </p>
                  <h3 className="text-base font-bold my-6">How we help you.</h3>
                  <p className="text-lg mt-2">
                    We offer plenty of resources on how to create your first
                    course. And, our instructor dashboard and curriculum pages
                    help keep you organized.
                  </p>
                </div>
                <div>
                  <Image
                    src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
                    width={480}
                    height={480}
                    alt=""
                  />
                </div>
              </div>
            )}

            {activeTab === "record-video" && (
              <div className="flex justify-center items-center">
                <div className="w-[24rem] mr-[50px]">
                  <p className="text-lg">
                    Use basic tools like a smartphone or a DSLR camera. Add a
                    good microphone and you’re ready to start.
                  </p>
                  <p className="text-lg mt-2">
                    If you don’t like being on camera, just capture your screen.
                    Either way, we recommend two hours or more of video for a
                    paid course.
                  </p>
                  <h3 className="text-base font-bold my-6">How we help you</h3>
                  <p className="text-lg mt-2">
                    Our support team is available to help you throughout the
                    process and provide feedback on test videos.
                  </p>
                </div>
                <div>
                  <Image
                    src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
                    width={480}
                    height={480}
                    alt=""
                  />
                </div>
              </div>
            )}

            {activeTab === "launch-course" && (
              <div className="flex justify-center items-center">
                <div className="w-[24rem] mr-[50px]">
                  <p className="text-lg">
                    Gather your first ratings and reviews by promoting your
                    course through social media and your professional networks.
                  </p>
                  <p className="text-lg mt-2">
                    Your course will be discoverable in our marketplace where
                    you earn revenue from each paid enrollment.
                  </p>
                  <h3 className="text-base font-bold my-6">How we help you</h3>
                  <p className="text-lg mt-2">
                    Our custom coupon tool lets you offer enrollment incentives
                    while our global promotions drive traffic to courses.
                    There’s even more opportunity for courses chosen for Udemy
                    Business.
                  </p>
                </div>
                <div>
                  <Image
                    src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
                    width={480}
                    height={480}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
