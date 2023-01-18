import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          <h3>Kirtesh Maskey</h3>
          <p>Frontend developer</p>
        </div>
        <div>
          <p>Conncect with me</p>
          <div>
            <a href="https://www.linkedin.com/in/kirteshmaskey" target="_blank"><img src="LinkedinLogo.png" alt="LinkedIn" class="social-logo"/></a>
            <a href="https://www.facebook.com/www.Kirteshmaske123" target="_blank"><img src="FacebookLogo.png" alt="Facebook" class="social-logo"/></a>
            <a href="https://www.instagram.com/kirtesh_maskey/" target="_blank"><img src="InstagramLogo.png" alt="Instagram" class="social-logo"/></a>
            <a href="https://github.com/kirteshmaskey" target="_blank"><img src="GithubLogo.jpg" alt="Github" class="social-logo"/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;