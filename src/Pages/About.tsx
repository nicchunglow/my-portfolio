import React from "react";
import myAvatar from "../myAvatar.svg";
import NavigationButton from "../Components/NavigationButton";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white-600 min-h-screen justify-center	items-center">
      <img src={myAvatar} className="rounded-full bg-orange-500" alt="profile" title="Hi! I'm tooltip" />
      <NavigationButton text="Go Back" location={-1}/>
    </div>
  );
};

export default Home;
