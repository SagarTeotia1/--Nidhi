import React from 'react';

const ExpertAdviceSection = () => {
  return (
    <section className="expert-advice-section">
      <div className="expert-advice-text">
        <h2>Learn <span>10x Faster</span></h2>
        <h1>Buy back time with instant answers from experts.</h1>
        <p>
          A targeted 30-minute conversation with an expert can create better insights and save you time and money. Our mentors will help you avoid painful rookie mistakes.
        </p>
      </div>
      <div className="expert-network">
        {/**image */}
        <img
          src="/images/expert-learning-img.png"
          alt="Expert Network"
          className="expert-advice-image"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ExpertAdviceSection;
