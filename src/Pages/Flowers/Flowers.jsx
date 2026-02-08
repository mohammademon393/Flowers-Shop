import React, { Suspense } from "react";
import AllFlowers from "./AllFlowers";

const AllFlowersPromise = fetch("/allFlowers.json").then((res) => res.json());

const Flowers = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-bold mt-10 mb-4">
        All <span className="text-rose-500">Flowers</span>
      </h1>
      <p className="text-gray-400 font-normal text-center">Handpicked blooms for every mood
and every special moment</p>

      <div>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>}>
                <AllFlowers flowersPromise={AllFlowersPromise}></AllFlowers>
            </Suspense>
      </div>
    </div>
  );
};

export default Flowers;
