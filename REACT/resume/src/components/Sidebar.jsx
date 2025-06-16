import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/Steve-Jobs.webp";

function Sidebar() {
  return (
    <>
      <div className="w-25 bg-info-subtle">
        <div className="text-center p-3">
          <img
            src={image}
            alt=""
            className="rounded-circle border border-3 border-dark object-fit-cover p-1"
            width={"150px"}
            height={"150px"}
          />
          <div className="fs-5 fw-bold">
            Steve Jobs
          </div>
        </div>

        <ul className="list-unstyled p-5 d-grid gap-3 fs-4">
          <li>
            <Link to={"/"} className="text-decoration-none text-dark hover">
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"/about"}
              className="text-decoration-none text-dark hover"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to={"/education"}
              className="text-decoration-none text-dark hover"
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to={"/projects"}
              className="text-decoration-none text-dark hover"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to={"/certifications"}
              className="text-decoration-none text-dark hover"
            >
              Certifications
            </Link>
          </li>

          <li>
            <Link
              to={"/contact"}
              className="text-decoration-none text-dark hover"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
