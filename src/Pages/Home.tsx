import React from "react";
import myAvatar from "../myAvatar.svg";
import linkedinLogo from "../assets/icons/linkedinLogo.svg";
import Email from "../assets/icons/email.svg";
import Github from "../assets/icons/github.svg";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="w-full gradient-background-colour-blue-reverse home-container">
      <div id="home" className="flex flex-col min-h-screen justify-center	items-center text-center">
        <img src={myAvatar} className="rounded-full image-background mt-10 w-44" alt="profile" />
        <div className="pt-5 capitalize">
          <h2 className="font-bold text-xl">Nicholas Chung</h2>
          <p>Full Stack Developer</p>
          <p>JavaScript/TypeScript</p>
          <span className="flex flex-row italic">
            <p>"Passion for Tech and Arts"</p>
          </span>
          <span className="my-5 flex justify-evenly">
          <a href="https://www.linkedin.com/in/nicchung" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} />
          </a>
          <a href="mailto:iamnicholaschung@gmail.com" target="_blank" rel="noreferrer">
            <img src={Email} />
          </a>
          <a href="https://github.com/nicchunglow" target="_blank" rel="noreferrer">
            <img src={Github} />
          </a>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
