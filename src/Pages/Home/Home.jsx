import React, { Suspense } from "react";
import Hero from "./Hero";
import FutureFlower from "./FutureFlower";
import Testimonials from "./Testimonials ";
import WhyChooseUs from "./WhyChooseUs ";

const flowersPromise = fetch("/flowers.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <FutureFlower flowersPromise={flowersPromise}></FutureFlower>
        </Suspense>
      </div>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
