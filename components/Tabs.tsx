'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const TabComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Clipboard Health');

    const tabs = [
        {
            id: 'Clipboard Health',
            label: '/clip.png',
            text: "Openmart has revolutionized our outreach strategy! We previously spent spent hundred of man hours identifying decision makers which has been reduced by over 50% with Openmart's decision maker contacts.",
            by: 'Calvin Bulzoni',
            role: 'Sales Operations at Clipboard Health'
        },
        {
            id: 'Boostly',
            label: '/boost.png',
            text: 'Openmart has quickly become the backbone of our outreach strategy! Having access to direct decision maker contacts and social media pages has allowed us to significantly accelerate our sales process.',
            by: 'Evan Cucuk',
            role: 'VP of Sales at Boostly'
        },
        {
            id: 'whatNot',
            label: '/whatnot.png',
            text: 'After we got set up with Openmart our sales team has been able to focus on converting strictly high value leads! It has been truly instrumental to our lead qualification process.OUr sales',
            by: 'Marten B',
            role: 'Operations Manager at Whatnot'
        },
        {
            id: '42',
            label: '/clip.png',
            text: 'Access to accurate and up-to-date contact information for small business owners has significantly enhanced our campaign performance and delivered outstanding results for our clients from our space.',
            by: 'Kamil Rextin',
            role: 'Director of Marketing'
        }
    ];

    return (
        <div className='w-[100%] flex justify-center'>
            <div className="bg-[#F2F9FF] w-[80%] rounded-[28px] md:p-18 p-4 flex flex-col justify-center md:gap-y-4 gap-y-2 items-center ">
                <div>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            id={tab.id}
                            className={`p-4 rounded-lg ${
                                activeTab === tab.id ? 'block' : 'hidden'
                            }`}
                            role="tabpanel"
                            aria-labelledby={`${tab.id}-tab`}
                        >
                            <svg
                                className="w-8 h-8 text-[#166DF6]  mb-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p className="text-xl md:text-3xl leading-loose text-[#1C2A39]">
                                {tab.text}
                            </p>
                            <p className="font-semibold text-lg md:text-xl my-4">
                                - {tab.by}.{' '}
                                <span className="text-gray-400">
                                    {tab.role}
                                </span>
                            </p>{' '}
                        </div>
                    ))}
                </div>

                <div className="mb-4 border-t-2 border-[#BAE0FF] w-full">
                    <ul
                        className="flex flex-wrap justify-evenly md:flex-nowrap md:justify-evenly md:items-center -mb-px text-sm font-medium text-center md:h-32 w-full"
                        role="tablist"
                    >
                        {tabs.map((tab) => (
                            <li
                                className="flex items-baseline justify-center w-32 h-32 cursor-pointer "
                                role="presentation"
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div
                                    className={`p-2  w-40 border-t-8 translate-y-[-5px] transition-all duration-200 ${
                                        activeTab === tab.id
                                            ? 'border-[#166DF6]'
                                            : 'border-transparent hover:border-gray-300'
                                    }`}
                                >
                                    <Image
                                        height={120}
                                        width={180}
                                        alt={tab.id}
                                        src={tab.label}
                                        className="object-contain mb-2  p-2  my-4 "
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TabComponent;
