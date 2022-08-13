import React from "react";

const About: React.FC = () => {
  return (
    <div id="about-me" className="flex flex-col justify-center items-center w-1/2 pt-12">
      <div className="mt-10">
        <h2 className="font-bold text-3xl ">About</h2>
        <p className="font-extralight">Nicholas Chung</p>
        <h2 className="font-bold text-2xl mt-10">Work</h2>
        <p className="font-extralight text-sm">
          Marketeer turned developer, I now work on both frontend and backend web development, using mainly JS/TS. I have been a software
          engineer for 3 years, with domain expertise in Regulatory Tech, KYC and AML, as well as the retail analytics industry . 🧑‍💻
        </p>
        <h2 className="font-bold text-2xl mt-10">Giving back</h2>
        <p className="font-extralight text-sm">
          As part of my background, it is important to me to see people around me succeed. In efforts to do that, I share my knowledge on
          web development and use software development as a new outlook in life.
        </p>
        <h2 className="font-bold text-2xl mt-10">Interest</h2>
        <p className="font-extralight text-sm">
          I'm a strong advocate in the Singapore street dance community. In my free time, I do sharing on the performing art as well as
          create opportunities within the community. Maybe this is where I can my passion for helping people through software development.
        </p>
      </div>
    </div>
  );
};

export default About;
