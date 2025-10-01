import React, { useState } from 'react';
import './MyServices.css'
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

const MyServices = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { t } = useTranslation();

    return (
        <div className="services section">
            <div className='services__card'>
                <h5 className=''>{t('service.softDev')}</h5>
                <span className="services__button" onClick={handleShow}>
                {t('service.seeMore')} <i className="bx bx-right-arrow-alt services__icon"></i>
                </span>

                <Modal show={show} onHide={handleClose} style={{ marginTop: "20%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Software Development</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>A Fully Functional Dynamic Responsive Website.</p>
                        <p>Convert Figma, PSD to react website.</p>
                        <p>Multiple Page website design.</p>
                        <p>Design and mockups of products for companies.</p>
                    </Modal.Body>
                </Modal>
            </div>
            <div className='services__card'>
                <h5 className=''>{t('service.application')}</h5>
                <span className="services__button" onClick={handleShow}>
                {t('service.seeMore')} <i className="bx bx-right-arrow-alt services__icon"></i>
                </span>

                <Modal show={show} onHide={handleClose} style={{ marginTop: "20%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Application Development</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>All Functional Mern stack website.</p>
                        <p>  Service with more than 1 years of experience.Providing quality work to clients and companies.</p>
                        <p>Clean and strong website backend with Node.js and MongoDB.</p>
                        <p> Verifyed JWT token.</p>
                        <p>Design and mockups of products for companies.</p>
                    </Modal.Body>
                </Modal>
            </div>
            <div className='services__card'>
                <h5 className=''>{t('service.bug')}</h5>
                <span className="services__button" onClick={handleShow}>
                {t('service.seeMore')} <i className="bx bx-right-arrow-alt services__icon"></i>
                </span>

                <Modal show={show} onHide={handleClose} style={{ marginTop: "20%" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bug/Error  Solving</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Optimizing your content headings</p>
                        <p>Page speed optimization.</p>
                        <p>Internal linking structure.</p>
                        <p>Title & Meta tag  optimization.</p>
                        <p>Image optimization and alt tags.</p>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default MyServices;