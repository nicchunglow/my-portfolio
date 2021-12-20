import React from "react";
import myAvatar from "../myAvatar.svg";

const Home: React.FC = () => {
  return (
    <div className="font-mono text-center">
      <header className="flex flex-col bg-neutral-600 min-h-screen justify-center	items-center">
        <img src={myAvatar} className="rounded-full bg-orange-500" alt="profile" title="Hi! I'm tooltip" />
        <div className="pt-5 capitalize">
          <h2 className="font-bold text-xl">Nicholas Chung</h2>
          <p>Full Stack Developer</p>
          <span className="flex flex-row">
            <h4>Coding motto - </h4>
            <p>"leave the code better than you found it"</p>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Home;
