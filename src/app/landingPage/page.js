import Image from "next/image";
import cover from '@/app/assest/cover.jpg'
function LandingPage() {
    return (
        <>
            <div className="bg-[rgb(233,231,41)] w-7/12">
                    <div className="bg-white absolute p-10 w-1/3 top-36 left-28 ">
                        <h1 className="text-5xl font-bold pb-4 text-gray-700" >Keep moving up</h1>
                        <p className="text-lg">Learn the skills you need to take the next step — and every step after. Courses from E£249.99 through Sept 24.</p>
                    </div>
                </div>
            <div >
                <Image
                    src={cover}
                    width={1340}
                    height={400}
                    alt="Description"
                    className="w-[95%] m-auto"
                />
            </div>
        </>
    );
}

export default LandingPage;