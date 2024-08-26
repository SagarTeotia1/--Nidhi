import React from "react";
import { Link  as ScrollLink } from "react-scroll";

export const ProfileSection = () => {
  //! js logic for copying the link
  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section className="basic-profile-section" id="basic-profile-section">
      <div className="profile-section">
        <img
          src="/images/linkedin_DP.jpeg"
          alt="Profile Image"
          className="profile-img"
        />
        <h1 className="profile-name">Aniruddha Mishra</h1>
        <p className="profile-title">
          Paid Ads & Creative Strategy Expert | $120M+ Spend Managed Across
          Mobile Apps & DTC
        </p>
        <div className="profile-details">
          <span className="location">📍 Miami, United States (+05:30 UTC)</span>
          <span className="languages">🗣 English, Hindi</span>
          <span className="origin">🌍 from Mumbai, India</span>
          <span className="joined">🗓 Joined June, 2023</span>
        </div>
        <span className="response-time">⚡ Usually responds in 2 days</span>
      </div>

      <div className="availability-section">
        <div className="availability-info">
          <div className="top-section">
            <div className="pricing-terms">
              <h2>Free</h2>
              <span>Price per hour</span>
            </div>
            <div className="time-rating">
              <div className="time-blocks">
                <span>15 min</span>
                <span>30 min</span>
              </div>
              <span>Time Blocks Available</span>
            </div>
            <div className="rating">
              <span className="rating-star">⭐</span>
              <span className="rating-score">5.00</span>
              <span className="reviews">10 reviews / 14 sessions</span>
            </div>
          </div>
          <div className="availability-details">
            <div className="date-badge">
              <span>WED</span>
              <div className="date">21</div>
            </div>
            <div className="next-availability">
              <span>Next availability</span>
              <p>Wednesday, 21 August • 1:00 PM GMT+5:30</p>
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="request-call">Request a Call</button>
        <button className="message-me">Message me</button>
        <button className="add-to-list">Add to list</button>

        <div className="social-links">
          <a href="https://www.google.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.google.com/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="profile-links">
        <ScrollLink className="links" to="basic-profile-section" smooth={true} duration={500}>
          Profile
        </ScrollLink>
        <ScrollLink className="links" to="experty-section" smooth={true} duration={500}>
          Expertise
        </ScrollLink>
        <ScrollLink className="links" to="toolkit-section" smooth={true} duration={500}>
          Toolkit
        </ScrollLink>
        <ScrollLink className="links" to="reviews-section" smooth={true} duration={500}>
          Reviews (10)
        </ScrollLink>
        <span
          className="copy-link"
          id="copyLinkButton"
          onClick={handleCopyLink}
        >
          Copy profile link <i className="fas fa-link"></i>
        </span>
      </div>
    </section>
  );
};
