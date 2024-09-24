import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function TeachingAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full font-sans	">
      <AccordionItem value="item-1">
        <AccordionTrigger>Plan your curriculum</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-center items-center text-left">
            <div className="order-2">
              <p className="text-base ml-10">
                You start with your passion and knowledge. Then choose a
                promising topic with the help of our Marketplace Insights tool.
              </p>
              <p className="text-base mt-2 ml-10">
                The way that you teach — what you bring to it — is up to you.
              </p>
              <h3 className="text-xl font-bold my-6 text-gray-800">
                How we help you.
              </h3>
              <p className="text-base mt-2 ml-10">
                We offer plenty of resources on how to create your first course.
                And, our instructor dashboard and curriculum pages help keep you
                organized.
              </p>
            </div>
            <div>
              <Image
                src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
                width={480}
                height={480}
                alt=""
                className="order-1"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Record your video</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-center items-center text-left">
            <div className="order-2">
              <p className="text-base ml-10">
                Use basic tools like a smartphone or a DSLR camera. Add a good
                microphone and you’re ready to start.
              </p>
              <p className="text-base mt-2 ml-10">
                If you don’t like being on camera, just capture your screen.
                Either way, we recommend two hours or more of video for a paid
                course.
              </p>
              <h3 className="text-xl font-bold my-6 text-gray-800">
                How we help you
              </h3>
              <p className="text-base mt-2 ml-10">
                Our support team is available to help you throughout the process
                and provide feedback on test videos.
              </p>
            </div>
            <div>
              <Image
                src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
                width={480}
                height={480}
                alt=""
                className="order-1"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Launch your course</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-center items-center text-left">
            <div className="order-2">
              <p className="text-base ml-10">
                Gather your first ratings and reviews by promoting your course
                through social media and your professional networks.
              </p>
              <p className="text-base mt-2 ml-10">
                Your course will be discoverable in our marketplace where you
                earn revenue from each paid enrollment.
              </p>
              <h3 className="text-xl font-bold my-6 text-gray-800">
                How we help you
              </h3>
              <p className="text-base mt-2 ml-10">
                Our custom coupon tool lets you offer enrollment incentives
                while our global promotions drive traffic to courses. There’s
                even more opportunity for courses chosen for Udemy Business.
              </p>
            </div>
            <div>
              <Image
                src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
                width={480}
                height={480}
                alt=""
                className="order-1"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
