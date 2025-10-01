import React from 'react';
import './About.css'
import anik from "../../Assets/myProfile/anik.png"
import Skills from '../Home/Skills/Skills';
import { useTranslation } from 'react-i18next';


const About = () => {

  const { t } = useTranslation();

  return (
    <div>
      <div className=' mainContainer container'>
        <div className=""
          data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="500">
          <h2 className="aboutTitle ">Hi_</h2>
          <p className='description'> {t('about.description')}</p>
          <div className="personal-profile__contacts">
            <dl className="contact-list contact-list__opacity-titles">
              <dt>Age:</dt>
              <dd>21</dd>
              <dt>Phone:</dt>
              <dd><a href="018 628 124 22">018 628 124 22</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:anikh499@gmail.com" className='text-lowercase'>anikh499@gmail.com</a></dd>
              <dt>Address:</dt>
              <dd>Dhaka, Bangladesh</dd>
            </dl>
          </div>
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-easing="linear"
          data-aos-duration="500">
          <img className='aboutImg' src={anik} alt="" />
        </div>
      </div>
      <Skills></Skills>
    </div>
  );
};

export default About;