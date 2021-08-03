import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer bg-light text-center text-black">
        <div class="footer-copyright text-center py-3">
          © 2021 Copyright:<a>CEA</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
