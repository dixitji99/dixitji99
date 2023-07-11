import { education } from "../../constants/education";
import "./Education.scss";

const Education = () => {
  return (
    <>
      <div className="education">
        <div className="education__headers">
          Education
          <hr className="underline" />
        </div>
        <div className="education__data">
          {education.map((edu) => (
            <div className="education__data--item">
              <div className="education__data--college">
                <a href={edu.collegeURL} target="_blank" rel="noreferrer">
                  {edu.college}
                </a>
                <span>
                  {edu.DOJ.toString()} - {edu.DOC.toString()}
                </span>
              </div>
              <span className="education__data--course">{edu.course}</span>
              <div className="education__data--summary">
                <ul>
                  {edu.summary.map((summ, indx) => (
                    <li key={`edu-${indx}`}>{summ}</li>
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

export default Education;
