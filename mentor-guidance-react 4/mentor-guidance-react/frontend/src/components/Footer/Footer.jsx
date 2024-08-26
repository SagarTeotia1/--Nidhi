import React from "react";
import "../../styles/Footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer-app">
      {/*Zeber footer  */}
      <div
        className="container-wrap bg-footer-color rounded-0"
        style={{ maxWidth: "100%" }}
      >
        {/*footer form */}
        <div className="footer-form">
          <p>Join 10k+ founders subscribed to the mentor muse.</p>
          <form action="#" method="POST">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <button type="submit">Get smart!</button>
          </form>
        </div>
        {/*form ends--------------------------- */}

        {/*footer container  */}
        <div className="container">
          <div className="footer-inner">
            <div className="row wow fadeInUp">
              <div className="col-lg-3 col-md-6 col-sm-6 ram2">
                <div className="widget footer-widget widget-about">
                  <a href="#" className="footer-logo">
                    <img src="/images/zeberlogoS.jpeg" alt="Zeber" />
                  </a>
                  <p>
                    Zeber is a Business Community based Company. It is a fastest
                    growing Business Community that Devlops complete solutions
                    for your business.
                  </p>
                  <h4 className="footer-title">Social</h4>

                  {/*social-icons */}
                  <ul className="social-share-link">
                    <li>
                      <Link
                        className="d-flex align-items-center justify-content-center"
                        to="https://www.linkedin.com/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center justify-content-center"
                        to="https://www.mail.com/zeber"
                        target="_blank"
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center justify-content-center"
                        to="https://www.twitter.com/zeber"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center justify-content-center"
                        to="https://www.instagram.com/zeber"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center justify-content-center"
                        to="https://www.facebook.com/zeber"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*main-ofice */}
              <div className="col-lg-3 col-md-6 col-sm-6 ram">
                <div className="widget footer-widget widget-contact">
                  <h3 className="widget-title">Main Office</h3>

                  <ul className="widget-contact-info">
                    <li>
                      <i className="ei ei-icon_pin_alt"></i>Sector-22 <br />
                      Rohini, Delhi
                      <br />
                      India
                    </li>
                    <li>
                      <i className="ei ei-icon_mail_alt"></i>Zeber@gmail.com
                    </li>
                    <li>
                      <i className="ei ei-icon_phone"></i>+91 8750471736
                    </li>
                    <li>
                      <i className="ei ei-icon_phone"></i>+91 7065273202
                    </li>
                    <li>
                      <i className="ei ei-icon_phone"></i>+91 9818600364
                    </li>
                  </ul>
                </div>
              </div>

              {/*useful links */}
              <div className="col-lg-3 col-md-6 col-sm-6 ram1">
                <div
                  className="widget footer-widget widget-contact"
                  style={{ marginRight: "-15px" }}
                >
                  <h3 className="widget-title">Useful Links</h3>

                  <ul className="widget-contact-info">
                    <li>
                      <Link to="index.html">Home</Link>
                    </li>
                    <li>
                      <Link to="about.html">About</Link>
                    </li>
                    <li>
                      <Link to="service.html">Services</Link>
                    </li>
                    <li>
                      <Link to="blog.html">Blog</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*social media font-awesome links */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget footer-widget widget-contact">
                  <h3 className="widget-title">Socila-Media</h3>

                  <ul className="widget-contact-info">
                    <li>
                      <i className="fa-brands fa-youtube"></i>
                      <Link to="https://youtube.com/@sonamtiwari6553?si=rHawR65I3118EMSE">
                        Youtube
                      </Link>
                    </li>
                    <li>
                      <i className="fa-brands fa-instagram"></i>
                      <Link to="https://www.instagram.com/progress.mantra">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <i className="fa-brands fa-twitter"></i>
                      <Link to="https://x.com/ShivamT130?t=O-TO_dUNVJZ9mZR8I5aAgw&s=09">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <i className="fab fa-linkedin-in"></i>
                      <Link to="https://www.linkedin.com/in/shivamtiwari13">
                        Linkedln
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <Link to="https://github.com/progressmantraclassNamees">
                        E-Mail
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*other websites */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="widget footer-widget widget-contact"
                style={{ marginRight: "-15px" }}
              >
                <h3 className="widget-title">Other Websites</h3>

                <ul className="widget-contact-info">
                  <li>
                    <i className="fa-solid fa-link"></i>
                    <a href="index.html">e-library</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-link"></i>
                    <a href="about.html">Job portal</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-link"></i>
                    <a href="service.html">Events</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-link"></i>
                    <a href="blog.html">Startup Sevices</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-link"></i>
                    <a href="contact.html">Investor Portol</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*copy-right */}
          <div className="site-info">
            <div className="copyright text-center">
              <p>
                © 2024 All Rights Reserved by
                <a href="https://www.zeber.in" target="_blank">
                  Zeber
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
