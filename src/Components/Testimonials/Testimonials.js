import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Testimonials.css';


const Testimonials = () => {

  const { t } = useTranslation();

  return (
    <section id="Testimonials" className="container">
      <div>
        <h3 className="titleStyle">{t('review.happyClints')}</h3>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src='https://i.ibb.co/GtTDpQn/user-1.png' className="d-block" alt="..." />
              <div className="mt-5 d-md-block">
                <h5>{t('review.name4')}</h5>
                <p>{t('review.review4')}</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src='https://i.ibb.co/N9JXGdh/user-3.png' className="d-block" alt="..." />
              <div className="mt-5 d-md-block">
                <h5>{t('review.name3')}</h5>
                <p>{t('review.review3')}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src='https://i.ibb.co/vd0GSjJ/user-2.png' className="d-block" alt="..." />
              <div className="mt-5 d-md-block">
                <h5>{t('review.name2')}</h5>
                <p>{t('review.review2')}</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className='site-btn' data-aos="zoom-in">
          <Link to="/addReview" className="navigatebtn"
            data-aos-easing="linear"
            data-aos-duration="500">{t('review.reviewBtn')}</Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;