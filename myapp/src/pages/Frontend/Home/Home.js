import React from "react";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-7 mt-sm-5 pt-sm-5">
            <h1 className=" text-center heading">
              Organize your work and life, finally.
            </h1>
            <p className="fs-3 text-center px-3">
              Become focused, organized, and calm with Todoist. The world’s #1
              task manager and to-do list app.
            </p>
            <div className="d-flex justify-content-center mb-3">
              <Link to="/adddata" className="btn bg-primary text-white fw-bold px-5 py-2">
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
