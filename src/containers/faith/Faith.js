import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {faithSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Faith.scss";

export default function Faith() {
  const {isDark} = useContext(StyleContext);

  if (!faithSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="faith-section" id="faith">
        <div className="faith-header">
          <h1 className={isDark ? "dark-mode faith-heading" : "faith-heading"}>
            {faithSection.title}
          </h1>
          <p className={isDark ? "dark-mode faith-subtitle" : "faith-subtitle"}>
            {faithSection.subtitle}
          </p>
        </div>

        <div className="faith-categories">
          {faithSection.categories.map((category, index) => (
            <div key={index} className="faith-category">
              <h2 className={isDark ? "dark-mode category-title" : "category-title"}>
                {category.categoryName}
              </h2>
              <p className={isDark ? "dark-mode category-description" : "category-description"}>
                {category.categoryDescription}
              </p>

              <div className="principles-container">
                {category.principles.map((principle, pIndex) => (
                  <div
                    key={pIndex}
                    className={isDark ? "dark-mode principle-card" : "principle-card"}
                  >
                    <div className="principle-header">
                      <h3 className="principle-title">{principle.title}</h3>
                      <p className="principle-reference">{principle.reference}</p>
                    </div>
                    <p className="principle-content">{principle.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
