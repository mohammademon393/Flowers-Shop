import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#FFF5F7] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-rose-500">Us</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Have questions or need help? Reach out to us — we’d love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <FaPhoneAlt className="text-rose-500 text-xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <FaEnvelope className="text-rose-500 text-xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@yourapp.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <FaMapMarkerAlt className="text-rose-500 text-xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send us a message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full focus:border-rose-500"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full focus:border-rose-500"
                required
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="textarea textarea-bordered w-full focus:border-rose-500"
                required
              ></textarea>

              <button
                type="submit"
                className="btn w-full bg-rose-500 hover:bg-rose-600 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
