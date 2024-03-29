import React from "react";
import WavyHeader from "../Components/WavyHeader";
import "../index.css";

const About: React.FC = () => {
  return (
    <div className="w-full custom-shape-divider-top">
      <WavyHeader shapeFill="reverse" />
      <div className="flex flex-col justify-center items-center">
        <div id="about-me" className="w-1/2 pt-12 pb-12">
          <div className="mt-10">
            <h2 className="font-bold text-3xl ">About</h2>
            <h2 className="font-bold text-2xl mt-10">Work</h2>
            <p className="font-extralight text-sm">
              Marketeer turned developer, I now work on both frontend and backend web development, using mainly JS/TS. I
              have been a software engineer for 3 years, with domain expertise in Regulatory Tech, KYC and AML, as well
              as the retail analytics industry . 🧑‍💻
            </p>
            <h2 className="font-bold text-2xl mt-10">Giving back</h2>
            <p className="font-extralight text-sm">
              As part of my background, it is important to me to see people around me succeed. Hence, I actively share
              my knowledge on web development through teaching, opportunities and mentorship.
            </p>
            <h2 className="font-bold text-2xl mt-10">Interest</h2>
            <p className="font-extralight text-sm">
              I'm a strong advocate in the Singapore street dance community. In my free time, I do share in the area of
              performing art as well as create opportunities within the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
