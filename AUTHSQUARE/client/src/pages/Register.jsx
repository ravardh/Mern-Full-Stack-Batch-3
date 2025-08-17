import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(registerData);

    try {
      const res = await api.post("/auth/signup", registerData);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your fullName"
                value={registerData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={registerData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={registerData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to={"/login"} className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
