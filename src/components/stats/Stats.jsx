import React, {useContext} from 'react';
import {Legend, Pie, PieChart, Tooltip} from 'recharts';
import { RechartsDevtools  } from '@recharts/devtools';
import {FriendsContext} from "../../context/FriendsContext.jsx";

const Stats = () => {

    const context = useContext(FriendsContext);
    const {communication} = context;

    const totalCall = communication.filter(data => data.type === 'call').length
    const totalVideo = communication.filter(data => data.type === 'video').length
    const totalText = communication.filter(data => data.type === 'text').length

    const data = [
        { name: 'Calls', value: totalCall, fill: '#7E35E1' },
        { name: 'Videos', value: totalVideo, fill: '#244D3F' },
        { name: 'Texts', value: totalText, fill: '#37A163' },
    ];
    return (
        <div className={'py-10 lg:py-20'}>
            <h2 className={'font-bold text-5xl pb-6 text-[#1F2937]'}>Timeline</h2>
            <div className={'flex flex-col text-left gap-4 items-center p-8 rounded-lg bg-white shadow-lg'}>
                <h4 className={'w-full font-medium text-xl text-[#244D3F]'}>By Interaction Type</h4>

                    {(totalCall === 0 && totalText === 0 && totalVideo === 0) ? <div className={'flex py-10 justify-center items-center'}><p>No Data Found</p></div> :


                <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="10%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={2}
                        dataKey="value"
                        isAnimationActive={true}
                        active={true}
                    />
                    <RechartsDevtools />
                    <Tooltip />
                    <Legend />
                </PieChart>
            }
            </div>
        </div>
    );
};

export default Stats;