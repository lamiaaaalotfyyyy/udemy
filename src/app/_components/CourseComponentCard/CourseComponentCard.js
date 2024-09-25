function CourseComponentCard({ image, title, instractour, rate, price }) {
  return (
    <>
      <div className="m-3">
        <div className="border border-gray-200">
          <img src={image} className="w-full h-[170px]" />
        </div>
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-xs text-gray-500">{instractour}</p>
        <h2 className="text-sm font-semibold">{rate}</h2>
        <h1 className="text-base font-bold">{price}</h1>
      </div>
    </>
  );
}

export default CourseComponentCard;
