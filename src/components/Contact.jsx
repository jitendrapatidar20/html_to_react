import React,{useEffect,useState} from 'react';
import '../App.css';

export default class Contact extends React.Component {  
  render() {  
    return (
        <React.Fragment>
        <section  className="contact-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="section-title text-center pb-30">
                        <h3 className="title">Contact</h3>
                        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-map mt-30">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                </div>
            </div> 
            <div className="contact-info pt-30">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-contact-info contact-color-1 mt-30 d-flex ">
                            <div className="contact-info-icon">
                                <i className="lni lni-map-marker"></i>
                            </div>
                            <div className="contact-info-content media-body">
                                <p className="text"> Elizabeth St, Melbourne<br/>1202 Australia.</p>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-contact-info contact-color-2 mt-30 d-flex ">
                            <div className="contact-info-icon">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="contact-info-content media-body">
                                <p className="text">hello@ayroui.com</p>
                                <p className="text">support@uideck.com</p>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-contact-info contact-color-3 mt-30 d-flex ">
                            <div className="contact-info-icon">
                                <i className="lni lni-phone"></i>
                            </div>
                            <div className="contact-info-content media-body">
                                <p className="text">+333 789-321-654</p>
                                <p className="text">+333 985-458-609</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-wrapper form-style-two pt-115">
                        <h4 className="contact-title pb-10"><i className="lni lni-envelope"></i> Leave <span>A Message.</span></h4>
                        
                        <form id="contact-form" action="http://localhost/react_tutorial/myreactapp/public/assets/contact.php" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-input mt-25">
                                        <label>Name</label>
                                        <div className="input-items default">
                                            <input name="name" type="text" placeholder="Name"/>
                                            <i className="lni lni-user"></i>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input mt-25">
                                        <label>Email</label>
                                        <div className="input-items default">
                                            <input type="email" name="email" placeholder="Email"/>
                                            <i className="lni lni-envelope"></i>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-md-12">
                                    <div className="form-input mt-25">
                                        <label>Massage</label>
                                        <div className="input-items default">
                                            <textarea name="massage" placeholder="Massage"></textarea>
                                            <i className="lni lni-pencil-alt"></i>
                                        </div>
                                    </div> 
                                </div>
                                <p className="form-message"></p>
                                <div className="col-md-12">
                                    <div className="form-input light-rounded-buttons mt-30">
                                        <button className="main-btn light-rounded-two">Send Message</button>
                                    </div> 
                                </div>
                            </div> 
                        </form>
                    </div> 
                </div>
            </div>
        </div> 
    </section>
        </React.Fragment>
    );
  }  
}  
