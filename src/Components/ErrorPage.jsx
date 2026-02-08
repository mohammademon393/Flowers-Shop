import { Link, useNavigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF5F7] px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-rose-500 text-6xl" />
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline border-rose-500 text-rose-500 hover:bg-rose-600 hover:text-white"
          >
            Go Back
          </button>

          <Link to="/" className="btn bg-rose-500 hover:bg-rose-600 text-white">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
