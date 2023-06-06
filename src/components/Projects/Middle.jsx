import React from "react";
import KeeperAppIMG from "../images/keeperapp.jpg";
import ExpensesAppIMG from "../images/ExpensesApp.jpg";

function Middle() {
  return (
    <div className="middle-container">
      <div className="profile">
        <h1>My Projects</h1>
      </div>
      <div className="skills">
        <div className="skill-row">
          <a
            href="https://g8x7f4.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="skill_img_1" src={KeeperAppIMG} alt="keeperapp" />
          </a>
          <a
            href="https://g8x7f4.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Keeper App</h3>
          </a>
          <p style={{ fontSize: "14px" }}>
            This was my First "Big" React Project. I had so much fun to build
            it. After this Project i decided to concentrate my self more on
            React Concepts.
          </p>
        </div>
        <div className="skill-row">
          <a
            href="https://project-expense.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="skill_img_2" src={ExpensesAppIMG} alt="keeperapp" />
          </a>
          <a
            href="https://project-expense.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Expenses App</h3>
          </a>
          <p style={{ fontSize: "14px" }}>
            This is my second React Project. In this Project i learned how to
            build Charts.
          </p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>Get In Touch. I can Help.</h2>
        <h3>I´m currently available for Freelance Work.</h3>
        <p>
          If you have a project that you want to get started, think you need my
          help <br /> with something or just fancy saying hey, then get in
          touch.
        </p>
        <a className="btn" href="mailto:harunericek@hotmail.com">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default Middle;
