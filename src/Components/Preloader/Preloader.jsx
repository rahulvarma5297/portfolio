import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="pre-loader">
      <div className="logo">
        <a href="https://github.com/rahulvarma5297">
          Rahul<span>Varma</span>
        </a>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
