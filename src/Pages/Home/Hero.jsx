import React from "react";
import heroImage from "../../assets/pngwing 10.png"; // Make sure to add an image in this path
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative bg-[#fdf2f4] overflow-hidden pt-5 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-3 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Let's make <br />
            <span className="text-rose-500">beautiful flowers</span>
            <br />a part of your life.
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Experience the joy of fresh blooms delivered to your doorstep. From
            elegant bouquets to seasonal favorites, we bring nature&apos;s
            beauty to you.
          </p>

          <div className="mt-10 pb-8">
            <Link
              to={"/shop"}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-end">
          <div className="absolute top-10 right-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-50"></div>

          <img
            src={heroImage}
            alt="Pink Tulips"
            className="relative z-10 w-[60%] max-w-md object-covershadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
