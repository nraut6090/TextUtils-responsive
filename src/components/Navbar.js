import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <form className="d-flex mx-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="panel container ml-5" style={{ display: props.panel }}>
        <div>
          <button
            className="btn btn-danger  mx-1 col"
            onClick={() => {
              props.customize_1();
            }}
            type="submit"
          ></button>
          <button
            className="btn btn-secondary  mx-1 col"
            onClick={() => {
              props.customize_2();
            }}
            type="submit"
          ></button>
          <button
            className="btn btn-success  mx-1 col"
            onClick={() => {
              props.customize_5();
            }}
            type="submit"
          ></button>
        </div>
      </div>

      <div
        className={`form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        } responsive-toggle`}
      >
        <input
          onClick={() => {
            props.toggleMode();
            props.panalize();
          }}
          className="form-check-input mt-3 mr-5"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //isRequired works when no default prop is passed
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About Text Here",
};
