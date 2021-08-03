import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// import Navbar from "./component/Navbar/navbarComponent";
// import HomePage from "./component/HomePage/homepageComponent";
// import Footer from "./component/Footer/footerComponent";
import HomeComponent from "./component/Home/HomeComponent.js";
import Navbar from "./component/Navbar/Navbar.js";
import Footer from "./component/Footer/Footer.js";



function App() {
  return (
    <Router>
      <div className="container-custom">
      <Navbar />
      <br/>
      <Route path="/" exact component={HomeComponent} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
