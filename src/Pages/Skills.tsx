import React from "react";
import NavigationButton from "../Components/NavigationButton";
import AllSkills from "../Constants/Skills.constants";

const Skills: React.FC = () => {
  const card = (skill: any) => {
    return (
      <span className="flex flex-col justify-around items-center font-thin text-xl px-4 py-4 bg-white-500">
        {skill.imageLink && <img src={skill.imageLink} alt={skill.name} className="h-12 min-h-[20px]" />}
        {skill.imageLink ? <p className="text-xs">{skill.name}</p> : <p className="text-sm italic px-4 py-4">{skill.name}</p>}
      </span>
    );
  };
  return (
    <div className="flex flex-col capitalize mt-10 items-center">
      <h2 className="font-thin text-3xl my-5 ">Skills Gallery</h2>
      <div className="flex justify-start">
      <NavigationButton text="Go Back" location={-1} />
      </div>
      <div className="border-2 rounded py-2 px-2 mt-5 w-4/6">
        <h2 className="font-thin text-xl my-5 ">Languages</h2>
        <div className="flex flex-wrap justify-evenly">{AllSkills.languageArr.map((skill) => card(skill))}</div>
        <h2 className="font-thin text-xl my-5 ">Frameworks/Libraries</h2>
        <div className="flex flex-wrap justify-evenly">{AllSkills.frameworkArr.map((skill) => card(skill))}</div>
        <h2 className="font-thin text-xl my-5 ">Databases</h2>
        <div className="flex flex-wrap justify-evenly">{AllSkills.databaseArr.map((skill) => card(skill))}</div>
        <h2 className="font-thin text-xl my-5 ">Cloud and DevOps</h2>
        <div className="flex flex-wrap justify-evenly">{AllSkills.DevOpsArr.map((skill) => card(skill))}</div>
        <h2 className="font-thin text-xl my-5 ">Version Control</h2>
        <div className="flex flex-wrap justify-evenly">{AllSkills.versionControlArr.map((skill) => card(skill))}</div>
        <h2 className="font-thin text-xl my-5 ">Agile Methologies</h2>
        <div className="flex flex-wrap justify-evenly">{AllSkills.AgileArr.map((skill) => card(skill))}</div>
      </div>
    </div>
  );
};

export default Skills;
