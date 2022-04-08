import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faClose } from '@fortawesome/free-solid-svg-icons'
import { faTwitch , faFacebook , faTwitter , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Footer = () => {
    return (
        <footer className="site-footer">
        <div >
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde praesentium, officiis quia fuga veritatis cupiditate alias quaerat numquam illo ut!
              </p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
           <a href="#">Aimene hamidechi</a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook as IconProp}/></a></li>
                <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter as IconProp}/></a></li>
                <li><a className="dribbble" href="#"><FontAwesomeIcon icon={faTwitch as IconProp}/></a></li>
                <li><a className="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin as IconProp}/></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    );
};

export default Footer;