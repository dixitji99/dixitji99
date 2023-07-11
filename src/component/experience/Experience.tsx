import { experience } from "../../constants/experience";
import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience__headers">
          Experience
          <hr className="underline" />
        </div>
        <div className="experience__data">
          {experience.map((exp) => (
            <div className="experience__data--item">
              <div className="experience__data--company">
                <a href={exp.companyURL} target="_blank" rel="noreferrer">
                  {exp.company}
                </a>
                <span>
                  {exp.DOJ.toString()} - {exp.DOL.toString()}
                </span>
              </div>
              <div className="experience__data--designation">
                {exp.designation}
              </div>
              <div className="experience__data--summary">
                <ul>
                  {exp.summary.map((summ) => (
                    <li>{summ}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
