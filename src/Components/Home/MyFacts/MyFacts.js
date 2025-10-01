import React from 'react';
import './MyFacts.css'
import about from '../../../Assets/form-illustrator/Programming-pana.svg'
import CountUp from 'react-countup';
import swal from 'sweetalert'
import { useTranslation } from 'react-i18next';

const MyFacts = () => {
    const { t } = useTranslation();
    return (
        <section className="our-facts">
            <div className="container">
                <div className="row">
                    <h2>{t('home.fewFactTitle')} <span className='nameStyle'> {t('home.myself')}</span></h2>
                    <p>{t('home.subTitle')}</p>
                    <div className="col-lg-6"
                        data-aos="fade-down-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        <div className="row">
                            <div className="col-lg-12">

                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="count-area-content">
                                            <div className="count-digit">
                                                <CountUp end={55} delay={2} duration={15} />
                                            </div>
                                            <div className="count-title">{t('home.completeProjects')}<span className='emoji'>🤝</span></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="count-area-content">
                                            <div className="count-digit">
                                                <CountUp end={102} delay={1} duration={15} />
                                            </div>
                                            <div className="count-title"><small>{t('home.buyer')}</small><span className='emoji'>🌍</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="count-area-content new-students">
                                            <div className="count-digit">
                                                <CountUp end={178} delay={1} duration={17} />
                                            </div>
                                            <div className="count-title">{t('review.happyClints')}<span className='emoji'>😊</span></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="count-area-content">
                                            <div className="count-digit">
                                                <CountUp end={5} delay={1} duration={10} />
                                            </div>
                                            <div className="count-title">{t('review.award')}<span className='emoji'>🏆</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center"
                        data-aos="fade-down-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        <div className="">
                            <img className='w-100 factImg' style={{ height: "30rem",marginLeft:"2rem", borderRadius: "3rem" }} src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyFacts;