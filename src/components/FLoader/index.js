import React from 'react';
import './loader.css'
import { TailSpin } from 'react-loader-spinner';

const FLoader = () => {
    return (
        <div className="spinner">
            <TailSpin type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
    )
};

export default FLoader;
