import React from "react";

//using same classes as philosophy section------
const MentorshipServices = () => {
  return (
    <section className="philosophy-section">
      <h2 className="philosophy-heading">
        White glove <span className="highlight">MENTORSHIP SERVICE</span>
      </h2>
      <h3 className="philosophy-subheading">Get smart on anything, fast.</h3>
      <p className="philosophy-description">
        MentorPass is like ClassPass for mentors. One subscription gives you
        access to virtual sessions with an unlimited number of mentors.
      </p>
      <div className="core-principles">
        {/*principle card-1 */}
        <div className="principle-card">
          <h4 className="principle-title">STEP 01</h4>
          <h3 className="principle-heading">Become a member.</h3>
          <p className="principle-description">
            Activate your membership to get access to the platform and curated
            list of 150+ mentors.
          </p>
          <a href="#" className="principle-link">
            Get Started →
          </a>
        </div>
        {/*principle card-2 */}
        <div className="principle-card">
          <h4 className="principle-title">STEP 02</h4>
          <h3 className="principle-heading">Build your brief.</h3>
          <p className="principle-description">
            Once activated, you'll be asked questions about your business -
            mission, metrics, OKRs, etc. - your mentor will get this brief
            before each call to help them prepare.
          </p>
          <a href="#" className="principle-link">
            Get Started →
          </a>
        </div>

        {/*principle-card-3 */}
        <div className="principle-card">
          <h4 className="principle-title">STEP 03</h4>
          <h3 className="principle-heading">Meet your mentors.</h3>
          <p className="principle-description">
            Discover the curated group of the best startup operators and book
            calls with mentors that will help you grow.
          </p>
          <a href="#" className="principle-link">
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MentorshipServices;
