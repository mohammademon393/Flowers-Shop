import React from "react";
import { Link } from "react-router";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[#fff1f4] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Your <span className="text-rose-600">Cart</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Single Item */}
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-col sm:flex-row gap-4 bg-white p-5 rounded-xl shadow"
              >
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400"
                  alt="Flower"
                  className="w-full sm:w-28 h-28 object-cover rounded-lg"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Pink Tulip Bouquet</h3>
                  <p className="text-sm text-gray-500">
                    Fresh flowers for special moments
                  </p>

                  <div className="flex flex-wrap items-center justify-between mt-4 gap-3">
                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button className="px-3 py-1 border rounded-md hover:bg-rose-500 hover:text-white">
                        -
                      </button>
                      <span className="font-medium">1</span>
                      <button className="px-3 py-1 border rounded-md hover:bg-rose-500 hover:text-white">
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-semibold text-rose-600">$120</p>
                  </div>
                </div>

                {/* Remove */}
                <button className="text-sm text-gray-400 hover:text-red-500 self-start sm:self-center">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$240</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$20</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800 border-t pt-3">
                <span>Total</span>
                <span className="text-rose-600">$260</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition">
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="block text-center mt-4 text-sm text-rose-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
