import React, { useState } from "react";
import aboutImg from "../../assets/Rahul.jpg";
import Info from "./Info";
import "./About.css";
import cv from "../../assets/resume.pdf";
import { motion } from "framer-motion";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <main className="container">
      <section className="about section">
        <motion.div
          initial={{ transform: "translateY(-100px)" }}
          animate={{ transform: "translateY(0px)" }}
          exit={{
            transform: "translateY(-100px)",
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="section-title"
        >
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">Who I am</p>
        </motion.div>
        <div className="about-container grid section-padd">
          <motion.div
            initial={{ transform: "scale(.5)" }}
            animate={{ transform: "scale(1)" }}
            exit={{
              transform: "scale(.5)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="about__img"
          >
            <img src={aboutImg} alt="its me!" />
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            animate={{ transform: "translateY(0px)" }}
            exit={{
              transform: "translateY(100px)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="about__text"
          >
            <Info />
            <motion.article
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
              exit={{
                transform: "translateY(100px)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="about__text-content"
            >
              <p>
                ― Software Developer, Fullstack Developer, experienced in both Front-end and
                Back-end development, My name is Rahul Varma
              </p>
            </motion.article>
            <motion.article
              initial={{ transform: "translateY(100px)" }}
              animate={{ transform: "translateY(0px)" }}
              exit={{
                transform: "translateY(100px)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              className="about__text-content"
            >
              <p>
                I'm smiling, I'm positive, super motivated, always willing to
                learn. I'm here to build positive relationships, find creative
                solutions to complex problems. I love programming and have a
                good team spirit.
              </p>
            </motion.article>
          </motion.div>
        </div>
        <button
          className="btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide Resume" : "Show Resume"}
        </button>
      </section>
      {show && (
        <div className="about__cv">
          <object
            data={cv}
            type="application/pdf"
            width={"100%"}
            height={"1200px"}
          >
            Your browser does not support embedded PDF files.
          </object>
        </div>
      )}
    </main>
  );
};

export default About;
