import React from "react";
import './footer.css';
import FacebookLogo from './img/face.png';
import InstaLogo from './img/insta.png';
import TwitterLogo from './img/twitter.png';
const style = {
  fontWeight: "normal",
};

const pic = {
  width: "35px",
  height: "35px",
};

const inline = {
  display: "inline",
};

const center = {
  display: "flex",
  justifyContent: "center",
  left: "-25px",
};

function Footer() {
  return (
    <div className="foot">
      <div>
        <h2>Explore</h2>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div>
        <h2>Stay Connected</h2>
        {/* Add content for "Stay Connected" here */}
      </div>
      <div>
        <h2>Support</h2>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <ul className="social-icons">
            <li><img src={FacebookLogo} alt="Facebook" /></li>
          </ul>
          <ul className="social-logo">
            <li><img src={InstaLogo} alt="Instagram" /></li>
          </ul>
          <ul className="logo">
            <li><img src={TwitterLogo} alt="Twitter" /></li>
          </ul>


      <div>
        <h1>DEV@Deakin 2022</h1>
      </div>
      <div></div>
      <div>
        <h3 style={style}>Privacy Policy</h3>
      </div>
      <div>
        <h3 style={style}>Terms</h3>
      </div>
      <div>
        <h3 style={style}>Code of Conduct</h3>
      </div>
    </div>
  );
}

export default Footer;
