import React from "react";
import logimg from "../../../assets/imgs/login_img.png";

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <h1 className="fw-bold text-center text-md-start">Log in</h1>

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
            <button className="btn w-100 text-white px-3 fs-4 fw-bold bg-primary">
              Log in
            </button>
          </div>
          <p className="text-decoration-underline">Forgot your password?</p>
          <p className="text-center text-decoration-underline">OR</p>

          {/* Sign In With Other */}

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
            Don't have an account?
            <span className="text-decoration-underline">Sign up</span>
          </p>
        </div>

        <div className="col-md-6 d-none d-md-block">
          <div className="container">
            <div className="row  mt-5">
              <div className="col mt-5 d-flex justify-content-center">
                <img className="w-75 mt-5" src={logimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
