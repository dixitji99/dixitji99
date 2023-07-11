import { ReactComponent as MailIcon } from "../../assets/icons/mail_r_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin_icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone_r_icon.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location_icon.svg";
import "./Social.scss";

function Social() {
  return (
    <>
      <div className="social_media__items">
        <div className="social_media__items--email">
          <MailIcon />
          <a href="mailto:ayushdixitad9@gmail.com">ayushdixitad9@gmail.com</a>
        </div>
        <div className="social_media__items--phone">
          <PhoneIcon />
          9653057065
        </div>
        <div className="social_media__items--linkedin">
          <LinkedInIcon />
          <a
            href="http://www.linkedin.com/in/ayush-dixit-091851190/"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/ayush-dixit-091851190/
          </a>
        </div>
        <div className="social_media__items--location">
          <LocationIcon />
          India
        </div>
      </div>
      <hr className="social_media__seperator" />
    </>
  );
}

export default Social;
