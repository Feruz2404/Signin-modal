import React from "react";

const Skeleton = ({ count }) => {
  return (
    <div className="bg-[#0f172a] text-white flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-4 gap-6 p-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-[261px] h-[386px] flex flex-col justify-between shadow-lg border border-gray-800 rounded-lg p-4 text-center bg-[#1f2937] animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg h-[180px]"></div>

              {/* Title Skeleton */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg h-6 mt-4 w-3/4 mx-auto"></div>

              {/* Price and Icon Skeleton */}
              <div className="flex justify-center items-center mt-4 mb-2 space-x-4">
                <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg w-24 h-6"></div>
                <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-full w-10 h-10"></div>
              </div>

              {/* Rating Skeleton */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg h-6 w-1/4 mx-auto mb-4"></div>

              {/* Button Skeleton */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg h-10 w-2/3 mx-auto"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skeleton;
