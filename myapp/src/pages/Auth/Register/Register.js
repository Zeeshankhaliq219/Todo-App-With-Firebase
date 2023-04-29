import React from "react";
import appimg from "../../../assets/imgs/register/app downloads.jpg";
import businesimg from "../../../assets/imgs/register/in business.jpg";
import tasksimg from "../../../assets/imgs/register/tasks completed.jpg";
import proUserimg from "../../../assets/imgs/register/pro users.jpg";

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <h1 className="fw-bold text-center text-md-start">Sign up</h1>

            <div className="d-flex flex-column border pb-1 mt-4 rounded">
              <label className="ps-2 py-2" htmlFor="email">
                Email
              </label>
              <div className="d-flex justify-content-between align-items-center px-2">
                <input
                  className="w-100 py-1 border-0 focus"
                  id="email"
                  placeholder="Enter Your email..."
                  type="email"
                />
              </div>
            </div>
            <div className="d-flex flex-column border pb-1 mt-4 rounded">
              <label className="ps-2 py-2" htmlFor="password">
                Password
              </label>
              <div className="d-flex justify-content-between align-items-center px-2">
                <input
                  className="w-100 py-1 border-0 focus"
                  id="password"
                  placeholder="Enter Your email..."
                  type="email"
                />
                <span className="px-2">
                  <i class="fa-solid fa-eye-slash"></i>
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-center my-4">
              <button className="btn text-white fs-4 fw-bold bg-primary">
                Sign Up With Email
              </button>
            </div>
            <p className="text-center text-decoration-underline">OR</p>

            {/* Sign Up With Other */}

            <div>
              <div className="border rounded d-flex justify-content-center align-items-center py-2 my-3">
                <span className="pe-3 fs-5">
                  <i class="fa-brands fa-google fs-3 text-danger"></i>
                </span>
                <span className="ps-2 fs-5">Continue With Google</span>
              </div>
              <div className="border rounded d-flex justify-content-center align-items-center py-2 my-3">
                <span className="pe-3  ">
                  <i class="fa-brands fa-facebook text-info fs-3"></i>
                </span>
                <span className="ps-2 fs-5">Continue With Facebook</span>
              </div>
            </div>
            <p className="text-center">
              Already signed Up?{" "}
              <span className="text-decoration-underline">Go to login</span>
            </p>
          </div>

          <div className="col-md-6 d-none d-md-block  ">
            <div className="container">
              <div className="row pt-5">
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <img className="img-fluid h-75" src={appimg} alt="" />
                  <p className="text-center pt-2">
                    <span className="fw-bold">30 million+</span> <br />
                    <span className="fs-6">app downloads</span>
                  </p>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <img className="img-fluid h-75" src={businesimg} alt="" />
                  <p className="text-center pt-2">
                    <span className="fw-bold">15 years+</span> <br />
                    <span className="fs-6">in business</span>
                  </p>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <img className="img-fluid h-75" src={tasksimg} alt="" />
                  <p className="text-center pt-2">
                    <span className="fw-bold">2 billion+</span> <br />
                    <span className="fs-6">tasks completed</span>
                  </p>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <img className="img-fluid h-75" src={proUserimg} alt="" />
                  <p className="text-center pt-2">
                    <span className="fw-bold">1 million+</span> <br />
                    <span className="fs-6">pro users</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
