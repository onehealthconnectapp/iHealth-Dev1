import React, { useRef, useEffect } from "react";

import HowItWorksCard from "../../../Components/HowItWorksCard";
import BenefitBlock from "../../../Components/BenefitBlock";

import HowItWorksSteps from "../../../Constants/HowItWorks.js";
import Benefit from "../../../Constants/Benefit.js";

import "./index.css";

const HowItWorks = () => {
  console.log(Benefit);
  return (
    <div className="how-it-works-container">
      <h1 className="how-it-works-title">How It Works</h1>
      <div className="how-it-works-inner">
        <div className="how-it-works-cards-container">
          {HowItWorksSteps.map((step, idx) => (
            <HowItWorksCard
              icon={<img src={step.image} alt="" width="32px" height="32px" />}
              title={step.title}
              content={step.content}
              idx={idx + 1}
              key={step.title}
            />
          ))}
        </div>
        <div className="how-it-works-benefit-container">
          {Benefit.map((benefit) => {
            console.log("map", Benefit);
            return <BenefitBlock key={benefit.title} benefit={benefit} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
