import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  {
    /*function to trim the p tag content of the categories */
  }
  const truncateText = (text, wordLimit = 3) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <>
      {/*here instead of hardcoding run the for loop and and use expressions */}
      {/*the data about the mentors will come from the backend ---category wise  */}
      {/*use props for it or react redux */}

      <Link to="/mentor-about">
        <div className="category">
          <img src="/images/mentor-1.jpeg" alt="" />
          <div className="category-content">
            <h3>Aniruddha-Mishra</h3>
            <p className="myParagraph">
              {truncateText("Paid Ads & Creative Strategy Expert")}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/mentor-about">
        <div className="category">
          <img src="/images/mentor-2.png" alt="" />
          <div className="category-content">
            <h3>Farrah Fan</h3>
            <p className="myParagraph">
              {truncateText("Chief Marketing Officer")}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/mentor-about">
        <div className="category">
          <img src="/images/mentor-3.jpg" alt="" />
          <div className="category-content">
            <h3>Carmela Fortin</h3>
            <p className="myParagraph">
              {truncateText("Growth Coach & Advisors")}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/mentor-about">
        <div className="category">
          <img src="/images/mentor-4.png" alt="" />
          <div className="category-content">
            <h3>Jason Barbato</h3>
            <p className="myParagraph">
              {truncateText("Growth Coach & Advisors")}
            </p>
          </div>
        </div>
      </Link>

      <Link to="./mentor-about">
        <div className="category">
          <img src="/images/mentor-5.jpeg" alt="" />
          <div className="category-content">
            <h3>Carmela Fortin</h3>
            <p className="myParagraph">
              {truncateText("Growth Coach & Advisors")}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/mentor-about">
        <div className="category">
          <img src="/images/mentor-6.png" alt="" />
          <div className="category-content">
            <h3>Aniruddha-Mishra</h3>
            <p className="myParagraph">
              {truncateText("Paid Ads & Creative Strategy Expert")}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Category;
