'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, MoveUpRight, Share2, Star } from 'lucide-react';

const TabSection = () => {
    const [selectedTab, setSelectedTab] = useState('a');

    const tabs = [
        {
            id: 'a',
            label: 'Leads scraping from all sites',
            image: 'use_1.svg',
            svg: <Share2 className="md:h-14 md:w-12" />
        },
        {
            id: 'b',
            label: 'Leads qualification',
            image: 'use_2.svg',
            svg: <Star className="md:h-14 md:w-12" />
        },
        {
            id: 'c',
            label: 'Local business data',
            image: 'use_3.svg',
            svg: <BookOpen className="md:h-14 md:w-12" />
        },
        {
            id: 'd',
            label: 'Leads enrichment',
            image: 'use_4.svg',
            svg: <MoveUpRight className="md:h-14 md:w-12" />
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0  lg:w-1/3">
                    <Image
                        src={
                            tabs.find((tab) => tab.id === selectedTab)?.image ||
                            ''
                        }
                        alt={`Image for ${selectedTab}`}
                        className="rounded-lg shadow-md bg-cover"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full place-items-center lg:w-2/3">
                    {tabs.map((tab) => (
                        <div key={tab.id} className="w-full">
                            <div
                                onClick={() => setSelectedTab(tab.id)}
                                className={`flex cursor-pointer flex-row md:flex-col h-24 gap-x-4 md:gap-x-0 justify-center items-center p-4 md:h-48 md:w-68 text-center border text-xl font-semibold rounded-xl shadow-sm ${
                                    selectedTab === tab.id
                                        ? 'text-blue-500'
                                        : 'bg-white text-gray-600'
                                }`}
                            >
                                <div className=" md:text-3xl text-2xl ">
                                    {tab.svg}
                                </div>
                                <span>{tab.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabSection;
