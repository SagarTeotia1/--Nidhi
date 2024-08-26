import React from 'react';
import {Link} from "react-router-dom";

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="card-container">
        <div className="label-wrap">
          <div className="section-label">
            <div className="icon-wrap">
            <i className="fa-regular fa-star"></i>
            </div>
            who this is for
          </div>
        </div>
        <h2 className="section-title">
          Built for founders, marketers, and product people
        </h2>
        <div className="cards">

          {/*card 1 */}
          <Link to="/become-mentor" className="promo-card">
            <div className="holder">
              <h3 className="title">Founders</h3>
              <p className="text">
                If you want sparring partners to talk through strategy, tactics, and how to deal with the utter chaos of growing a startup.
              </p>
            </div>
            <div className="icon-wrap">
              <img
                src="/images/card-1.jpg"
                alt="Founders"
              />
            </div>
          </Link>

          {/*card-2 */}
          <Link to="/become-mentor" className="promo-card">
            <div className="holder">
              <h3 className="title">Marketing</h3>
              <p className="text">
                If you are looking to develop the skills and confidence to improve career prospects, transition to new roles, or hit growth targets.
              </p>
            </div>
            <div className="icon-wrap">
              <img
                src="/images/card-2.jpg"
                alt="Marketing"
              />
            </div>
          </Link>

          {/*card-3 */}
          <Link to="/become-mentor" className="promo-card">
            <div className="holder">
              <h3 className="title">Product</h3>
              <p className="text">
                If you need a sounding board to brainstorm strategies, sharpen tactics, and master the unpredictable world of product management.
              </p>
            </div>
            <div className="icon-wrap">
              <img
                src="/images/card-3.jpg"
                alt="Product"
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CardsSection;
