import React, { useState, useEffect } from "react";
import { commercial } from "./PortfolioData";

const Commercial = () => {
  const initialSliceNum = 5;
  const [sliceNum, setSliceNum] = useState(initialSliceNum);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    setInitialData(commercial.slice(0, sliceNum));
  }, [sliceNum]);

  const setSliceNumFunc = () => {
    if (sliceNum === initialSliceNum) {
      setSliceNum(commercial.length);
    } else {
      setSliceNum(initialSliceNum);
    }
  };

  const buttonText = initialData.length === initialSliceNum ? "See More" : "See Less";

  return (
    <div>
      <h2 className="font-semibold md:text-2xl xl:text-3xl">1. Commercial Architecture</h2>
      <p className="xl:text-lg xl:w-3/4 my-3">
        Reel Archer Studios delivers attractive design to support quality of home and community life unsurpassed in the region. Reel Archer Studios does not compromise in servicing the needs, expectations and dreams of its clients. It takes leadership to new levels by promoting professionalism, balanced design, technical competency, applied technology and quality in service.
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {initialData.map((item) => (
          <img
            src={item.image}
            alt=""
            key={item.id}
            className={`w-full rounded h-52 object-cover first:col-span-2 md:h-64 first:row-span-2 first:h-64 md:first:h-full ${
              initialData.length !== initialSliceNum
                ? `last:col-span-2 md:last:col-span-1 xl:last:col-span-2`
                : `md:last:col-span-2 lg:last:col-span-1`
            }`}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={setSliceNumFunc}
          className="bg-navColor py-2 px-5 rounded-full font-bold text-white md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Commercial;