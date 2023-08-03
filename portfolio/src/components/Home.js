import React from "react";
// import { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  const introTextArray = ["Kirtesh Maskey", "Developer", "Web Enthusiast"];
  
  const common = {
    marginRight: 15,
    fontSize: 27,
    letterSpacing: ".5px",
    color: "#FFFFFF",
  };

  const highlighter = {
    color: "#ff7722",
  }


/*
  const [introText, setIntroText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);  
  let speed = 70;


  useEffect(() => {
    if (textIndex < introTextArray.length) {
      if (index < introTextArray[textIndex].length) {
        setTimeout(() => {
          setIntroText(introText + introTextArray[textIndex][index]);
          setIndex(index + 1);
        }, speed);
      } else {
        setTimeout(() => {
          setIntroText('');
          setIndex(0);
          setTextIndex(textIndex + 1);
        }, 1300);
      }
    }
    if(textIndex === introTextArray.length) {
      setTextIndex(0);
    }
  }, [introText, index, textIndex]);
*/

  

  return (
    <>
      <div className="main-container py-5 mx-auto">
        <div className="home-container">
          <div className="heading-container">
            <h2 className="greeting">Hello, I'm</h2>
          </div>
          <div className="heading-container">
            <h2 className="greeting" style={{}}>
              <span style={highlighter}>  { /*{introText}*/ }
                {
                  <Typewriter
                    options={{
                      strings: [...introTextArray],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                }
              </span>
            </h2>
          </div>
          <div className="short-info">
            <p className="info">I'm a <span style={highlighter}>MERN Full Stack</span> web developer.</p>
          </div>
            <NavLink
              to="/projects"
              className="text-decoration-none btn project-btn"
              style={common}
            >
              Projects
            </NavLink>
        </div>

        <div className="side-panel">
          <div classname="">
            <a
              href="https://www.linkedin.com/in/kirteshmaskey"
              rel="noreferrer"
              target="_blank"
            >
              <img src="LinkedinLogo.png" alt="LinkedIn" class="social-logo" />
            </a>
          </div>
          <div classname="">
            <a
              href="https://www.facebook.com/www.Kirteshmaske123"
              rel="noreferrer"
              target="_blank"
            >
              <img src="FacebookLogo.png" alt="Facebook" class="social-logo" />
            </a>
          </div>
          <div classname="">
            <a
              href="https://www.instagram.com/kirtesh_maskey/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="InstagramLogo.png"
                alt="Instagram"
                class="social-logo"
              />
            </a>
          </div>
          <div classname="">
            <a
              href="https://github.com/kirteshmaskey"
              rel="noreferrer"
              target="_blank"
            >
              <img src="GithubLogo.jpg" alt="Github" class="social-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
