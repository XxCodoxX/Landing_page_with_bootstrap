import React from "react";
import footerLogo from "../../img/footerlogo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Fotter = () => {
  return (
    <>
      <footer>
        <div class="cwUs">
          <div class="container">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="socialBtns" style={{color:"#fff"}}>
                  <a href="">
                    <FacebookIcon/>
                  </a>
                  <a href="">
                    <TwitterIcon/>
                  </a>
                  <p>Connect With Us</p>
                  <a href="">
                    <PinterestIcon/>
                  </a>
                  <a href="">
                    <LinkedInIcon/>
                  </a>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
        </div>
        <div class="footer-sec">
          <div class="container">
            <div class="row footer-sec-1">
              <div class="col-md-3">
                <p class="footer-sec-head">Our Company</p>
                <ul class="footer-sec-links">
                  <li>
                    <a href="#">About SeekaHost™</a>{" "}
                  </li>
                  <li>
                    <a href="#">SeekaHost™ University</a>{" "}
                  </li>
                  <li>
                    <a href="#">SeekaHost Blog</a>{" "}
                  </li>
                  <li>
                    <a href="#">Contact Us</a>{" "}
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <p class="footer-sec-head">Community & Resources</p>
                <ul class="footer-sec-links">
                  <li>
                    <a href="#">PBN Demysti</a>{" "}
                  </li>
                  <li>
                    <a href="#">Expired Domains Buying Guide</a>{" "}
                  </li>
                  <li>
                    <a href="#">Check Domain</a>{" "}
                  </li>
                  <li>
                    <a href="#">WP Hosting</a>{" "}
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <p class="footer-sec-head">Support Services</p>
                <ul class="footer-sec-links">
                  <li>
                    <a href="#">Private Blog Network Guid</a>{" "}
                  </li>
                  <li>
                    <a href="#">PBN SEO</a>{" "}
                  </li>
                  <li>
                    <a href="#">Frequently Asked</a>{" "}
                  </li>
                  <li>
                    <a href="#">Client Area</a>{" "}
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <img
                  src={footerLogo}
                  alt="seekahost"
                  width="168"
                  class="img-fluid"
                />
                <p class="footer-sec-head">
                  © 2021 SeekaHost™ Ltd <br />
                  Web Hosting Company
                </p>
              </div>
            </div>
            <div class="row copyrigth">
              <div class="col-md-6 mb-4">
                <p class="copyright-text">
                  Copyrigth © 2021 SeekaHost Ltd. All Right Reserved.
                </p>
                <div class="">
                  <p>
                    By using this site, You agree to the Universal Terms of
                    Service.
                  </p>
                  <p >
                    <span class="right-border">
                      <a href="#" style={{color:"#fff"}}>Terms and Policies</a>
                    </span>
                    <span class="right-border">
                      <a href="#" style={{color:"#fff"}}>Privacy Policies</a>
                    </span>
                    <span class="right-border">
                      <a href="#" style={{color:"#fff"}}>Cookie Policy</a>
                    </span>
                    <span class="right-border">
                      <a href="#" style={{color:"#fff"}}>Refund Policy</a>
                    </span>
                  </p>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <p>Pay with confidence & security</p>
                <a href="" className="payment-icons m-1">
                  <i className="fab fa-cc-visa"></i>
                </a>
                <a href="" className="payment-icons m-1">
                  <i className="fab fa-cc-visa"></i>
                </a>
                <a href="" className="payment-icons m-1">
                  <i className="fab fa-cc-mastercard"></i>
                </a>
                <a href="" className="payment-icons m-1">
                  <i className="fab fa-cc-mastercard"></i>
                </a>
                <a href="" className="payment-icons m-1">
                  <i className="fab fa-cc-jcb"></i>
                </a>
                <a href="" className="payment-icons m-1">
                  <i className="fab fa-cc-paypal"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
