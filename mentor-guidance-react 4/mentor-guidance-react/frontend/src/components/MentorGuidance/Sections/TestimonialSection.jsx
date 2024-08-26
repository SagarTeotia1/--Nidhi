import React, { useState } from "react";

//array will come from the backend in future .........................
//temporary
const testimonials = [
  {
    quote: "Nik provides recommendations that save start-ups time and money.",
    details:
      "Womansess is a venture-backed wellness startup that got 6-figure cost savings working with Nik Sharma on ad strategy and conversion optimization.",
    author: "Sally Mueller",
    role: "Founder of Womaness",
    image: "/images/review-image-1.jpeg",
  },
  {
    quote:
      "My time with Jason continues to be the most valuable time in my week.",
    details:
      "Tim is building a PE-backed DTC company and working with Jason Wong to build and execute on a hiring roadmap to scale the company.",
    author: "Tim Mitchum",
    role: "President at WINPRO",
    image: "/images/review-image-2.jpeg",
  },
  {
    quote: "Vendor recommendations alone made this a positive ROI.",
    details:
      "BJ worked with Nik Sharma to launch Wunderground Coffee and Eli Weiss to build a world-class customer experience and retention strategy.",
    author: "BJ Shannon",
    role: "Growth & CX at Wunderground Coffee",
    image: "/images/review-image-3.jpeg",
  },
];


{/* left-right arrow control functions */}
const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftNav = () => { 
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleRightNav = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };


  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">
        An instant <span className="highlight">COMPETITIVE ADVANTAGE</span>
      </h2>
      <h3 className="testimonial-subheading">High performers use mentors.</h3>
      <div className="testimonial-slider-container">
        <button className="testimonial-nav left-nav" onClick={handleLeftNav}>
          &#10094;
        </button>
        <div
          className="testimonial-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* dynamic content  */}
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-content" key={index}>
              <div className="testimonial-image">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-image"
                />
              </div>
              <div className="testimonial-text">
                <blockquote>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                </blockquote>
                <p className="testimonial-details">{testimonial.details}</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="testimonial-nav right-nav" onClick={handleRightNav}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
