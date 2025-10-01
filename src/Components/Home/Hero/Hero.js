import React from 'react';
import './Hero.css';
// import myImg from '../../../img/myImg.JPG'
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import myImg from '../../../Assets/myProfile/anikPro.png';
import resume from '../../../Assets/mySelf/Md_Anik_Resume(S.Dev).pdf';
import downloadResume from '../../../img/img_btn_icon.png';
import Particles from 'react-tsparticles';

const Hero = () => {
  const particlesInit = (main) => {
  };

  const particlesLoaded = (container) => {
  };

  const { t } = useTranslation();

  return (
    <div id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 600,
                duration: 2,
                opacity: 0.8,
                size: 80,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#EEF2E6",
            },
            links: {
              color: "#EEF2E6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0.4,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 150,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value:{ min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="bannerContainer">
        <div className="row">
          <div className="col-md-8 text-white hero-details"

            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{ marginTop: "8rem" }}>

            <p className="personal-profile__name">
              <span >{t('home.name')}</span></p>
            <p className="personal-profile__work"><span style={{ fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Software Developer', ' Full-Stack Developer ⚛',]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </span></p>
            <div className='bannerDiscription'>
              {/* <p>Are you looking for a professional mern stack developer ? Who can build a fully-featured, clean code responsive single/multi-page mern stack website.If your ans 'yes',
              Welcome! You are in the right place.</p> */}
              <p>{t('home.bannerDescription')}</p>
              <a href={resume} target="blank" className="section_btn site-btn"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"><img src={downloadResume} alt="" />{t('home.downloadResume')}</a>
            </div>
            <div className="personal-profile__social mt-2 ms-4">
              <a href="https://github.com/shohidul-jaman-anik" target="blank"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/md-anik-495651218/" target="blank"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100010867243524" target="blank"><i className="fa fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/sohidul_jaman_anik/" target="blank"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-md-4 img-fluid "
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className=" mb-3 img-fluid profilePic" src={myImg} alt="" data-aos="fade-up"
              data-aos-duration="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;