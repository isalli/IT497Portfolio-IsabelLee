import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {reflectiveExperienceSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./ReflectiveExperience.scss";

export default function ReflectiveExperience() {
  const {isDark} = useContext(StyleContext);

  if (!reflectiveExperienceSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="reflective-experience-section" id="reflective-experience">
        <div className="reflective-header">
          <h1 className={isDark ? "dark-mode reflective-heading" : "reflective-heading"}>
            {reflectiveExperienceSection.title}
          </h1>
          <p className={isDark ? "dark-mode reflective-subtitle" : "reflective-subtitle"}>
            {reflectiveExperienceSection.subtitle}
          </p>
        </div>

        <div className="reflective-content">
          {/* Introduction */}
          <div className={isDark ? "dark-mode content-block intro-block" : "content-block intro-block"}>
            <p className={isDark ? "dark-mode block-text" : "block-text"}>
              {reflectiveExperienceSection.introContent}
            </p>
          </div>

          {/* Journey Reflection */}
          <div className={isDark ? "dark-mode content-block" : "content-block"}>
            <h2 className="block-heading">
              {reflectiveExperienceSection.journeyReflection.heading}
            </h2>
            <p className={isDark ? "dark-mode block-text" : "block-text"}>
              {reflectiveExperienceSection.journeyReflection.content}
            </p>
          </div>

          {/* Service and Balance */}
          <div className={isDark ? "dark-mode content-block" : "content-block"}>
            <h2 className="block-heading">
              {reflectiveExperienceSection.serviceAndBalance.heading}
            </h2>
            <p className={isDark ? "dark-mode block-text" : "block-text"}>
              {reflectiveExperienceSection.serviceAndBalance.content}
            </p>
          </div>

          {/* Integration */}
          <div className={isDark ? "dark-mode content-block" : "content-block"}>
            <h2 className="block-heading">
              {reflectiveExperienceSection.integration.heading}
            </h2>
            <p className={isDark ? "dark-mode block-text" : "block-text"}>
              {reflectiveExperienceSection.integration.content}
            </p>
          </div>

          {/* Key Insights */}
          <div className="key-insights">
            <h2 className={isDark ? "dark-mode insights-heading" : "insights-heading"}>
              Key Insights from This Reflection
            </h2>
            <div className="insights-grid">
              {reflectiveExperienceSection.keyInsights.map((insight, index) => (
                <div
                  key={index}
                  className={isDark ? "dark-mode insight-card" : "insight-card"}
                >
                  <div className="insight-number">{index + 1}</div>
                  <h3 className="insight-title">{insight.title}</h3>
                  <p className="insight-description">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
