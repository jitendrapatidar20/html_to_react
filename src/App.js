import React, { Component } from "react";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
class App extends Component {
render() {
return (
<Router>
  <React.Fragment>
    {/* <div className="preloader">
      <div className="loader">
        <div className="ytp-spinner">
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <section className="navbar-area sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
              <img src="assets/images/logo-2.svg" alt="Logo"/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NavLink to={'/'} className="page-scroll"> Home </NavLink>
                  </li>
                  <li className="nav-item" >
                    <NavLink to={'/services'} className="page-scroll">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/portfolio'} className="page-scroll">Portfolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/about'} className="page-scroll">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/pricing'} className="page-scroll">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/testimonial'} className="page-scroll">Testimonial</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/team'} className="page-scroll">Team</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/contact'} className="page-scroll">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar-btn d-none d-sm-inline-block">
                <ul>
                  <li><a className="solid" href="#">Download</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/about' component={About} />
      <Route path='/pricing' component={Pricing} />
      <Route path='/testimonial' component={Testimonial} />
      <Route path='/team' component={Team} />
      <Route path='/contact' component={Contact} />
      {/* 
      <Route component={Notfound} />
      */}
    </Switch>
    <Footer/>
  </React.Fragment>
</Router>
);
}
}
export default App;