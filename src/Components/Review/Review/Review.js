import React from 'react';
import { useTranslation } from 'react-i18next';
import './Review.css'

const Review = ({clientReview}) => {
    const { t } = useTranslation();
    return (
        <div className='singleReview'>
            <div className='review-section shadow-sm '>
                <div className='student-info '>
                    <img src={clientReview.userImg} alt="" />
                    <div className='review-main'>
                        <h4>{clientReview.name}</h4>
                        <h4 className='fs-6'>{t('review.review')} : {clientReview.ratings}⭐</h4>
                    </div>
                </div>
                <p className='text-start'>{clientReview.reviews}</p>
            </div>

        </div>
    );
}


export default Review;