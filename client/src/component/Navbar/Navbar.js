import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand nb-custom" href="/">
            CEA
          </a>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <a className="nav-item nav-link active" href="/">
              Home{" "}
            </a>
            <a className="nav-item nav-link" href="/">
              Features
            </a>
            <a className="nav-item nav-link" href="/">
              Pricing
            </a>
            <a className="nav-item nav-link disabled" href="/">
              Disabled
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
