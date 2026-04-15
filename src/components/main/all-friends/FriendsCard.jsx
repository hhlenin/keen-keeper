import React, {use} from 'react';
import randImg from './../../../assets/download.jpeg'

const FriendsCard = ({friendsPromise}) => {
    const friends = use(friendsPromise)
    return (
        <div className={'pt-10'}>
            <h3 className={'text-[#1F2937] font-semibold text-2xl'}>Your Friends</h3>
            <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8'}>
                {friends.map(friend => (
                    <div key={friend.id} className={'p-6 text-center bg-white rounded-lg shadow-lg flex flex-col items-center gap-2'}>
                        <div className={'h-25 w-25 rounded-full overflow-hidden'}>
                            <img src={randImg} alt=""/>
                        </div>
                        <h3 className={'pb-4 text-[#1F2937] font-semibold text-xl'}>{friend.name}</h3>
                        <p className={'text-sm text-[#64748B]'}>{friend.days_since_contact}d ago</p>

                        <div className={'flex gap-2'}>{
                            friend.tags.map((tag, index) => (
                                <span key={index} className={'badge badge-soft badge-success'}>{tag}</span>
                            ))
                        }</div>
                        <p className={`badge capitalize ${friend.status === 'almost-due' ? 'badge-warning' : friend.status === 'on-track' ? 'badge-success' : 'badge-error' }`}>{friend.status.replace('-', ' ')}</p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default FriendsCard;