import React from "react";
import { ProfileSection } from "./ProfileSection";
import { BioSection } from "./BioSEction";
import ExpertiseSection from "./ExpertiseSection";
import ToolkitSection from "./ToolkitSection";
import BestContentSection from "./BestContentSection";
import ReviewsSection from "./ReviewsSection";
import "../../styles/mentor-about-css/mentor-about.css";

const MentorAbout = () => {
  return (

      <div className="mentor-about-container">
        <ProfileSection />
        <BioSection />
        <ExpertiseSection />
        <ToolkitSection />
        <BestContentSection />
        <ReviewsSection />

    </div>
  );
};

export default MentorAbout;
