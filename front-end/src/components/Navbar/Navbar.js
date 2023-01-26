import React from "react";

export default function Navbar() {
  return (
    <nav className="nav" id="nav">
      <div>
        <a className="brand" id="brand" href="/">
          <img
            className="banner"
            id="banner"
            src="https://doc.vortala.com/childsites/uploads/1252/files/bg.jpg"
            alt="Lifestyle Health and Fitness Banner"
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
        <img
          className="logo"
          id="logo"
          src="https://doc.vortala.com/childsites/uploads/1252/files/logo2.png"
          alt="Lifestyle Health and Fitness Logo"
        />
      </div>
      <div className="navbar-supported-content" id="navbarSupportedContent">
        <ul className="list">
          <li className="list-item">
            <a className="link-active" href="#aNav">
              A
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#bNav">
              B
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#cNav">
              C
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#dNav">
              D
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#eNav">
              E
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#fNav">
              F
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#gNav">
              G
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#hNav">
              H
            </a>
          </li>
          <li className="list-item">
            <a className="link-active" href="#iNav">
              I
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
