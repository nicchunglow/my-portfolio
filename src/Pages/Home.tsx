import React from "react";
import myAvatar from "../myAvatar.svg";
import "./Home.css"

const Home: React.FC = () => {
  return (
    <div className="w-full gradient-background-colour-blue-reverse home-container">
      <div id="home" className="flex flex-col min-h-screen justify-center	items-center text-center">
        <img src={myAvatar} className="rounded-full image-background mt-10 w-44" alt="profile" />
        <div className="pt-5 capitalize">
          <h2 className="font-bold text-xl">Nicholas Chung</h2>
          <p>Full Stack Developer</p>
          <p>JS/TS</p>
          <span className="flex flex-row italic">
            <p>"leave the code better than you found it"</p>
          </span>
          <span className="my-5 flex justify-evenly"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
