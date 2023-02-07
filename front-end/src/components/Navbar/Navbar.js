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
            <a className="n1-a" href="#basic-information">
              Basic Information
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#location-of-accident">
              Location Of Accident
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#vehicles-involved">
              Vehicles Involved
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#your-location-inside-the-vehicle">
              Your Location Inside The Vehicle
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#at-the-time-of-impact">
              At The Time Of Impact
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#immediately-following-the-accident">
              Immediately Following The Accident
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#your-work">
              Your Work
            </a>
          </li>
          <li className="n1-li">
            <a className="n1-a" href="#before-and-after-the-accident">
              Before And After The Accident
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
