import React, { use } from "react";
import FutureFlowerCard from "./FutureFlowerCard";
import { Link } from "react-router";

const FutureFlower = ({ flowersPromise }) => {
    const flowers = use(flowersPromise);
    console.log(flowers);
    

  return (
    <div className="py-6 mt-10 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our Future <span className="text-rose-500">Flowers</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        {flowers.map((flower) => (
          <FutureFlowerCard key={flower.id} flower={flower} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          to="/allFlowers"
          className="hover:text-white hover:bg-rose-600 font-medium text-rose-600 border border-rose-500 px-6 py-3 rounded-xl transition"
        >
          View All Flowers
        </Link>
      </div>
    </div>
  );
};

export default FutureFlower;
