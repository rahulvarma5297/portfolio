import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { headerBg } from "./Nav.js";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    headerBg();
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = nav.querySelectorAll("li");

    const navToggle = () => {
      nav.classList.toggle("open");
      navToggler.classList.toggle("active");
    };

    if (isOpen) {
      nav.classList.add("open");
      navToggler.classList.add("active");
    } else {
      nav.classList.remove("open");
      navToggler.classList.remove("active");
    }

    navToggler.addEventListener("click", handleToggle);

    navItems.forEach((li) => {
      li.querySelector("a").addEventListener("click", () => {
        if (window.innerWidth <= 767) {
          navToggle();
        }
      });
    });

    return () => {
      navToggler.removeEventListener("click", handleToggle);
    };
  }, [isOpen]);

  return (
    <div className="container">
      <header className="header header-js">
        <div className="container">
          <div className="logo" data-aos="fade-down">
            <a href="#home">
              Rahul<span>Varma</span>
            </a>
          </div>
          <button
            type="button"
            className="nav-toggler js-nav-toggler"
            data-aos="fade-down"
          >
            <span></span>
          </button>
          <nav className="nav js-nav">
            <ul data-aos="fade-down">
              <li>
                <Link
                  to="/"
                  className="nav__link"
                  activeClassName="active"
                  exact
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav__link"
                  activeClassName="active"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="nav__link"
                  activeClassName="active"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="nav__link"
                  activeClassName="active"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
