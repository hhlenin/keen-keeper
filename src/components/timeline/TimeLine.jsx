import React from 'react';
import { PhoneCall} from "lucide-react";

const TimeLine = () => {
    return (
        <div className={'py-20'}>
            <h2 className={'font-bold text-5xl pb-6 text-[#1F2937]'}>Timeline</h2>
            <details className="dropdown">
                <summary className="btn m-1 text-[#64748B]">Filter Timeline</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <div>
                <div className={'space-y-6'}>
                    <div className={'flex gap-4 items-center p-4 rounded-lg bg-white shadow-lg'}>
                        <PhoneCall strokeWidth={2.5} size={36} />
                        <div>
                            <p className={'pb-1 text-[#64748B] text-lg'}><span className={'text-[#244D3F] text-xl font-bold'}>Meetup</span> with Tom Baker</p>
                            <p className={'text-[#64748B] font-medium'}>March 29, 2026</p>
                        </div>
                    </div>
                    <div className={'flex gap-4 items-center p-4 rounded-lg bg-white shadow-lg'}>
                        <PhoneCall strokeWidth={2.5} size={36} />
                        <div>
                            <p className={'pb-1 text-[#64748B] text-lg'}><span className={'text-[#244D3F] text-xl font-bold'}>Meetup</span> with Tom Baker</p>
                            <p className={'text-[#64748B] font-medium'}>March 29, 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;