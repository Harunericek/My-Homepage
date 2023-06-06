import React from "react";
import MyImage from "../images/HarunKreis.JPG"

function Middle() {
    return <div className="middle-container">
<div className="profile">
  <img className="Me" src={MyImage} alt="MyImageBeard" />
  <h2>Hello.</h2>
  <p>I´m Harun a Web Developer. I live in Germany and have a passion for Web Developing. <br /> I´ll create any website You want.</p>
</div>
<hr />
<div className="skills">
  <h2>What is my expertise.</h2>
  <div className="skill-row">
    <img className="skill_img_1" src="https://media4.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/200w.webp?cid=ecf05e47r40gkndm27gd3bvnbklhbwmdq7ouu02ss79c7iir&rid=200w.webp&ct=g" alt="" />
    <h3>Classic Website Design</h3>
    <p>I like to create Websites the classic Way. So we have more Opportunity here to Design <b>Your</b> Dream Website.</p>
  </div>
  <div className="skill-row">
    <img className="skill_img_2"src="https://cdn-icons-png.flaticon.com/512/149/149004.png" alt="" />
    <h3>Developing Websites throw devices</h3>
    <p>As a Web Developer i will create a Websites which work on all devices.</p>
  </div>
</div>
<hr />
<div className="contact-me">
  <h2>Get In Touch. I can Help.</h2>
  <h3>I´m currently available for Freelance Work.</h3>
  <p>If you have a project that you want to get started, think you need my help <br /> with something or just fancy saying hey, then get in touch.</p>
  <a className="btn" href="mailto:harunericek@hotmail.com">CONTACT ME</a>
</div>
    </div>
}

export default Middle;