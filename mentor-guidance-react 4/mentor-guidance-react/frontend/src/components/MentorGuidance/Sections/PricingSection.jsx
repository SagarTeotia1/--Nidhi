import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const PricingSection = () => {
  useEffect(() => {
    // Toggle button functionality
    document.querySelectorAll(".toggle-btn").forEach((button) => {
      button.addEventListener("click", function () {
        // Toggle active class on the clicked button
        document
          .querySelectorAll(".toggle-btn")
          .forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Manually update the other button's style
        if (this.classList.contains("monthly")) {
          document.querySelector(".quarterly").classList.remove("active");
        } else if (this.classList.contains("quarterly")) {
          document.querySelector(".monthly").classList.remove("active");
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll(".toggle-btn").forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section className="pricing-section" id="pricing-section">
      <div className="container">
        <h3 className="pricing-subheading">
          Mentorship as a <span>SERVICE</span>
        </h3>
        <h2 className="pricing-title">Unlock the value of mentorship.</h2>
        <p className="pricing-subtitle">
          Use credits to book calls with 400+ mentors on the platform. More
          credits mean more sessions with higher-tier mentors.
        </p>
        <div className="toggle-container">
          <button className="toggle-btn monthly active">MONTHLY</button>
          <button className="toggle-btn quarterly">QUARTERLY</button>
        </div>
        <div className="pricing-cards">
          {/*princing card-1 */}
          <div className="pricing-card">
            <h3>Lite</h3>
            <p className="price">$300/month</p>
            <p>Includes 30 credits per month.</p>
            <p>
              Great for trying out the platform and booking a few entry-level
              calls per month.
            </p>
            <Link to="/" className="cta-btn">
              Claim my MentorPass →
            </Link>
          </div>

          {/*pricing card-2 */}
          <div className="pricing-card">
            <h3>Standard</h3>
            <p className="price">$600/month</p>
            <p>Includes 60 credits per month.</p>
            <p>
              Great for scaling on the platform with a few mid-level calls per
              month.
            </p>
            <Link to="/" className="cta-btn">
              Claim my MentorPass →
            </Link>
          </div>

          {/*pricing card-3 */}
          <div className="pricing-card">
            <h3>Premium</h3>
            <p className="price">$1,200/month</p>
            <p>Includes 120 credits per month.</p>
            <p>
              Unlock your full potential with calls with our highest-tier
              mentors.
            </p>
            <Link href="to" className="cta-btn">
              Claim my MentorPass →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
