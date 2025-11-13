import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Resources from "./pages/resources";
import Jobs from "./Jobs/jobs";
import "./App.css";
import "remixicon/fonts/remixicon.css"; // optional if added via public/index.html

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h2 className="logo">Career Portal</h2>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="ri-book-open-line"></i> Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="ri-briefcase-line"></i> Jobs
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Resources />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
