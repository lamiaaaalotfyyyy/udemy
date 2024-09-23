function CourseComponentCard({ image, title, instractour, rate, price }) {
    return (
        <>
            <div>
                <div className="border border-gray-200">
                    <img src={image} className="w-full h-[135px]" />
                </div>
                <h1>{title}</h1>
                <p>{instractour}</p>
                <h2>{rate}</h2>
                <h1>{price}</h1>
            </div>
        </>
    );
}

export default CourseComponentCard;