import React from 'react';
import {useNavigate} from "react-router-dom";

const ExpertLearning = () => {
  const navigate = useNavigate();

  const handleClick = ()=>{
      navigate("/become-mentor");
  }

  return (
    <section className="expert-learning-container">
      <div className="expert-learning-content">
        <h2 className="expert-learning-subheading">
          WORLD-CLASS <span className="expert-learning-highlight">EXPERTS</span>
        </h2>
        <h1 className="expert-learning-headline">
          The fastest way to learn is talking 1:1 with experts.
        </h1>
        <p className="expert-learning-description">
          Sifting through the overwhelming content on the internet will slow you down. Break through the noise and get specific advice directly from the experts.
        </p>

        <button
          type='button'
          className="expert-learning-button"
          onClick={()=>{handleClick()}}
        >
          Learn the fast way
        </button>

        {/*expert-learning-brand logo */}
        <div className="expert-learning-logos">
          <img
            src="/images/combinator.png"
            alt="YC Logo"
            className="expert-learning-logo"
          />
          <img
            src="/images/Forbes.png"
            alt="Forbes Logo"
            className="expert-learning-logo"
          />
          <img
            src="/images/Techstars.png"
            alt="Techstars Logo"
            className="expert-learning-logo"
          />
          <img
            src="/images/techcrunch.Black.png"
            alt="Techcrunch Logo"
            className="expert-learning-logo"
          />
          <img
            src="/images/Stanford.png"
            alt="Stanford Logo"
            className="expert-learning-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertLearning;
