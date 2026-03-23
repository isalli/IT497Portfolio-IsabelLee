import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {ethicalDilemmaSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./EthicalDilemma.scss";

export default function EthicalDilemma() {
  const {isDark} = useContext(StyleContext);

  if (!ethicalDilemmaSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="ethical-dilemma-section" id="ethical-dilemma">
        <div className="ethical-header">
          <h1 className={isDark ? "dark-mode ethical-heading" : "ethical-heading"}>
            {ethicalDilemmaSection.title}
          </h1>
          <p className={isDark ? "dark-mode ethical-subtitle" : "ethical-subtitle"}>
            {ethicalDilemmaSection.subtitle}
          </p>
        </div>

        <div className="ethical-content">
          {/* The Dilemma */}
          <div className={isDark ? "dark-mode content-section" : "content-section"}>
            <h2 className="section-title">The Dilemma</h2>
            <p className={isDark ? "dark-mode section-text" : "section-text"}>
              {ethicalDilemmaSection.dilemmaDescription}
            </p>
          </div>

          {/* How I Responded */}
          <div className={isDark ? "dark-mode content-section" : "content-section"}>
            <h2 className="section-title">{ethicalDilemmaSection.analysisHeading}</h2>
            <p className={isDark ? "dark-mode section-text" : "section-text"}>
              {ethicalDilemmaSection.analysisContent}
            </p>
          </div>

          {/* Spiritual Perspective */}
          <div className={isDark ? "dark-mode content-section" : "content-section"}>
            <h2 className="section-title">Spiritual Perspective</h2>
            <p className={isDark ? "dark-mode section-text" : "section-text"}>
              {ethicalDilemmaSection.spiritualPerspective}
            </p>
          </div>

          {/* What I Learned */}
          <div className={isDark ? "dark-mode content-section learning-section" : "content-section learning-section"}>
            <h2 className="section-title">{ethicalDilemmaSection.reflectionHeading}</h2>
            <ul className="learning-list">
              {ethicalDilemmaSection.reflectionPoints.map((point, index) => (
                <li key={index} className={isDark ? "dark-mode learning-point" : "learning-point"}>
                  <span className="list-marker">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
}
