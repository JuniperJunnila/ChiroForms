import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.js";
import Home from "../../components/Home/Home.js";
import Footer from "../../components/Footer/Footer.js";
import PageNotImplemented from "../PageNotImplemented/PageNotImplemented.js";

//r1
export default function AllRoutes({ appState }) {
  return (
    <div className="r1-bg" id="r1-bg">
      <BrowserRouter>
        <div className="r1-bx" id="r1-bx">
          <div className="r1-bx2" id="r1-bx2">
            <Navbar appState={appState} />
          </div>
          <div className="r1-bx2" id="r1-bx2">
            <Routes>
              <Route path="" element={<Home appState={appState} />} />
              <Route
                path="/our-philosophy"
                element={<PageNotImplemented pageName={"Our Philosophy"} />}
              />
            </Routes>
          </div>
          <div className="r1-bx3" id="footer">
            <Footer appState={appState} />
          </div>
        </div>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
