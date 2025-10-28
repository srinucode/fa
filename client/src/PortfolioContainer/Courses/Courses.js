import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Modal from "./Modal";
import "./Courses.css";

export default function Courses(props) {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  const [showForm, setShowForm] = useState(false);


  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const CoursesHeading = (props) => {
    return (
      <div className="courses-heading">
        <div className="courses-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="courses-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="courses-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  /* STATIC Courses DATA FOR THE LABELS*/
  const CoursesBullets = [
    { label: "CCC Development", logoSrc: "education.svg" },
    { label: "CC Development", logoSrc: "work-history.svg" },
    { label: "SAP CPI", logoSrc: "programming-skills.svg" },

  ];


  const handleClick = () => {
    setShowForm(true);
  }

  const CoursesDetails = [
    /* CCC in Development */
    <div className="courses-screen-container" key="education">
      <CoursesHeading
        heading={"Crash Course in Communication Development"}
        subHeading={"An intensive, high-impact mini course to sharpen your communication fundamentals fast.ce"}
      />

      <div className="profile-options">
        <button className="btn primary-btn"> Register </button>
        <button className="btn highlighted-btn" onClick={handleClick}>Know More</button>
        {showForm && (
          <Modal onClose={() => setShowForm(false)} />
        )}
      </div>
    </div>,

    /* CC in Development */
    <div className="courses-screen-container" key="education">
      <CoursesHeading
        heading={"Comprenhensive Course in Communication Development"}
        subHeading={"Master of Technology in Artificial Intelligence"}
      />

      <div className="profile-options">
        <button className="btn primary-btn"> Register </button>
        <button className="btn highlighted-btn" onClick={handleClick}>Know More</button>
        {showForm && (
          <Modal onClose={() => setShowForm(false)} />
        )}
      </div>
    </div >,

    <div className="courses-screen-container" key="education">
      <CoursesHeading
        heading={"SAP CPI (Cloud Platform Integration)"}
        subHeading={"Learn how to build, monitor, and manage enterprise integration flows using SAP CPI."}
      />

      <div className="profile-options">
        <button className="btn primary-btn"> Register </button>
        <button className="btn highlighted-btn" onClick={handleClick}>Know More</button>
        {showForm && (
          <Modal onClose={() => setShowForm(false)} />
        )}
      </div>
    </div >,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return CoursesBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Courses/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getCoursesScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="Courses-details-carousal"
      >
        {CoursesDetails.map((CoursesDetail) => CoursesDetail)}
      </div>
    );
  };

  return (
    <div className="courses-container screen-container" id={props.id || " "}>
      <div className="courses-content">
        <ScreenHeading title={"Courses"} subHeading={"List of Courses"} />
        <div className="courses-card">
          <div className="courses-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="courses-bullet-details">{getCoursesScreens()}</div>
        </div>
      </div>
    </div>
  );
}
