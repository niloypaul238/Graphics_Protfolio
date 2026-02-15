"use client"
import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const loading = () => {
    return (

        <div className='w-full flex justify-center items-center mx-auto'>

            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />

        </div>

    );
};

export default loading;