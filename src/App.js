import React, { useState, useRef, useEffect } from "react";
import logo from "./images/logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import introImg from "./images/illustration-intro.png";
import bkgImg from "./images/bg-curvy-desktop.svg";
import AccessImg from "./images/icon-access-anywhere.svg";
import securityImg from "./images/icon-security.svg";
import collaburationImg from "./images/icon-collaboration.svg";
import fileImg from "./images/icon-any-file.svg";
import stayProductive from "./images/illustration-stay-productive.png";
import arrow from "./images/icon-arrow.svg";
import rev1 from "./images/profile-1.jpg";
import rev2 from "./images/profile-2.jpg";
import rev3 from "./images/profile-3.jpg";
import quote from "./images/bg-quotes.png";
import phoneImg from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import location from "./images/icon-location.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";


function App() {

  return (
    <>
      <div className="hero-section">
        <NavBar />
        <div className="hero-img">
          <img src={introImg} alt="intro_img" />
        </div>
        <div className="hero-info">
          <div className="hero-info-content" >
            <div className="info-wrapper">
              <h1>
                All your files in one secure location, accessible anywhere.
              </h1>
              <p>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </p>
              <button className="info-btn">Get Started</button>
            </div>
          </div>
          <img className="hero-info-bg" src={bkgImg} alt="background-img" />
        </div>
      </div>
      <div className="rest-content-section">
        {/*  start services section */}
        <div className="service-wrapper">
          <div>
            <img src={AccessImg} alt="AccessImg" />
            <h2> Access your files, anywhere </h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div>
            <img src={securityImg} alt="securityImg" />

            <h2> Security you can trust </h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div>
            <img src={collaburationImg} alt="collaburationImg" />
            <h2> Real-time collaboration </h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <div>
            <img src={fileImg} alt="fileImg" />
            <h2> Store any type of file</h2>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
        {/* {end services section} */}
        {/* start  subServices */}
        <div className="subServices-wrapper">
          <img
            src={stayProductive}
            alt="stayProductive"
            className="subService-img"
          />
          <div className="subsection-content">
            <h1>
              Stay productive
              <br /> wherever you are
            </h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
              <br /> <br />
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="suSection-link">
              <a href="#">See how Fylo works</a>
              <img src={arrow} alt="an arrao" />
            </div>
          </div>
        </div>
        {/* end subservices section */}
        <div className="review">
          <div className="review-wrapper">
            <img className="quote " src={quote} alt="quote" />
            <div>
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="review-info">
                <img src={rev1} alt="rev1" />
                <div>
                  <h5>Satish Patel </h5>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div>
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="review-info">
                <img src={rev2} alt="rev2" />
                <div>
                  <h5> Bruce McKenzie </h5>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div>
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="review-info">
                <img src={rev3} alt="rev3" />
                <div>
                  <h5> Iva Boyd </h5>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end review section */}

        <div className="access-wrapper">
          <h1> Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form>
            <input type="text" placeholder="johnappleseed@gmail.com" />
            <button className="access-btn"> Get Started For Free</button>
          </form>
        </div>
        {/* end access-section */}
        <footer>
          <img className="footer-logo" src={logo} alt="a logo" />
          <div className="contact-warpper">
            <p className="location">
              <img src={location} alt="loc" className="icon" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="contact-info">
              <p>
                <img src={phoneImg} alt="phone" className="icon" />
                +1-543-123-4567{" "}
              </p>
              <p>
                <img src={email} alt="email" className="icon" />
                example@fylo.com
              </p>
            </div>
            <ul>
              <li>About Us </li>
              <li>Jobs </li>
              <li>Press </li>
              <li>Blog</li>
            </ul>
            <ul className="more-links">
              <li> Contact Us </li>
              <li>Terms </li>
              <li>Privacy</li>
            </ul>
            <ul className="social-icons">
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsInstagram />
              </li>

              <li>
                <BsTwitter />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
