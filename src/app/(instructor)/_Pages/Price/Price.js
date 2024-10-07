import React from "react";

const Price = () => {
  return (
    <>
      <div className="py-9 px-7 lg:px-12">
        <div className="my-5">
          <h2 className="font-bold text-base">Set a price for your course</h2>
          <p className="w-[90%] lg:w-[70%]">
            Please select the currency and the price tier for your course. If
            you’d like to offer your course for free, it must have a total video
            length of less than 2 hours. Also, courses with practice tests can
            not be free.
          </p>
        </div>
        {/* Add Price Form */}
        <div className="my-5">
          <div className="flex gap-8">
            <div>
              <h3 className="font-bold text-base">Currency</h3>
              <div className="relative">
                <select className="border border-black w-20 py-3 flex justify-between outline-none">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base">Price tier</h3>
              <div className="relative">
                <select className="border border-black w-40 py-3 flex justify-between outline-none">
                  <option value="0">Select</option>
                  <option value="0">Free</option>
                  <option value="0">$19.99 (tire 1)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-gray-400 mt-2 text-white font-bold px-6 py-3">
          Save
        </button>
      </div>
    </>
  );
};

export default Price;
