import React from "react";
import { FaTruck, FaLeaf, FaHeart, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-rose-500">FlowersShop</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaTruck className="text-4xl text-rose-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Same-day delivery to make your moments extra special.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaLeaf className="text-4xl text-rose-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fresh Flowers</h3>
            <p className="text-sm text-gray-600">
              Handpicked fresh blooms from trusted local gardens.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaHeart className="text-4xl text-rose-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
            <p className="text-sm text-gray-600">
              Every bouquet is crafted with care and passion.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaHeadset className="text-4xl text-rose-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              We’re always here to help you with your orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
