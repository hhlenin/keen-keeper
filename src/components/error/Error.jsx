import React from 'react';
import Img404 from './../../assets/404.png'
import {MoveLeft} from 'lucide-react'

const Error = () => {
    return (
        <div className="py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <img src={Img404} alt=""/>
                <h1 className={'text-error text-9xl font-extrabold'}>404</h1>
                <p className={'text-error px-3 sm:px-0 md:text-3xl font-bold'}>Are you lost? We don't know how are you end up here!</p>
                <a href={'/'} className="mt-5 btn btn-primary"><MoveLeft size={16} strokeWidth={2} />Homepage</a>
            </div>

        </div>
    );
};

export default Error;