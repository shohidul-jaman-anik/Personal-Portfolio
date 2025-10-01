import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../img/notFound.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
             <img className='w-100'style={{height:"32rem"}}  src={notFound} alt="" />
            <div className='notFound'>
                <button className='btn-sm mt-2'><Link to='/'>Go Back Home</Link></button>
            </div>
        </div>
    );
};

export default NotFound;