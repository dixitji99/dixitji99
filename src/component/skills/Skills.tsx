import { technicalSkills, toolsNTechnology } from "../../constants/skills";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills__headers">
          Skills
          <hr className="underline" />
        </div>
        <div className="skills__technical">
          <div className="skills__technical--header">Technical Skills :</div>
          <div className="skills__technical--set">
            {technicalSkills.map((skill, indx) => (
              <li key={`skill-${indx}`}>{skill} </li>
            ))}
          </div>
        </div>
        <div className="skills__tools">
          <div className="skills__tools--header">Tools & Technology :</div>
          <div className="skills__tools--set">
            {toolsNTechnology.map((skill, indx) => (
              <li key={`tech-skill-${indx}`}>{skill} </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
