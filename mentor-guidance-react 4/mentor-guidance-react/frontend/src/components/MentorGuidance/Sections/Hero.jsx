import React  from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  {
    /* hook useNavigation */
  }
  const navigate = useNavigate();

  {
    /*hero section */
  }
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Book 1:1 calls with the world's top startup mentors.</h1>
        <p>⭐⭐⭐⭐⭐ 4.92/5 Rating (1000s of calls)</p>

        {/*Become-mentor-primary button */}
        <div className="button-container">
          {/*button one */}
        <button
          className="cta-button"
          onClick={() => {
            navigate("/become-mentor");
          }}
        >
          Become a Member
        </button>

        {/**button 2 */}
        <button
          className="cta-button"
          onClick={() => {
            navigate("/become-mentor");
          }}
        >
          Mentorship
        </button>
        </div>
        
        <p className="subtext">
          Learn from founders/operators of top DTC brands.
        </p>

        {/*hero brands */}
        <div className="brands">
          <img
            src="/images/hero-logos.png"
            width="448"
            sizes="(max-width: 479px) 90vw, 450px"
            alt=""
            className="image-79-copy"
          />
        </div>
      </div>

      {/*hero image */}
      <div className="hero-image">
        {/* Hero Buttons above the hero-img */}
        <div className="hero-buttons">
          <ScrollLink to="mentors-section" smooth={true} duration={500}>
            <button className="mentor-button">Meet our Mentors</button>
          </ScrollLink>
          <ScrollLink to="pricing-section" smooth={true} duration={2000}>
            <button className="pricing-button">Pricing</button>
          </ScrollLink>
        </div>
        {/*img */}
        <img src="/images/hero-image.png" alt="Video Call" />
      </div>
    </section>
  );
};

export default Hero;
