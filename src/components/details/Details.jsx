import React, {use, useContext} from 'react';
import {BellDot, Archive, Trash2, PhoneCall, MessageSquare, Video, History} from 'lucide-react'
import {useParams} from "react-router";
import {FriendsContext} from "../../context/FriendsContext.jsx";

const fetchFriends =  fetch('/friends.json').then(res => res.json());

const Details = () => {

    const context = useContext(FriendsContext);
    const {handleCommunication, communication} = context;
    const params = useParams();
    const friends = use(fetchFriends);

    const friend = friends.find(friend => friend.id === parseInt(params.id));
    if (!friend) {
        window.location.href = "/not-found";
    }
    const friendCommunicationFilterData = communication.filter(data => data.friend_id === friend.id)

    return (
        <div className={'gap-2 py-10 lg:py-20 h-full w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 md:gap-y-3 md:gap-x-5'}>
            <div className={'-order-4 sm:order-0 col-span-2 row-span-4 py-8 text-center bg-white rounded-lg shadow-lg flex flex-col items-center gap-2'}>

                <div className={'h-25 w-25 rounded-full overflow-hidden'}>
                    <img src={friend.picture} alt=""/>
                </div>
                <h3 className={' text-[#1F2937] font-semibold text-xl'}>{friend.name}</h3>
                <p className={'text-sm text-[#64748B]'}>{friend.days_since_contact}d ago</p>
                <div className={'flex gap-2'}>{
                    friend.tags.map((tag, index) => (
                        <span key={index} className={'badge badge-soft badge-success'}>{tag}</span>
                    ))
                }</div>
                <p className={`badge capitalize ${friend.status === 'almost-due' ? 'badge-warning' : friend.status === 'on-track' ? 'badge-success' : 'badge-error' }`}>{friend.status.replace('-', ' ')}</p>
                <p className={'font-medium text-[#64748B] italic'}>"{friend.bio}"</p>
                <p className={'text-sm text-[#64748B]'}>Preferred: {friend.email}</p>

            </div>

            <div className={'py-3 sm:p-0 col-span-1 lg:row-span-2 text-center bg-white rounded-lg shadow-lg flex flex-col justify-center'}>
                    <h3 className={'font-semibold text-3xl text-[#244D3F]'}>{friend.days_since_contact}</h3>
                    <p className={'text-[#64748B]'}>Days Since Contact</p>
            </div>
            <div className={'py-3 sm:p-0 col-span-1 lg:row-span-2 text-center bg-white rounded-lg shadow-lg flex flex-col justify-center'}>
                <h3 className={'font-semibold text-3xl text-[#244D3F]'}>{friend.goal}</h3>
                <p className={'text-[#64748B]'}>Goal (Days)</p>
            </div>
            <div className={'py-3 sm:p-0 col-span-2 lg:col-span-1 lg:row-span-2 text-center bg-white rounded-lg shadow-lg flex flex-col justify-center'}>
                <h3 className={'font-semibold text-3xl text-[#244D3F]'}>{friend.next_due_date}</h3>
                <p className={'text-[#64748B]'}>Next Due</p>
            </div>

            <div className={'col-span-2 p-3 md:py-5 sm:p-0 sm:col-span-2 md:col-span-3 row-span-2 px-6 bg-white rounded-lg shadow-lg flex justify-center items-center gap-2'}>
               <div className={'w-full p-3'}>
                   <div className={'flex justify-between items-center'}>
                       <h4 className={'font-medium text-xl text-[#244D3F]'}>Relationship Goal</h4>
                       <button className={'btn'}>Edit</button>
                   </div>
                   <p className={'text-lg text-[#64748B]'}>Connect every <span className={'text-[#1F2937] font-bold'}>{friend.goal} days</span></p>
               </div>
            </div>

            <div className={'-order-3 sm:order-0 md:btn flex justify-center items-center gap-2.5 col-span-2 row-span-1 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <BellDot size={16} strokeWidth={2} /> Snooze 2 weeks
            </div>

            <div className={'col-span-2 sm:col-span-2 md:col-span-3 row-span-3 p-6 text-left bg-white rounded-lg shadow flex justify-center items-center'}>
                <div className={'w-full'}>
                    <h3 className={'pb-4 text-xl font-medium text-[#244D3F]'}>Quick Check-In</h3>
                    <div className={'cursor-pointer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
                        <div onClick={() => handleCommunication(friend, 'call')} className={'bg-[#F8FAFC] rounded-lg shadow-lg p-4 grid place-items-center space-y-2'}>
                            <PhoneCall strokeWidth={2.5} size={28} />
                            <p className={'text-[#1F2937] text-lg'}>Call</p>
                        </div>
                        <div onClick={() => handleCommunication(friend, 'text')} className={'bg-[#F8FAFC] rounded-lg shadow-lg p-4 grid place-items-center space-y-2'}>
                            <MessageSquare strokeWidth={2.5} size={28} />
                            <p className={'text-[#1F2937] text-lg'}>Text</p>
                        </div>
                        <div onClick={() => handleCommunication(friend, 'video')} className={'bg-[#F8FAFC] col-span-2 sm:col-span-2 md:col-span-1 rounded-lg shadow-lg p-4 grid place-items-center space-y-2'}>
                            <Video strokeWidth={2.5} size={28} />
                            <p className={'text-[#1F2937] text-lg'}>Video</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'-order-2 sm:order-0 md:btn flex justify-center items-center gap-2.5 col-span-2 row-span-1 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <Archive size={16} />
                Archive
            </div>
            <div className={'-order-1 sm:order-0 md:btn flex justify-center items-center gap-2.5 text-error col-span-2 row-span-1 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <Trash2 size={16} /> Delete
            </div>

            <div className={'col-span-2 sm:col-span-4 md:col-start-3 md:col-span-3 row-span-12 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <div className={'w-full'}>
                    <div className={'flex justify-between flex-col lg:flex-row sm:gap-3 items-center pb-5'}>
                        <h4 className={'font-medium text-xl text-[#244D3F]'}>Recent Interactions</h4>
                        <button className={'btn'}><History strokeWidth={2} size={16} />Full History</button>
                    </div>
                    <div>
                        {
                            friendCommunicationFilterData.length === 0 && <p>No History Found</p>
                        }
                        {
                            friendCommunicationFilterData.map((data, index) => (

                                <div key={index} >
                                    <div className={'flex items-center lg:p-4 gap-3'}>
                                    {
                                        data.type === 'call' ? <PhoneCall strokeWidth={2.5} size={28} /> : data.type === 'text' ? <MessageSquare strokeWidth={2.5} size={28}></MessageSquare> : <Video strokeWidth={2.5} size={28}></Video>
                                    }

                                    <div className={'flex-1 text-left'}>
                                        <p className={'text-lg capitalize'}>{data.type}
                                        <span> with {data.name}</span></p>
                                    </div>
                                    <div className={'flex flex-col text-right'}>
                                        <p className={'text-sm'}>{data.date}</p>
                                        <p className={'text-sm'}>{data.time}</p>
                                    </div>
                                    </div>
                                    {
                                        friendCommunicationFilterData.length !== index + 1 && <div className="divider before:bg-[#E9E9E9] after:bg-[#E9E9E9] "></div>
                                    }




                                </div>

                            ))


                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Details;