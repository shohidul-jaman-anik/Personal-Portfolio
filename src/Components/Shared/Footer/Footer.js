import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import card from '../../../img/card.jpg';
import './Footer.css';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    const { t } = useTranslation();
    return (
        <div class="container-fluid mx-auto ">
            <div class="subFooterContainer row justify-content-center mt-4 row-1 ">
                <div class="subFooter w-100">
                    <div class="w-75 mal">
                        <h1 class="text-black text-start footerHeader ">Have Any Project in Mind?</h1>
                        <p class="pb-3 text-black text-start">I'm excited to have the opportunity to work on your project as a Software Developer.
                        I'm excited to have the opportunity to work on your project as a developer.</p>

                        <div className="personal-profile__social text-start">
                            <a href="https://github.com/shohidul-jaman-anik" target="blank"><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/md-anik-495651218/" target="blank"><i className="fa fa-linkedin-square"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100010867243524" target="blank"><i className="fa fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/sohidul_jaman_anik/" target="blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <Link to="/contact" className='mx-auto'>
                        <button class=" fBtn">Contact me</button>
                    </Link>
                </div>


                {/* <div class="col-md-2"> <img class="img-1" src="https://i.imgur.com/jBlQcMI.png" /> </div> */}
            </div>

            <div class="row d-flex pb-4 px-4">
                <div className='footerDescription'>
                    <div className="row d-flex justify-content-between align-items-center brand-light-color mt-lg-5" id='voda'>
                        <div className="col-lg-5 contactContainer" data-aos="zoom-in-right"
                            >
                            <h3 className=' text-start ms-3'>{t('footer.contactUs')}</h3>
                            <div className='my-3'>
                                <h6 className="text-start ps-3">
                                    <i className="fas fa-map-marker-alt">
                                    </i> {t('footer.address')}</h6>
                                <h6 className="text-start ps-3"><i className="fas fa-envelope "></i> {t('footer.gmail')}: <span className='text-lowercase ms-2'>  anikh499@gmail.com</span></h6>
                                <h6 className="text-start ps-3">
                                    <i className="fas fa-info-circle">
                                    </i> {t('footer.mobile')} : <span className='ms-2'> (+88) 01862812422</span></h6>
                            </div>

                        </div>


                        <div className="col-lg-3 footer-text " data-aos="zoom-out-down">
                            <h3 className='text-start ms-3 mb-3 '>{t('footer.usefullLink')}</h3>
                            <h6 className="ps-3 text-start ">{t('footer.aboutMe')}</h6>
                            <h6 className="ps-3 text-start">{t('footer.refundPolicy')}</h6>
                            <h6 className="ps-3 text-start">{t('footer.term')}</h6>
                            <h6 className="ps-3 text-start">{t('footer.privacyPolicy')}</h6>
                        </div>


                        <div className="col-lg-4 paymentContainer" data-aos="zoom-in-left" >
                            <div>
                                <h3 className='paymentHeader mb-2 text-start ms-4'>{t('footer.payment')}</h3>
                                <img className="img-fluid rounded paymentImg me-5" src={card} alt="" useMap='#payment' />
                                <map name="payment">
                                    <area shape="react" coords="36,100,178,4" href="https://www.visa.co.in/pay-with-visa/find-a-card/credit-cards.html" alt="" target='blank' />
                                    <area shape="react" coords="208,106,350,10" href="https://www.mastercard.us/en-us/personal/ways-to-pay/click-to-pay.html" alt="" />
                                    <area shape="react" coords="372,107,514,11" href="https://www.americanexpress.com/" alt="" />
                                    <area shape="react" coords="553,111,695,15" href="https://www.dutchbanglabank.com/" alt="" />
                                    <area shape="react" coords="41,207,226,110" href="https://www.bkash.com/" alt="" target='blank' />
                                    <area shape="react" coords="255,203,384,111" href="https://www.ebl.com.bd/retail-loan/ebl-fast-cash" alt="" />
                                    <area shape="react" coords="392,202,547,112" href="https://www.bracbank.com/en/" alt="" target='blank' />
                                    <area shape="react" coords="579,206,690,119" href="https://www.islamibankbd.com/" alt="" />
                                </map>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright mt-5 '>
                    <span className=''>Copyright &copy; {year}</span>
                    <p className=''>{t('footer.reserve')} <span className='footer-header' >{t('footer.name')}</span></p>
                </div>
            </div>
        </div>
    );
};
export default Footer;