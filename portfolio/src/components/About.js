import React from "react";
import "./style.css"

const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-innerdiv">
          <div className="heading-container">
            <h2 className="about-heading">About Me</h2>
          </div>
          <div className="short-info">
            <p className="">
              Here you will find more information about me, my skills, my projects.
            </p>
          </div>
          <div className="info-container">
            <div className="left-container">
                <h4>Know Me</h4>
                <p className="brief-info">
                    Hey, I'm a frontend web developer.
                </p>
            </div>
            <div className="right-container">
                <h4>My Skills</h4>
                <div className="skill-container">
                    <span className="skill">HTML</span> 
                    <span className="skill">CSS</span> 
                    <span className="skill">JavaScript</span> 
                    <span className="skill">React</span> 
                    <span className="skill">Angular</span> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
