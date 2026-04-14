import React from 'react';
import randImg from './../../../assets/download.jpeg'

const FriendsCard = () => {
    return (
        <div className={'pt-10'}>
            <h3 className={'text-[#1F2937] font-semibold text-2xl'}>Your Friends</h3>
            <div className={'grid grid-cols-4 gap-6 py-8'}>
                <div className={'p-6 text-center bg-white rounded-lg shadow-lg flex flex-col items-center gap-2'}>
                    <div className={'h-25 w-25 rounded-full overflow-hidden'}>
                        <img src={randImg} alt=""/>
                    </div>
                    <h3 className={'pb-4 text-[#1F2937] font-semibold text-xl'}>David Kim</h3>
                    <p className={'text-sm text-[#64748B]'}>62d ago</p>
                    <p className={'badge badge-soft badge-success'}>work</p>
                    <p className={'badge badge-warning'}>Almost Due</p>
                </div>

            </div>

        </div>
    );
};

export default FriendsCard;