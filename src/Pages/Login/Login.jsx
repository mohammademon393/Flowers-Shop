import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 bg-[#fff1f4] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-rose-600">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">
            Please login to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-rose-500" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-rose-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition shadow-md"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <button className="w-full border border-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5"
          />
          <span className="text-sm font-medium text-gray-600">
            Continue with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-rose-600 font-medium hover:underline"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
