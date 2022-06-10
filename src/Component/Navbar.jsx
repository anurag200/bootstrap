import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow navbar-light py-4">
        <div className="container">
          <img
            src={require('../images/logo/logo-v3.png')}
            className="img-fluid"
            alt=""
          />
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={'/'}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={'/About'}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={'/Services'}
                >
                  Sarvise
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={'/Project'}
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={'/Blog'}>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={'/Contact'}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <button className=" ms-lg-4">Free Quote</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
