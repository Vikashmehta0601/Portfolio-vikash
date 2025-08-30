import React from "react";
import GlobalButton from "../GlobalButton/GlobalButton";
import "./style.css"

const PrimaryCard = ({imageProp, heading, inbox, Summary}) => {
  return (
    <div className="PrimaryCard">
      <img src={imageProp} alt="" />
      <div className="content_card">
        <h6>{heading}</h6>
        <p>
          {Summary}
      
        </p>
        <GlobalButton title={inbox}/>
      </div>
    </div>
  );
};

export default PrimaryCard;
