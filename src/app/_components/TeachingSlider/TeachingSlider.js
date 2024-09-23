import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const TeachingSlider = () => {
  return (
    <>
      <div className="w-full bg-[#f7f9fa] flex justify-center">
        <Carousel className="w-[50%] p-0">
          <CarouselContent className="p-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="flex p-0">
                      <div className="flex items-center justify-center">
                        <Image
                          src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg"
                          width={400}
                          height={400}
                          alt=""
                          className="w-1/2 mr-6"
                        />
                        <div className="w-1/2">
                          <p className="text-2xl font-semibold">
                            “I’m proud to wake up knowing my work is helping
                            people around the world improve their careers and
                            build great things. While being a full-time
                            instructor is hard work, it lets you work when,
                            where, and how you want.”
                          </p>
                          <div>Frank Kane</div>
                          <div>Data Science & IT Certifications</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-700 text-white hover:text-white hover:bg-gray-600" />
          <CarouselNext className="bg-gray-700 text-white hover:text-white hover:bg-gray-600" />
        </Carousel>
      </div>
    </>
  );
};

export default TeachingSlider;
