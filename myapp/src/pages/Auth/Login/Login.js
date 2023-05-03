import React, { useContext, useState } from "react";
import logimg from "../../../assets/imgs/login_img.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";


export default function Login() {


  const {CreateExistingUser} = useContext(AuthContext)


  let initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const [hidePass, setHidePass] = useState(true);

  const HandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  
  };
  const handlePassType = () => {
    setHidePass(!hidePass);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateExistingUser(state.email, state.password);
    } catch (error) {
      console.log(error);
    }

    console.log(state);
  };
  console.log(state);

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
                name="email"
                onChange={HandleChange}
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
                type={hidePass ? "password" : "text"}
                name="password"
                onChange={HandleChange}
              />
              <span className="px-2" onClick={handlePassType}>
                {hidePass ? (
                  <i class="fa-solid fa-eye-slash"></i>
                ) : (
                  <i class="fa-solid fa-eye"></i>
                )}
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-center my-4">
            <button onClick={handleSubmit} className="btn w-100 text-white px-3 fs-4 fw-bold bg-primary">
              Log in
            </button>
          </div>
          <Link
            to="/auth/forgetpassword"
            className="text-black text-decoration-underline"
          >
            Forgot your password?
          </Link>
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
            <Link to="/auth/register" className="text-decoration-underline">
              Sign up
            </Link>
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
