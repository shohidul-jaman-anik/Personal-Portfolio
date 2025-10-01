import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Review from '../Review/Review';
import './Reviews.css';
const Reviews = () => {
    // const [reviews, setReviews] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5);


    // useEffect(() => {
    //     fetch(`https://personal-protfolio-server-anik2861.vercel.app/reviews?page=${page}&size=${size}`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [size, page]);



    //For pagination
    useEffect(() => {
        fetch("https://personal-protfolio-server-anik2861.vercel.app/reviewCount")
            .then(res => res.json())
            .then(data => {
                const count = data.result;
                const page = Math.ceil(count / 5);
                setPageCount(page);
            })
    }, [])


    const { data: reviews, isLoading, error, data } = useQuery(["review", page, size], async () => await fetch(`https://personal-protfolio-server-anik2861.vercel.app/reviews?page=${page}&size=${size}`)
        .then(res => res.json()))


    // const { data: reviews, isLoading, error, data } = useQuery("review", () => fetch(`https://personal-protfolio-server-anik2861.vercel.app/reviews?page=${page}&size=${size}`)
    //     .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div >

            <div className='review-container container '>

                {
                    reviews?.map(clientReview => <Review
                        key={clientReview._id}
                        clientReview={clientReview}
                    ></Review>)

                }

            </div>
            <div className='pagination text-center m-lg-4 mt-3 '>
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={page === number ? 'selected' : ''}
                        onClick={() => setPage(number)}
                    >{number + 1}</button>)
                }
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="10" >3</option>
                    <option value="5" selected>5</option>
                    <option value="10" >10</option>
                </select>
            </div>
        </div>
    );
};

export default Reviews;