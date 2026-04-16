import React, {useContext, useState} from 'react';
import {MessageSquare, PhoneCall, Video} from "lucide-react";
import {FriendsContext} from "../../context/FriendsContext.jsx";

const TimeLine = () => {

    const context = useContext(FriendsContext);
    const {communication} = context;
    const [tab, setTab] = useState(null);

    const filterData = communication.filter(item => {
        if (tab === 'all' || tab === null) {
            return true
        }
        return item.type === tab
    })

    return (
        <div className={'py-10 lg:py-20'}>
            <h2 className={'font-bold text-5xl pb-6 text-[#1F2937]'}>Timeline</h2>
            {/*<select onChange={(event) => handleFilter(event.target.value)} defaultValue="null" className="select mb-5">*/}
            <select onChange={(event) => setTab(event.target.value)} defaultValue="null" className="select mb-5">
                <option value={'null'} disabled={true}>Filter Timeline</option>
                <option value={'all'}>All</option>
                <option value={'text'}>Text</option>
                <option value={'call'}>Call</option>
                <option value={'video'}>Video</option>
            </select>
            <div>
                <div className={'space-y-6'}>
                    {filterData.length === 0 && <div className={'flex py-10 justify-center items-center'}><p>No Data Found</p></div>}
                    {
                        filterData.map((item, index) => (
                            <div key={index} className={'flex gap-4 items-center p-4 rounded-lg bg-white shadow-lg'}>
                                {
                                    item.type === 'call' ? <PhoneCall strokeWidth={2.5} size={36} /> : item.type === 'text' ? <MessageSquare strokeWidth={2.5} size={36}></MessageSquare> : <Video strokeWidth={2.5} size={36}></Video>
                                }
                                <div>
                                    <p className={'pb-1 text-[#64748B] text-lg'}><span className={'capitalize text-[#244D3F] text-xl font-bold'}>{item.type}</span> with {item.name}</p>
                                    <p className={'text-[#64748B] font-medium'}>{item.date} at {item.time}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TimeLine;