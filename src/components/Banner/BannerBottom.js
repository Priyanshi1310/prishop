import React from "react";
import { MdHeadphones, MdLocalShipping, MdLock, MdTag, MdTagFaces } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {

{/*Services which shop provides*/}

  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">

        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-base">Free shipping</p>
        </div>

        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdHeadphones />
          </span>
          <p className="text-lightText text-base">Support 24/7</p>
        </div>

        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdLock />
          </span>
          <p className="text-lightText text-base">Secure Payment</p>
        </div>

        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdTagFaces />
          </span>
          <p className="text-lightText text-base">High Discounts</p>
        </div>

        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <CgRedo />
          </span>
          <p className="text-lightText text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
