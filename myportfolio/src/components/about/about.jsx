import React from "react";
import "./about.css";
import about_profile from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id="About Me" className="about">
      <div className="about-tittle">
        <h1> About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>As a student with strong skills in advanced data structures and algorithms (DSA) and practical experience with CSS, JavaScript, and the MERN stack (MongoDB, Express.js, React, Node.js),I am eager to join your team. </p>
            <p> My proficiency in these technologies enables me to create efficient, dynamic web applications. I am also a quick learner, able to swiftly grasp new technologies and concepts, which allows me to adapt to the fast-paced tech industry. I bring fresh perspectives and enthusiasm, with a strong willingness to learn and grow.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & CSS </p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js </p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript </p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node js </p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about_achievements">
        <div className="about_achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about_achievement">
          <h1>90+</h1>
          <p>PROJECTS</p>
        </div>
        <hr/>
        <div className="about_achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
