import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#fff5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our <span className="text-pink-600">Customers Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Ahmed",
              review:
                "Absolutely loved the flowers! Fresh, beautiful, and delivered on time.",
            },
            {
              name: "John Doe",
              review:
                "Great service and amazing quality. My wife was so happy!",
            },
            {
              name: "Nusrat Jahan",
              review: "Best flower shop online. Will definitely order again 💐",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 text-sm mb-4">“{item.review}”</p>
              <h4 className="font-semibold text-pink-600">{item.name}</h4>
              <div className="text-yellow-400 mt-2">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
