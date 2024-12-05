import React, { useState } from "react";

const SignIn = ({ toggle }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none transition-all duration-300 ${
                errors.username
                  ? "border-red-500 focus:ring-2 focus:ring-red-400"
                  : "border-gray-300 focus:ring-2 focus:ring-indigo-400"
              }`}
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-2">{errors.username}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none transition-all duration-300 ${
                errors.password
                  ? "border-red-500 focus:ring-2 focus:ring-red-400"
                  : "border-gray-300 focus:ring-2 focus:ring-indigo-400"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-2">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-pink-500"
          >
            Sign In
          </button>
          <p
            onClick={() => toggle("signUp")}
            className="text-indigo-600 hover:text-indigo-800 text-center cursor-pointer mt-4 underline"
          >
            Don't have an account? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
