import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-yellow-200 items-center">
      <Link to={"/"} className="mr-4 text-3xl font-bold text-gray-800 hover:underline">
        Auth Square
      </Link>
      <div>
        <Link to={"/login"} className="mr-4 text-gray-800 hover:underline">
          Login
        </Link>
        <Link to={"/register"} className="text-gray-800 hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
