import React from "react";

//SCSS Tag Group: n1
export default function Navbar() {
  return (
    <nav className="n1-nav" id="n1-nav">
      <div>
        <a className="n1-bd" id="n1-bd" href="/">
          <img
            className="n1-bn"
            id="n1-bn"
            src="https://doc.vortala.com/childsites/uploads/1252/files/bg.jpg"
            alt="Lifestyle Health and Fitness Banner"
          />
        </a>

        <button
          className="n1-to"
          id="n1-to"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="n1-to2" id="n1-to2"></span>
        </button>
        <img
          className="n1-bd2"
          id="n1-bd2"
          src="https://doc.vortala.com/childsites/uploads/1252/files/logo2.png"
          alt="Lifestyle Health and Fitness Logo"
        />
      </div>
      <div className="n1-nav2" id="navbarSupportedContent">
        <ul className="n1-l">
          <li className="n1-li">
            <a className="n1-a" href="#aNav">
              A
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#bNav">
              B
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#cNav">
              C
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#dNav">
              D
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#eNav">
              E
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#fNav">
              F
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#gNav">
              G
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#hNav">
              H
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#iNav">
              I
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
