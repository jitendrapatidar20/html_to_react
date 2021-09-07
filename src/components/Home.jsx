import React,{useEffect,useState} from 'react';
import Footer from "./Footer";
import Slider from "./Slider";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import About from "./About";
import Testimonial from "./Testimonial";
import Team from "./Team";
import '../App.css';

export default class Home extends React.Component {  
  render() {  
    return (
        <React.Fragment>
        <Slider/>
        <About/>
        <Pricing/>
        <Portfolio/>
        <Team/>
        </React.Fragment>
    );
  }  
}  