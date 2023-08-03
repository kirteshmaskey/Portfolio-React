import React from "react";
import "./style.css";

const About = () => {
  return (
    <>
      <div className="main-container py-5">
        <div className="heading-container">
          <h2 className="about-heading">About Me</h2>
        </div>

        <div className="short-info">
          <p className="">
            Here you will find more information about me and my skills.
          </p>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6 col-sm-12 mb-4">
            <h4>Know Me</h4>
            <p className="brief-info">
              Hey, I'm a MERN full stack web developer. I have gain experience
              in building dyanamic web application using MERN Stack.
            </p>

            <a
              href="https://docs.google.com/document/d/16U1wKkDG3o_ZWRo0zXEFlS2C6WIcrqPehAfjFdfhfJ4/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              View Resume
            </a>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="row">
              <h4>My Skills</h4>
              <div className="skill-container">
                <span className="skill">C++</span>
                <span className="skill">Java</span>
                <span className="skill">Python</span>
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
                <span className="skill">JavaScript</span>
                <span className="skill">React</span>
                <span className="skill">NodeJs</span>
                <span className="skill">ExpressJs</span>
                <span className="skill">MongoDB</span>
                <span className="skill">SQL</span>
              </div>
            </div>

            <div className="row mt-4">
              <h4>Tools</h4>
              <div className="skill-container">
                <span className="skill">Git</span>
                <span className="skill">Github</span>
                <span className="skill">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
