import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <div>
      <a
        href="https://drive.google.com/file/d/1ERkZq08P_9aIudPbYfWe9unxuw4KDqtF/view"
        target="blank"
        className="download"
      >
        Download Pdf
      </a>
      <img src="/resume.jpg" width="100%" alt="resume" />
    </div>
  );
};

export default Resume;
