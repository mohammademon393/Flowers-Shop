import React, { use } from 'react';
import AllFlowersCard from './AllFlowersCard';

const AllFlowers = ({ flowersPromise }) => {
    const flowers = use(flowersPromise)
    console.log(flowers);
    return (
      <div className="py-6 max-w-7xl mx-auto text-center">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          {flowers.map((flower) => (
            <AllFlowersCard key={flower.id} flower={flower}></AllFlowersCard>
          ))}
        </div>
      </div>
    );
};

export default AllFlowers;