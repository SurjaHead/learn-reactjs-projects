import React from "react";

export default function Info() {
  return (
    <div className="info-main">
      <img
        src="public/assets/pfp.png"
        alt="headshot of Surya Sure wearing a blue hoodie, standing in an office space"
        className="info-img"
      />
      <h1 className="info-name">Surya Sure</h1>
      <h2 className="info-role">AI Developer</h2>
      <a
        href="https://fringe-loon-3762.typedream.app/"
        target="_blank"
        className="info-site"
      >
        suryasure.com
      </a>
      <div className="info-btns">
        <a href="mailto:suryasure734@gmail.com" className="info-links">
          <button className="info-email">
            <i className="fa-solid fa-envelope info-email-icon"></i>Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/surya-sure-9ba9b2220/"
          target="_blank"
          className="info-links"
        >
          <button className="info-linkedin">
            <i className="fa-brands fa-linkedin info-linkedin-icon"></i>LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
