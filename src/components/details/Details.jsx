import React from 'react';
import randImg from "../../assets/download.jpeg";
import {BellDot, Archive, Trash2, PhoneCall, MessageSquare, Video, History} from 'lucide-react'

const Details = () => {
    return (
        <div className={'py-20 h-full w-full grid grid-cols-5 gap-y-3 gap-x-5'}>
            <div className={'col-span-2 row-span-4 py-8 text-center bg-white rounded-lg shadow-lg flex flex-col items-center gap-2'}>

                <div className={'h-25 w-25 rounded-full overflow-hidden'}>
                    <img src={randImg} alt=""/>
                </div>
                <h3 className={' text-[#1F2937] font-semibold text-xl'}>David Kim</h3>
                <p className={'text-sm text-[#64748B]'}>62d ago</p>
                <p className={'badge badge-soft badge-success'}>work</p>
                <p className={'badge badge-warning'}>Almost Due</p>
                <p className={'font-medium text-[#64748B] italic'}>"Former colleague, great mentor"</p>
                <p className={'text-sm text-[#64748B]'}>Preferred: email</p>

            </div>

            <div className={'col-span-1 row-span-2 text-center bg-white rounded-lg shadow-lg flex flex-col justify-center'}>
                    <h3 className={'font-semibold text-3xl text-[#244D3F]'}>62</h3>
                    <p className={'text-[#64748B]'}>Days Since Contact</p>
            </div>
            <div className={'col-span-1 row-span-2 text-center bg-white rounded-lg shadow-lg flex flex-col justify-center'}>
                <h3 className={'font-semibold text-3xl text-[#244D3F]'}>30</h3>
                <p className={'text-[#64748B]'}>Goal (Days)</p>
            </div>
            <div className={'col-span-1 row-span-2 text-center bg-white rounded-lg shadow-lg flex flex-col justify-center'}>
                <h3 className={'font-semibold text-3xl text-[#244D3F]'}>Feb 27, '26</h3>
                <p className={'text-[#64748B]'}>Next Due</p>
            </div>

            <div className={'col-span-3 row-span-2 px-6 bg-white rounded-lg shadow-lg flex justify-center items-center gap-2'}>
               <div className={'w-full'}>
                   <div className={'flex justify-between items-center'}>
                       <h4 className={'font-medium text-xl text-[#244D3F]'}>Relationship Goal</h4>
                       <button className={'btn'}>Edit</button>
                   </div>
                   <p className={'text-lg text-[#64748B]'}>Connect every <span className={'text-[#1F2937] font-bold'}>30 days</span></p>
               </div>
            </div>

            <div className={'btn col-span-2 row-span-1 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <BellDot size={16} strokeWidth={2} /> Snooze 2 weeks
            </div>

            <div className={'col-span-3 row-span-3 p-6 text-left bg-white rounded-lg shadow flex justify-center items-center'}>
                <div className={'w-full'}>
                    <h3 className={'pb-4 text-xl font-medium text-[#244D3F]'}>Quick Check-In</h3>
                    <div className={'grid grid-cols-3 gap-4'}>
                        <div className={'bg-[#F8FAFC] rounded-lg shadow-lg p-4 grid place-items-center space-y-2'}>
                            <PhoneCall strokeWidth={2.5} size={28} />
                            <p className={'text-[#1F2937] text-lg'}>Call</p>
                        </div>
                        <div className={'bg-[#F8FAFC] rounded-lg shadow-lg p-4 grid place-items-center space-y-2'}>
                            <MessageSquare strokeWidth={2.5} size={28} />
                            <p className={'text-[#1F2937] text-lg'}>Text</p>
                        </div>
                        <div className={'bg-[#F8FAFC] rounded-lg shadow-lg p-4 grid place-items-center space-y-2'}>
                            <Video strokeWidth={2.5} size={28} />
                            <p className={'text-[#1F2937] text-lg'}>Video</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'btn col-span-2 row-span-1 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <Archive size={16} />
                Archive
            </div>
            <div className={'btn text-error col-span-2 row-span-1 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <Trash2 size={16} /> Delete
            </div>

            <div className={'col-start-3 col-span-3 row-span-10 p-8 text-center bg-white rounded-lg shadow-lg'}>
                <div className={'w-full'}>
                    <div className={'flex justify-between items-center pb-5'}>
                        <h4 className={'font-medium text-xl text-[#244D3F]'}>Recent Interactions</h4>
                        <button className={'btn'}><History strokeWidth={2} size={16} />Full History</button>
                    </div>
                    <div>
                        <div className={'flex items-center p-4 gap-3'}>
                            <PhoneCall strokeWidth={2.5} size={28} />
                            <div className={'flex-1 text-left'}>
                                <p className={'text-lg'}>Text</p>
                                <p>Asked for career advice</p>
                            </div>
                            <p className={'text-sm'}>Jan 28, 2026</p>
                        </div>
                        <div className="divider before:bg-[#E9E9E9] after:bg-[#E9E9E9] "></div>
                        <div className={'flex items-center p-4 gap-3'}>
                            <PhoneCall strokeWidth={2.5} size={28} />
                            <div className={'flex-1 text-left'}>
                                <p className={'text-lg'}>Text</p>
                                <p>Asked for career advice</p>
                            </div>
                            <p className={'text-sm'}>Jan 28, 2026</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Details;