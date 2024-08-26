import React, { useRef } from "react";

import Category from "./Category";
import Filters from "./Filters";

const CategorySection = () => {
  {
    /*for creating references of the left and right arrows */
  }
  const containerRefs = useRef([]);

  const scrollLeft = (index) => {
    if (containerRefs.current[index]) {
      containerRefs.current[index].scrollLeft -= 250;
    }
  };

  const scrollRight = (index) => {
    if (containerRefs.current[index]) {
      containerRefs.current[index].scrollLeft += 250;
    }
  };

  const setContainerRef = (index, el) => {
    containerRefs.current[index] = el;
  };

  return (
    <section className="categories" id="mentors-section">
      {/*tage container */}
      <div className="tag-container">
        <div className="tag"># Building a team</div>
        <div className="tag"># Product launches</div>
        <div className="tag"># Pricing strategy</div>
        <div className="tag"># Mindset coaching</div>
        <div className="tag"># Venting frustration</div>
        <div className="tag"># Imposter syndrome</div>
        <div className="tag"># Product management</div>
        <div className="tag"># Paid ads</div>
        <div className="tag"># Product onboarding</div>
        <div className="tag"># Going from 0 to 1</div>
        <div className="tag"># Building processes</div>
      </div>

      <h1 className="lists-heading">
        Our <span>MENTORS</span>
      </h1>

      {/**Filters section */}
      <Filters/>

      {/* Array Each mentor category section */}
      {[
        "Growth Marketing",
        "Marketing Growth Mentors",
        "Sales Strategy Mentors",
        "Financial Planning Mentors",
        "Product Development Mentors",
        "Technology & Innovation Mentors",
        "Leadership & Management Mentor",
        "Legal & Compliance Mentors",
        "Human Resources & Talent Acquisition Mentors",
        "Customer Experience & Retention Mentor",
        "Funding & Investment Mentors",
        "Operations & Supply Chain Mentors",
        "Branding & Communication Mentors",
        "Sustainability & Social Impact Mentors",
        "International Expansion Mentors",
        "Startup Culture & Team Building Mentors",
      ].map((title, index) => (
        <div className="list-section" key={index}>
          <h2>{title}</h2>
          <div className="arrow left-arrow" onClick={() => scrollLeft(index)}>
            &#10094;
          </div>
          <div
            className="category-container"
            ref={(el) => setContainerRef(index, el)}
          >
            <Category />
          </div>
          <div className="arrow right-arrow" onClick={() => scrollRight(index)}>
            &#10095;
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
