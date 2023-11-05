import React, { useState } from "react";
import "./Portfolio.css";
import Item from "./Item";
import List from "./List";
import { projects } from "../../Data/Data";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setNavList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    setMenuItems(projects.filter((project) => project.category === category));
  };
  return (
    <section className="portfolio section">
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
        <h2 className="section__title title-size">Portfolio</h2>
        <p className="section__subtitle">Must recent works</p>
      </motion.div>

      <List list={navList} filterItems={filterItems} />
      <motion.div
        initial={{ transform: "translateY(100px)" }}
        animate={{ transform: "translateY(0px)" }}
        exit={{
          transform: "translateY(100px)",
          transition: { duration: 0.1 },
        }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="portfolio__container container grid section-padd"
      >
        <AnimatePresence initial={false}>
          <Item projectItems={projectItems} />
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
