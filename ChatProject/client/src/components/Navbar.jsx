import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary text-primary-content flex justify-between items-center p-3">
        <h1 className="text-3xl font-bold">ChatApp</h1>
        <div className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
