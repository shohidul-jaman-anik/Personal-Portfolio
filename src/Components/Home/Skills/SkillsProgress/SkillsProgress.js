import ProgressBar from "@ramonak/react-progress-bar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./SkillsProgress.css";

const SkillsProgress = () => {
  const { t } = useTranslation();

  return (
    <div className="mySkill-section container mt-5" id="mySkills">
      <h1 className="heading"> {t("home.mySkill")} </h1>
      <div className="mySkill-container">
        <div className="skillAbout  w-100" data-aos="fade-right">
          <div>
            <p>{t("home.skill")}</p>
            <Link
              to="/about"
              className="section_btn site-btn"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {t("home.exploreMore")}
            </Link>
          </div>
        </div>
        <div className="skillProgress w-100" data-aos="fade-left">
          <div className="skill">
            <h5>C++</h5>
            <ProgressBar
              completed={80}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="90%"
            />
          </div>
          <div className="skill">
            <h5>Python</h5>
            <ProgressBar
              completed={90}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="88%"
            />
          </div>
          <div className="skill">
            <h5>JavaScript</h5>
            <ProgressBar
              completed={95}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="90%"
            />
          </div>
          <div className="skill">
            <h5>React</h5>
            <ProgressBar
              completed={90}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="60%"
            />
          </div>
          <div className="skill">
            <h5>Node.js</h5>
            <ProgressBar
              completed={90}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="90%"
            />
          </div>
          <div className="skill">
            <h5>Mongodb</h5>
            <ProgressBar
              completed={90}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="50%"
            />
          </div>
          <div className="skill">
            <h5>My Sql</h5>
            <ProgressBar
              completed={70}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="78%"
            />
          </div>
          <div className="skill">
            <h5>AWS</h5>
            <ProgressBar
              completed={70}
              bgColor="blue"
              baseBgColor="rgb(191, 191, 255)"
              height="15px"
              labelColor="#ffffff"
              labelSize="10px"
              animateOnRender
              maxCompleted={100}
              customLabel="72%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;
