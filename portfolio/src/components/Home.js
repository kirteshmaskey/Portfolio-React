import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Home = () => {

  const common = {
    marginRight:15,
    fontSize:27,
    letterSpacing:".5px",
    color:"#FFFFFF",
    backgroundColor: "#198754"
  }

  return (
    <>
      <div className="main-container">
        <div className="main-innerdiv">
          <div className="heading-container">
            <h2 className="greeting">Hello, I'm Kirtesh Maskey</h2>
          </div>
          <div className="short-info">
            <p className="info">
              I'm a MERN Full Stack web developer.
            </p>
          </div>

          <div className="btn-container">
            <NavLink to="/projects" className="text-decoration-none btn" style={common}>Projects</NavLink>
          </div>

          <div className="side-panel">
            <div classname="">
              <a href="https://www.linkedin.com/in/kirteshmaskey" rel="noreferrer" target="_blank">
                <img src="LinkedinLogo.png" alt="LinkedIn" class="social-logo" />
              </a>
            </div>
            <div classname="">
              <a href="https://www.facebook.com/www.Kirteshmaske123" rel="noreferrer" target="_blank" >
                <img src="FacebookLogo.png" alt="Facebook" class="social-logo" />
              </a>
            </div>
            <div classname="">
              <a href="https://www.instagram.com/kirtesh_maskey/" rel="noreferrer" target="_blank" >
                <img src="InstagramLogo.png" alt="Instagram" class="social-logo" />
              </a>
            </div>
            <div classname="">
              <a href="https://github.com/kirteshmaskey" rel="noreferrer" target="_blank">
                <img src="GithubLogo.jpg" alt="Github" class="social-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
