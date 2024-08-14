import React from "react";
import Button from "../common/button";

const Banner = () => {
  return (
    <>
      <section className="bg-secondary md:min-h-[514px]">
        <div className="flex flex-col md:flex-row container mx-auto md:min-h-[514px]">
          <div className="md:w-1/2 flex flex-col gap-8 py-8 md:justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold md:w-[90%] w-full text-center md:text-left">
              Singapore's Top Specialists in Home Cleaning and Caregiving
            </h1>
            <div className="flex flex-col gap-4 items-center md:flex-row">
              <input
                className="py-2 px-4 rounded-lg"
                type="text"
                placeholder="Postal Code"
              />
              <Button text="Book Now" color="text-white" bg="bg-[#21413E]" />
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              className="w-full  h-full"
              src="/home/banner/banner.png"
              alt="Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
