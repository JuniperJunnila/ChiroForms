import React from "react";
import NavButtons from "./NavButtons/NavButtons.js";


export default function Navbar() {
  return (
    <nav className="nav" id="nav">
      <div>
        <a className="brand" id="brand" href="/">
          <img
            className="logo"
            id="logo"
            src="https://contentcoms.co.uk/wp-content/uploads/2017/05/case-study-header-placeholder.png"
            alt="Banner"
          />
        </a>
        <button
          className="toggle"
          id="toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="toggle-icon" id="toggle-icon"></span>
        </button>
      </div>
      <div className="navbar-supported-content" id="navbarSupportedContent">
        <ul className="list" id="list">
          <div className="list-container" id="list-container">
            <li className="list-item" id="list-item">
              <a
                className="link-active"
                id="link-active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>

            <li className="list-item" id="list-item">
              <a
                className="link-active"
                id="link-active"
                aria-current="page"
                href="/our-philosophy"
              >
                Our Philosophy
              </a>
            </li>

            <li className="dropdown" id="dropdown">
              <a
                className="dropdown-toggle"
                id="dropdown-toggle"
                href="/about-us"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" id="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/our-curriculum"
                  >
                    Our Curriculum
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/our-staff"
                  >
                    Our Staff
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown" id="dropdown">
              <a
                className="dropdown-toggle"
                id="dropdown-toggle"
                href="/our-programs"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programs
              </a>
              <ul className="dropdown-menu" id="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/green-room"
                  >
                    Green Room (2-3 Years)
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/red-and-purple-rooms"
                  >
                    Red & Purple Rooms (3-4 Years)
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/blue-and-yellow-rooms"
                  >
                    Blue & Yellow Rooms (PreK)
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown" id="dropdown">
              <a
                className="dropdown-toggle"
                id="dropdown-toggle"
                href="/for-our-families"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Our Families
              </a>
              <ul className="dropdown-menu" id="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/forms-and-nfo"
                  >
                    Forms & Information
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    id="dropdown-item"
                    href="/family-resources"
                  >
                    Family Resources
                  </a>
                </li>
              </ul>
            </li>

            <li className="list-item" id="list-item">
              <a
                className="link-active"
                id="link-active"
                aria-current="page"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
            <li className="buttons" id="buttons">
              <NavButtons />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
