import React from "react";
import "./style.css";
import HeadingPrimary from "../common/headingPrimary/HeadingPrimary";
import PrimaryCard from "../common/primaryCards/PrimaryCard";
import IMAGES from "../../contants";

const WorkExperience = ({ joyClass }) => {
  return (
    <div className="container">
      <div className={`WorkExperience ${joyClass}`}>
        <img src={IMAGES.gradiunt1} alt="grandiunt" />
        <HeadingPrimary title={"Work Experience"} />
        <div className="cardsFor_experience">
          <PrimaryCard
            imageProp={IMAGES.card2}
            heading={"Frontend Developer In VGL Group"}
            inbox={"May 2025 - Present"}
            Summary={
              "Developed and maintained responsive web applications for TJC UK and ShopLC Germany using React.js. Focused on product listing pages, detail pages, and seamless API integration for a smooth shopping experience."
            }
          />
          <PrimaryCard
            imageProp={IMAGES.card1}
            heading={"Frontend Developer in TechnoSoftwares"}
            inbox={"Jul 2022 - April 2025"}
            Summary={
              "Built and optimized client projects with React.js, ensuring scalable, user-friendly, and high-performance web solutions. Worked closely with design teams to deliver pixel-perfect, responsive interfaces."
            }
          />
          <PrimaryCard
            imageProp={IMAGES.card2}
            heading={"Photoshop Editor In VGL Group"}
            inbox={"Jul 2021 - Apr 2022"}
            Summary={
              "Created and edited high-quality product images and marketing assets for e-commerce platforms. Enhanced visuals to improve brand presentation and customer engagement."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
