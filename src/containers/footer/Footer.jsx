import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="/signup">Request Early Access</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href="#">Overons</a></p>
        <p><a href="#">Social Media</a></p>
        <p><a href="#">Counters</a></p>
        <p><a href="#">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p><a href="/team">Our Team</a></p>
        <p><a href="/terms">Terms & Conditions</a></p>
        <p><a href="/privacy">Privacy Policy</a></p>
        <p><a href="#">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@argonai.co</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Argon. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
