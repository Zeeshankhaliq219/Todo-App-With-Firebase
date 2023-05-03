import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default function Header() {

  const { IsLogin, SignOut } = useContext(AuthContext);


  


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-primary fs-2 fw-bold">
          <span>
            <i className="fa-solid fa-calendar-check"></i>
          </span>
          <span className="ps-2">Todo List</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!IsLogin ? (
              <>
                <li className="nav-item me-md-5">
                  <Link
                    to="/auth/login"
                    className="bg-primary text-white fw-bold fs-3 py-1 px-3 rounded text-decoration-none"
                  >
                    <span className="mb-4">Login</span>
                  </Link>
                </li>
                <li className="nav-item me-md-5">
                  <Link
                    to="/auth/register"
                    className="bg-primary text-white  py-1 px-3 rounded fw-bold fs-3 text-decoration-none"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item me-md-5">
                <button
                    onClick={ SignOut }
                  className="bg-primary text-white border-0  py-1 px-3 rounded fw-bold fs-3 text-decoration-none"
                >
                  LogOut
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
