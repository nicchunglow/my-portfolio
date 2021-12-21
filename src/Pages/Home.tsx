import React from "react";
import myAvatar from "../myAvatar.svg";
import NavigationButton from "../Components/NavigationButton";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white-600 min-h-screen justify-center	items-center">
      <img src={myAvatar} className="rounded-full bg-orange-500" alt="profile" title="Hi! I'm tooltip" />
      <div className="pt-5 capitalize">
        <h2 className="font-bold text-xl">Nicholas Chung</h2>
        <p>Full Stack Developer</p>
        <p>JS/TS</p>
        <span className="flex flex-row">
          <h4>Coding motto - </h4>
          <p>"leave the code better than you found it"</p>
        </span>
        <span className="my-5 flex justify-evenly">
          <NavigationButton text="About" location="about" />
          <NavigationButton text="Skills" location="skills" />
          <NavigationButton text="Resume" location="resume" />
        </span>
      </div>
    </div>
  );
};

export default Home;
