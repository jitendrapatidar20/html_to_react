import React,{useEffect,useState} from 'react';
import '../App.css';
export default class Portfolio extends React.Component {  
render() {  
return (
<React.Fragment>
  <section  className="portfolio-area portfolio-four pb-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10">
          <div className="section-title text-center pb-10">
            <h3 className="title">Featured Works</h3>
            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="portfolio-menu text-center mt-50">
            <ul>
              <li data-filter="*" className="active">ALL WORK</li>
              <li data-filter=".branding-4">BRANDING</li>
              <li data-filter=".marketing-4">MARKETING</li>
              <li data-filter=".planning-4">PLANNING</li>
              <li data-filter=".research-4">RESEARCH</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <div className="row no-gutters grid mt-50" style={{position: 'relative',height:'824.952px'}}>
          <div className="col-lg-4 col-sm-6 branding-4 planning-4" style={{position: 'absolute',left: '0px',top: '0px'}}>
          <div className="single-portfolio">
            <div className="portfolio-image">
              <img src="assets/images/portfolio/1.png" alt=""/>
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="portfolio-content">
                  <div className="portfolio-icon">
                    <a className="image-popup" href="assets/images/portfolio/1.png"><i className="lni lni-zoom-in"></i></a>
                    <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape"/>
                  </div>
                  <div className="portfolio-icon">
                    <a href="#"><i className="lni lni-link"></i></a>
                    <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 marketing-4 research-4" style={{position: 'absolute',left: '274.984px',top: '0px'}}>
        <div className="single-portfolio">
          <div className="portfolio-image">
            <img src="assets/images/portfolio/2.png" alt=""/>
            <div className="portfolio-overlay d-flex align-items-center justify-content-center">
              <div className="portfolio-content">
                <div className="portfolio-icon">
                  <a className="image-popup" href="assets/images/portfolio/2.png"><i className="lni lni-zoom-in"></i></a>
                  <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
                </div>
                <div className="portfolio-icon">
                  <a href="#"><i className="lni lni-link"></i></a>
                  <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 branding-4 marketing-4" style={{position: 'absolute',left: '549.968px',top: '0px'}}>
      <div className="single-portfolio">
        <div className="portfolio-image">
          <img src="assets/images/portfolio/3.png" alt=""/>
          <div className="portfolio-overlay d-flex align-items-center justify-content-center">
            <div className="portfolio-content">
              <div className="portfolio-icon">
                <a className="image-popup" href="assets/images/portfolio/3.png"><i className="lni lni-zoom-in"></i></a>
                <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
              </div>
              <div className="portfolio-icon">
                <a href="#"><i className="lni lni-link"></i></a>
                <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 planning-4 research-4" style={{position: 'absolute',left: '0px',top: '274.984px'}}>
    <div className="single-portfolio">
      <div className="portfolio-image">
        <img src="assets/images/portfolio/4.png" alt=""/>
        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
          <div className="portfolio-content">
            <div className="portfolio-icon">
              <a className="image-popup" href="assets/images/portfolio/4.png"><i className="lni lni-zoom-in"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
            <div className="portfolio-icon">
              <a href="#"><i className="lni lni-link"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 marketing-4" style={{position: 'absolute',left: '274.984px',top: '274.984px'}}>
    <div className="single-portfolio">
      <div className="portfolio-image">
        <img src="assets/images/portfolio/5.png" alt=""/>
        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
          <div className="portfolio-content">
            <div className="portfolio-icon">
              <a className="image-popup" href="assets/images/portfolio/5.png"><i className="lni lni-zoom-in"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
            <div className="portfolio-icon">
              <a href="#"><i className="lni lni-link"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 planning-4" style={{position: 'absolute',left: '549.968px',top: '274.984px'}}>
    <div className="single-portfolio">
      <div className="portfolio-image">
        <img src="assets/images/portfolio/6.png" alt=""/>
        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
          <div className="portfolio-content">
            <div className="portfolio-icon">
              <a className="image-popup" href="assets/images/portfolio/6.png"><i className="lni lni-zoom-in"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
            <div className="portfolio-icon">
              <a href="#"><i className="lni lni-link"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 research-4"  style={{position: 'absolute',left: '0px',top: '549.968px'}}>
    <div className="single-portfolio">
      <div className="portfolio-image">
        <img src="assets/images/portfolio/7.png" alt=""/>
        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
          <div className="portfolio-content">
            <div className="portfolio-icon">
              <a className="image-popup" href="assets/images/portfolio/7.png"><i className="lni lni-zoom-in"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
            <div className="portfolio-icon">
              <a href="#"><i className="lni lni-link"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 branding-4 planning-4" style={{position: 'absolute',left: '274.984px',top: '549.968px'}}>
    <div className="single-portfolio">
      <div className="portfolio-image">
        <img src="assets/images/portfolio/8.png" alt=""/>
        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
          <div className="portfolio-content">
            <div className="portfolio-icon">
              <a className="image-popup" href="assets/images/portfolio/8.png"><i className="lni lni-zoom-in"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
            <div className="portfolio-icon">
              <a href="#"><i className="lni lni-link"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-sm-6 marketing-4" style={{position: 'absolute',left:'549.968px',top:'549.968px'}}>
    <div className="single-portfolio">
      <div className="portfolio-image">
        <img src="assets/images/portfolio/9.png" alt=""/>
        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
          <div className="portfolio-content">
            <div className="portfolio-icon">
              <a className="image-popup" href="assets/images/portfolio/9.png"><i className="lni lni-zoom-in"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
            <div className="portfolio-icon">
              <a href="#"><i className="lni lni-link"></i></a>
              <img src="assets/images/portfolio/shape.svg" alt="shape" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div> 
    </div>
    </div> 
    </div> 
  </section>
</React.Fragment>
);
}  
}