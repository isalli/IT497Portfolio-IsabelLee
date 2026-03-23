import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {portfolioSummary} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./PortfolioSummary.scss";

export default function PortfolioSummary() {
  const {isDark} = useContext(StyleContext);

  if (!portfolioSummary.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="portfolio-summary-section" id="portfolio-summary">
        <h1 className={isDark ? "dark-mode portfolio-summary-heading" : "portfolio-summary-heading"}>
          About Me
        </h1>
        
        <div className="portfolio-summary-content">
          <div className="resume-summary-section">
            <h2 className={isDark ? "dark-mode section-subheading" : "section-subheading"}>
              Résumé Summary
            </h2>
            <p className={isDark ? "dark-mode summary-text" : "summary-text"}>
              {portfolioSummary.resumeSummary}
            </p>
          </div>

          <div className="projects-overview-section">
            <h2 className={isDark ? "dark-mode section-subheading" : "section-subheading"}>
              Key Projects
            </h2>
            <p className={isDark ? "dark-mode projects-intro" : "projects-intro"}>
              {portfolioSummary.projectsOverview}
            </p>
            <div className="projects-container">
              {portfolioSummary.projects.map((project, index) => (
                <div key={index} className={isDark ? "dark-mode project-card" : "project-card"}>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-meta">
                    <strong>Role:</strong> {project.role}
                  </p>
                  {project.course && (
                    <p className="project-meta">
                      <strong>Course:</strong> {project.course}
                    </p>
                  )}
                  {project.employer && (
                    <p className="project-meta">
                      <strong>Employer:</strong> {project.employer} ({project.position})
                    </p>
                  )}
                  <p className="project-description">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
