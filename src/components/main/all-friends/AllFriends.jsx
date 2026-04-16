import React, {Suspense} from 'react';
import {Plus} from "lucide-react"
import FriendsCard from "./FriendsCard.jsx";

const fetchFriends = async () => await fetch('/friends.json').then(res => res.json());

const AllFriends = () => {
    const friendsPromise = fetchFriends();

    return (
        <div className={'py-10 lg:py-20'}>
            <div className={'flex flex-col items-center justify-center text-center'}>
                <h2 className={'pb-4 text-[#1F2937] font-bold text-5xl'}>Friends to keep close in your life</h2>
                <p className={'pb-8 text-[#64748B]'}>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
                    relationships that matter most.</p>
                <button className={'btn bg-[#244D3F] text-white'}><Plus size={16} strokeWidth={2} />Add a Friend</button>
            </div>
            <div className={'grid sm:grid-cols-2 md:grid-cols-4 gap-6 py-8'}>
                <div className={'p-8 text-center bg-white rounded-lg shadow-lg'}>
                    <h3 className={'pb-4 text-[#244D3F] font-semibold text-3xl'}>10</h3>
                    <p className={'text-lg text-[#64748B]'}>Total Friends</p>
                </div>
                <div className={'p-8 text-center bg-white rounded-lg shadow-lg'}>
                    <h3 className={'pb-4 text-[#244D3F] font-semibold text-3xl'}>3</h3>
                    <p className={'text-lg text-[#64748B]'}>On Track</p>
                </div>
                <div className={'p-8 text-center bg-white rounded-lg shadow-lg'}>
                    <h3 className={'pb-4 text-[#244D3F] font-semibold text-3xl'}>6</h3>
                    <p className={'text-lg text-[#64748B]'}>Need Attention</p>
                </div>
                <div className={'p-8 text-center bg-white rounded-lg shadow-lg'}>
                    <h3 className={'pb-4 text-[#244D3F] font-semibold text-3xl'}>9</h3>
                    <p className={'text-lg text-[#64748B]'}>Interaction this month</p>
                </div>

            </div>
            <div className="divider before:bg-[#E9E9E9] after:bg-[#E9E9E9]"></div>
            <Suspense fallback={
                <div className={'py-10 flex items-center justify-center'}>
                    <span className="loading loading-infinity loading-xl"></span>
                </div>
            }>
                <FriendsCard friendsPromise={friendsPromise}></FriendsCard>
            </Suspense>
        </div>
    );
};

export default AllFriends;