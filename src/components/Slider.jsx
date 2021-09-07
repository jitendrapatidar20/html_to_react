import React from "react";

const Slider = () => {
  return (
    <React.Fragment>

     <section className="slider_area">
        <div id="carouselThree" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselThree" data-slide-to="0" className="active"></li>
                <li data-target="#carouselThree" data-slide-to="1"></li>
                <li data-target="#carouselThree" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-content">
                                    <h1 className="title">Business is Now Digital</h1>
                                    <p className="text">We blend insights and strategy to create digital products for forward-thinking organisations.</p>
                                    <ul className="slider-btn rounded-buttons">
                                        <li><a className="main-btn rounded-one" href="#">GET STARTED</a></li>
                                        <li><a className="main-btn rounded-two" href="#">DOWNLOAD</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="slider-image-box d-none d-lg-flex align-items-end">
                        <div className="slider-image">
                            <img src="assets/images/slider/1.png" alt="Hero" />
                        </div>
                    </div> 
                </div> 

                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-content">
                                    <h1 className="title">Crafted for Business</h1>
                                    <p className="text">We blend insights and strategy to create digital products for forward-thinking organisations.</p>
                                    <ul className="slider-btn rounded-buttons">
                                        <li><a className="main-btn rounded-one" href="#">GET STARTED</a></li>
                                        <li><a className="main-btn rounded-two" href="#">DOWNLOAD</a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div> 
                    <div className="slider-image-box d-none d-lg-flex align-items-end">
                        <div className="slider-image">
                            <img src="assets/images/slider/2.png" alt="Hero" />
                        </div>
                    </div> 
                </div>

                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-content">
                                    <h1 className="title">Based on Bootstrap 4</h1>
                                    <p className="text">We blend insights and strategy to create digital products for forward-thinking organisations.</p>
                                    <ul className="slider-btn rounded-buttons">
                                        <li><a className="main-btn rounded-one" href="#">GET STARTED</a></li>
                                        <li><a className="main-btn rounded-two" href="#">DOWNLOAD</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-image-box d-none d-lg-flex align-items-end">
                        <div className="slider-image">
                            <img src="assets/images/slider/3.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
                <i className="lni lni-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
                <i className="lni lni-arrow-right"></i>
            </a>
        </div>
    </section>
    

    </React.Fragment>
  );
};
export default Slider;
