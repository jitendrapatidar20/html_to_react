import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
    <section className="footer-area footer-dark">
        <div className="container">
            <div className="row justify-content-center">
                 <div className="col-lg-4">
                    <div className="footer-logo text-center">
                        <a className="mt-30" href="index.html"><img src="assets/images/logo.svg" alt="Logo"/></a>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <ul className="social text-center mt-60">
                        <li><a href="https://facebook.com/uideckHQ"><i className="lni lni-facebook-filled"></i></a></li>
                        <li><a href="https://twitter.com/uideckHQ"><i className="lni lni-twitter-original"></i></a></li>
                        <li><a href="https://instagram.com/uideckHQ"><i className="lni lni-instagram-original"></i></a></li>
                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                    </ul>
                    </div>
                    <div className="col-lg-4">
                    <div className="footer-support text-center">
                        <span className="number">+8801234567890</span>
                        <span className="mail">support@uideck.com</span>
                    </div>
                     
                    </div>
                    <div className="copyright text-center mt-35">
                        <p className="text">Designed by <a href="https://uideck.com" rel="nofollow">UIdeck</a> and Built-with <a rel="nofollow" href="https://ayroui.com">Ayro UI</a> </p>
                    </div>
                
            </div> 
        </div> 
    </section>
    </React.Fragment>
  );
};
export default Footer;
