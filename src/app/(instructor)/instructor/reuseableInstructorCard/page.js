import Image from "next/image";
import Link from "next/link";

function ReuseableInstructorCard({ image, name, des  }) {
    return ( 
        <>
            <div className="w-full m-6 grid grid-cols-2 border border-[#d1d7dc] shadow-lg " >
                <div className="w-full col-span-1 flex" >
                    <Image
                        src={image}
                        width={64}
                        height={64}
                        alt="Instructor image"
                        className=" w-[12rem]  m-auto"
                    />
                </div>
                <div className="w-full col-span-1 p-4 flex flex-col justify-center" >
                    <h1 className="text-xl mb-6 font-bold " >{name}</h1>
                    <p className="text-lg mb-6" >{des}</p>
                    <Link className="text-[#8072e6] underline" href="/instructor" >Get Started</Link>
                </div>
            </div>
        </>
     );
}

export default ReuseableInstructorCard;