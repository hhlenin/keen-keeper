import React from 'react';
import {PhoneCall} from "lucide-react";
import {Legend, Pie, PieChart, Tooltip} from 'recharts';
import { RechartsDevtools  } from '@recharts/devtools';

const Stats = () => {
    const data = [
        { name: 'Group C', value: 300, fill: '#7E35E1' },
        { name: 'Group B', value: 300, fill: '#244D3F' },
        { name: 'Group D', value: 200, fill: '#37A163' },
    ];
    return (
        <div className={'py-20'}>
            <h2 className={'font-bold text-5xl pb-6 text-[#1F2937]'}>Timeline</h2>
            <div className={'flex flex-col text-left gap-4 items-center p-8 rounded-lg bg-white shadow-lg'}>
                <h4 className={'w-full font-medium text-xl text-[#244D3F]'}>By Interaction Type</h4>
                <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                        active={true}
                    />
                    <RechartsDevtools />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;