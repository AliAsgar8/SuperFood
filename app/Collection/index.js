import Image from 'next/image';
import React from 'react';

const Collection = () => {
  return (
    <>
      <div className="collection h-[500px] sm:h-[400px] flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-40 px-4 py-10 bg-gray-900">
        <div className="text-white flex flex-col justify-center items-center">
          <div>
            <Image
              src="/assets/images/asset 37.png"
              alt="title"
              width={100}
              height={100}
            />
          </div>
          <h4 className="text-xl font-semibold mt-2">9859</h4>
          <h4 className="text-sm md:text-base">Icon Collections</h4>
        </div>

        <div className="text-white flex flex-col justify-center items-center">
          <div>
            <Image
              src="/assets/images/asset 38.png"
              alt="title"
              width={100}
              height={100}
            />
          </div>
          <h4 className="text-xl font-semibold mt-2">8197</h4>
          <h4 className="text-sm md:text-base">Masonry Layouts</h4>
        </div>

        <div className="text-white flex flex-col justify-center items-center">
          <div>
            <Image
              src="/assets/images/asset 39.png"
              alt="title"
              width={100}
              height={100}
            />
          </div>
          <h4 className="text-xl font-semibold mt-2">1143</h4>
          <h4 className="text-sm md:text-base">Only The Best</h4>
        </div>

        <div className="text-white flex flex-col justify-center items-center">
          <div>
            <Image
              src="/assets/images/asset 40.png"
              alt="title"
              width={100}
              height={100}
            />
          </div>
          <h4 className="text-xl font-semibold mt-2">2177</h4>
          <h4 className="text-sm md:text-base">Elated Design</h4>
        </div>
      </div>
    </>
  );
};

export default Collection;
