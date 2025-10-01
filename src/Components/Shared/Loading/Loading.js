import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loadingStyle h-screen flex justify-center items-start'>
            <LoopCircleLoading size="large" color="#4a4cb3" />;
        </div>
    );
};

export default Loading;
