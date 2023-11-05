import React from "react";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">
          <h3>Rahul Varma</h3>
        </div>
        <div className="footer-social-icons">
          <a
            href="https://github.com/rahulvarma5297"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-varma-329a3122a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/rahul__varma_5297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://twitter.com/RahulV63710083"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </div>
        <div className="footer-copywright">
          <p>&copy; {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
