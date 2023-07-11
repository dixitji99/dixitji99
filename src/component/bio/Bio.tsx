import { useTranslation } from "react-i18next";
import profileImage from "../../assets/images/profileImage.jpg";
import "./Bio.scss";
import { getYearsOfExp } from "../../utils/utils";

function Bio() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <div>
          <img
            src={profileImage}
            alt="Profile_Photo"
            className="header_profile_image"
          />
        </div>
        <div>
          <h1 className="header__name">Ayush Dixit</h1>
          <h4 className="header__designation">Software Engineer</h4>
        </div>
      </div>
      <div>
        <span className="objective">
          {t("bio:objective", { YEAROFEXP: getYearsOfExp() })}
        </span>
        <hr className="seperator" />
      </div>
    </>
  );
}

export default Bio;
