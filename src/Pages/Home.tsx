import React from "react";
import myAvatar from "../myAvatar.svg";

const Home: React.FC = () => {
  return (
    <div id="home" className="flex flex-col bg-white-600 min-h-screen justify-center	items-center text-center">
      <img src={myAvatar} className="rounded-full bg-orange-500 mt-10 w-1/5 min-w-[150px]" alt="profile" />
      <div className="pt-5 capitalize">
        <h2 className="font-bold text-xl">Nicholas Chung</h2>
        <p>Full Stack Developer</p>
        <p>JS/TS</p>
        <span className="flex flex-row italic">
          <p>"leave the code better than you found it"</p>
        </span>
        <span className="my-5 flex justify-evenly">
        </span>
      </div>
    </div>
  );
};

export default Home;
