import React, { useState } from "react";

const SignUp = ({ toggle }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match!";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Create Account
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
                  : "border-gray-300 focus:ring-2 focus:ring-blue-400"
              }`}
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-2">{errors.username}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none transition-all duration-300 ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-400"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-2">{errors.email}</p>
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
                  : "border-gray-300 focus:ring-2 focus:ring-blue-400"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-2">{errors.password}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none transition-all duration-300 ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-2 focus:ring-red-400"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-400"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-pink-500"
          >
            Sign Up
          </button>
          <p
            onClick={() => toggle("signIn")}
            className="text-blue-600 hover:text-blue-800 text-center cursor-pointer mt-4 underline"
          >
            Already have an account? Sign In
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
