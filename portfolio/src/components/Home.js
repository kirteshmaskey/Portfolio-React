import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-innerdiv">
          <div className="heading-container">
            <h2 className="greeting">Hello, I'm Kirtesh Maskey</h2>
          </div>
          <div className="short-info">
            <p className="info">
              I'm a Frontend web developer having some knowledge about backend
              too.
            </p>
          </div>
          <div className="btn-container">
            <Button variant="success" className="btn" href="/projects">
              {" "}
              Projects
            </Button>
          </div>
          <div className="side-panel">
            <div classname="">
              <a href="https://www.linkedin.com/in/kirteshmaskey" target="_blank">
                <img src="LinkedinLogo.png" alt="LinkedIn" class="social-logo" />
              </a>
            </div>
            <div classname="">
              <a href="https://www.facebook.com/www.Kirteshmaske123" target="_blank" >
                <img src="FacebookLogo.png" alt="Facebook" class="social-logo" />
              </a>
            </div>
            <div classname="">
              <a href="https://www.instagram.com/kirtesh_maskey/" target="_blank" >
                <img src="InstagramLogo.png" alt="Instagram" class="social-logo" />
              </a>
            </div>
            <div classname="">
              <a href="https://github.com/kirteshmaskey" target="_blank">
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
