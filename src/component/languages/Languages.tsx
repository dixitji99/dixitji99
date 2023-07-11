import { languages } from "../../constants/languages";
import "./Languages.scss";

const Languages = () => {
  return (
    <>
      <div className="languages">
        <div className="languages__headers">
          Languages
          <hr className="underline" />
        </div>
        <div className="languages__data">
          {languages.map((lan, indx) => (
            <li key={`lan-${indx}`}>{lan}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
