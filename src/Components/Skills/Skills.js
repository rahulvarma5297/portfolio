import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import "./Skill.css";


const Skills = () => {
  return (
    <div>
      <section className="skills section">
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
          <h2 className="section__title">Professional Skills</h2>
          <p className="section__subtitle">My talent</p>
        </motion.div>
        <div className="skills__container grid section-padd">
          <Skill />
        </div>
      </section>
    </div>
  );
};

export default Skills;
