import React from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa';


const AllFlowersCard = ({ flower }) => {
  const { name, price, discount, rating, image, category, description } =
      flower;
  
    const discountedPrice = Math.round(price - (price * discount) / 100);
  
    return (
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <p className="text-sm text-rose-500 font-medium">{category}</p>

          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {name}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span className="text-sm text-gray-700 font-medium">{rating}</span>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between pt-3">
            <div>
              {discount > 0 ? (
                <>
                  <p className="text-sm text-gray-400 line-through">৳{price}</p>
                  <p className="text-lg font-bold text-gray-800">
                    ৳{discountedPrice}
                  </p>
                </>
              ) : (
                <p className="text-lg font-bold text-gray-800">৳{price}</p>
              )}
            </div>

            <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2">
              <FaCartPlus className="text-base" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default AllFlowersCard;