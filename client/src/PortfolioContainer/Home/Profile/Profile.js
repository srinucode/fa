import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Welcome to{" "}
              <span className="highlighted-text">Fundamental Aura</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  words={[
                    "Crash Course in Communication Development 😎",
                    "Complete Communication Course 💻",
                    "SAP CPI (Cloud Platorm) 🛠️",
                    "Cross Platform Dev 🌐",
                    "ChatBots & Virtual Assistants 📱",
                  ]}
                  loop={0} // 0 = infinite loop (like repeat={Infinity})
                  cursor
                  cursorStyle="|" // You can change it to "_" if you prefer
                  typeSpeed={80} // Similar to how fast each character types
                  deleteSpeed={50} // Speed of deleting
                  delaySpeed={1000} // Pause before switching to the next word
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of delivering career-building courses, IT services, virtual assistants, and chatbots.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Srini_SDE.pdf" download="Srini_SDE.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
