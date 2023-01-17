import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.js";
import Home from "../../components/Home/Home.js";
import Footer from "../../components/Footer/Footer.js";
import PageNotImplemented from "../PageNotImplemented/PageNotImplemented.js";
import FlexTests from "../../components/FlexTests/FlexTests.js";

export default function AllRoutes({ appState }) {
  return (
    <div className="all-routes" id="all-routes">
      <BrowserRouter>
        <div className="browser-router" id="browser-router">
          <div className="route-divs" id="route-divs">
            <Navbar appState={appState} />
          </div>
          <div className="route-divs" id="route-divs">
            <Routes>
              <Route path="" element={<Home appState={appState} />} />
              <Route path="/flex-tests" element={<FlexTests />} />
              <Route
                path="/our-philosophy"
                element={<PageNotImplemented pageName={"Our Philosophy"} />}
              />
            </Routes>
          </div>
          <div className="footer-route" id="footer">
            <Footer appState={appState} />
          </div>
        </div>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
