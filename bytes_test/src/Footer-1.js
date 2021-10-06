import React from "react";
import "./FooterStyles-1.css";
import {Link } from 'react-router-dom';

const Footer = () => {
  return (
    
      <footer class="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div class="row">
              <div class="col-md-4">
                <div class="footer-pad  align-center">
                  <h4>About Company</h4>
                  <p>lorem ipsum dolor bdif djfb jdfbkjd dkjbcdkjf jdfbcdkjbf jdjfbdkbfckjc jfbedif  idjfbije  idfjneidf idfnceijd  eidf </p>
                </div>
              </div>     
               
              <div class="col-md-4">
                <div class="footer-pad  align-correct">
                  <h4>Quick Links</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/Policy">Home</a>
                    </li>
                    <li>
                      <a href="/CodeofEthics">Product</a>
                    </li>
                    <li>
                      <a href="/Policy">Pricing</a>
                    </li>
                    <li>
                      <a href="/Policy">Contact</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
              <div class="footer-pad  align-right">
              <h4>CONTACT US</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a>
                        <i class="fa fa-phone"></i> 7020044091
                        <br />
                      </a>
                      <a>
                        <i class="fa fa fa-envelope"></i>
                        info@company.org{" "}
                      </a>
                    </li>
                  </ul>
                <ul class="social-network social-circle">
                  <li>
                    <a href="" class="icoFacebook" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" class="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" class="icoInstagram" title="Instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            
          </div>
          <div className="row" id="copy">
              <div class="col-md-12 " >
                {/* <hr
                  style={{
                    height: "2px",
                    borderWidth: "100%",
                    color: "gray",
                    backgroundColor: "gray",
                  }}
                /> */}
                <p className="text-center">
                  &copy; powered by Diksha registered
                </p>
                <br />
              </div>
            </div>
        </div>
      </footer>
    
  );
};

export default Footer;
