import "./About.css";
// import SeviceIntro from '../../../Assets/myProfile/ProfileImg.png'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServiceIntro = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="about container" id="about">
        <div className="about__container">
          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h6 className="text-secondary">{t("home.experience")}</h6>
                <span className="text-secondary">{t("home.1year")}</span>
              </div>

              <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h6 className="text-secondary">{t("home.completed")}</h6>
                <span className="text-secondary">{t("home.55projects")}</span>
              </div>

              <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h6 className="text-secondary ">{t("home.support")}</h6>
                <span className="text-secondary">{t("home.online")}</span>
              </div>
            </div>

            <p className="about__description">{t("home.contact")}</p>
            <Link
              to="/contact"
              className="section_btn site-btn"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {t("home.contactBtn")}
            </Link>
          </div>

          {/* <img src={SeviceIntro} alt="" className="about__img" /> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
