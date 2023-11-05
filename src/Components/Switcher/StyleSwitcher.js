import React, { useState, useEffect } from "react";
import "./StyleSwitcher.css";
import { styleSwitcherToggle, themeColor } from "./switcher";

const StyleSwitcher = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme-dark") !== "false"
  );

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    styleSwitcherToggle();
    themeColor();
    const styleSwitcherToggler = document.querySelector(
      ".js-style-switcher-toggler"
    );

    styleSwitcherToggler.addEventListener("click", handleToggle);

    return () => {
      styleSwitcherToggler.removeEventListener("click", handleToggle);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("t-dark");
    } else {
      document.body.classList.remove("t-dark");
    }

    localStorage.setItem("theme-dark", darkMode);
  }, [darkMode]);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const gearIcon = document.querySelector(".js-style-switcher-toggler i");

    if (isOpen) {
      styleSwitcher.classList.add("open");
      gearIcon.classList.remove("fa-gear");
      gearIcon.classList.add("fa-times");
    } else {
      styleSwitcher.classList.remove("open");
      gearIcon.classList.remove("fa-times");
      gearIcon.classList.add("fa-gear");
    }
  }, [isOpen]);

  return (
    <div>
      <div className="style-switcher js-style-switcher" id="particles-js">
        <button
          type="button"
          className="style-switcher-toggler js-style-switcher-toggler"
        >
          <i className="fa-solid fa-gear"></i>
        </button>
        <div className="style-switcher-main">
          <h2>Style switcher</h2>
          <div className="style-switcher-item">
            <p>Theme color</p>
            <div className="theme-color">
              <input
                type="range"
                min="0"
                max="360"
                className="hue-slider js-hue-slider"
              />
              <div className="hue">
                Hue: <span className="js-hue"></span>
              </div>
            </div>
          </div>
          <div className="style-switcher-item">
            <label className="form-switcher">
              <span>Dark Mode</span>
              <input
                type="checkbox"
                className="js-dark-mode"
                checked={darkMode}
                onChange={() => {
                  handleDarkModeChange();
                  props.setDarkMode(!props.darkMode);
                }}
              />
              <div className="box"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
