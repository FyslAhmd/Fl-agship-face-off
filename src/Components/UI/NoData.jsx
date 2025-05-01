import React from 'react';
import Btn from './Btn';
import { Link } from 'react-router';

const NoData = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl font-bold my-4'>No Data Found</h1>
            <p className='text-center text-2xl font-bold my-4'>Please try again later</p>
            <Link to='/'><Btn text={'Back to home'}></Btn></Link>
        </div>
    );
};

export default NoData;