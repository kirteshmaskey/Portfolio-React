import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <>
    <div className="center">
      <div className="footer-container row">
        <div className="col-lg-6 col-sm-12 border-sm p-2">
          <h3>Kirtesh Maskey</h3>
          <p>MERN developer</p>
        </div>
        <div className="col-lg-6 col-sm-12 p-2">
          <p>Connect with me</p>
          <div>
            <a href="https://www.linkedin.com/in/kirteshmaskey" rel="noreferrer" target="_blank"><img src="LinkedinLogo.png" alt="LinkedIn" class="social-logo"/></a>
            <a href="https://www.facebook.com/www.Kirteshmaske123" rel="noreferrer" target="_blank"><img src="FacebookLogo.png" alt="Facebook" class="social-logo"/></a>
            <a href="https://www.instagram.com/kirtesh_maskey/" rel="noreferrer" target="_blank"><img src="InstagramLogo.png" alt="Instagram" class="social-logo"/></a>
            <a href="https://github.com/kirteshmaskey" rel="noreferrer" target="_blank"><img src="GithubLogo.jpg" alt="Github" class="social-logo"/></a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer;