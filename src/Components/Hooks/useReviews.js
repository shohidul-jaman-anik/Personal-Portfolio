import React, { useEffect, useState } from 'react';

const useReviews = () =>{
    
   const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://intense-woodland-21531.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);

    return [reviews, setReviews];
}

export default useReviews;