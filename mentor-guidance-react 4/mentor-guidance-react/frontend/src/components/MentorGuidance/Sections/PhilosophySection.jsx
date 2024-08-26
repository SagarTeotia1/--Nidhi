import React from "react";

const PhilosophySection = () => {
  return (
    <section className="philosophy-section">
      <h2 className="philosophy-heading">
        OUR <span className="highlight">PHILOSOPHY</span>
      </h2>
      <h3 className="philosophy-subheading">
        Learn a holistic approach to growth.
      </h3>
      <p className="philosophy-description">
        MentorPass is for growth-minded individuals that want to invest in their
        development. You can have an entire team of mentors and coaches working
        to help you grow.
      </p>
      <div className="core-principles">
        {/*principle card-1 */}
        <div className="principle-card">
          <h4 className="principle-title">CORE PRINCIPLE 01</h4>
          <h3 className="principle-heading">Wealthy</h3>
          <p className="principle-description">
            Become wealthy by solving problems and creating value for society,
            at scale. Learn how to apply leverage to your business so it creates
            freedom for you.
          </p>
          <a href="#" className="principle-link">
            Get Wealthy →
          </a>
        </div>
        {/*principle card-2 */}
        <div className="principle-card">
          <h4 className="principle-title">CORE PRINCIPLE 02</h4>
          <h3 className="principle-heading">Healthy</h3>
          <p className="principle-description">
            Become healthy in mind and body so that you can thrive with your
            business. Work with health, nutrition, mindfulness coaches and
            perform at your best.
          </p>
          <a href="#" className="principle-link">
            Get Healthy →
          </a>
        </div>
        {/*principle card-3 */}
        <div className="principle-card">
          <h4 className="principle-title">CORE PRINCIPLE 03</h4>
          <h3 className="principle-heading">Happy</h3>
          <p className="principle-description">
            Become happy by integrating your purpose and passions into your
            business. Create great relationships with your team and make a
            positive impact on the world.
          </p>
          <a href="#" className="principle-link">
            Get Happy →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
