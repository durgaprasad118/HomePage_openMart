'use client';
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
    return (
        <div className="my-10  rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
            <p className='text-gray-500 my-6 uppercase font-medium leading-snug text-center tracking-wide'>Trusted by more than 100+ SMB tech companies
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="normal"
            />
        </div>
    );
}

const testimonials = [
    {
        name: 'what not',
        url:'in_1.svg'
    },
    {
        name: 'William Shakespeare',
        url:'/in_2.png'
    },
    {
        name: 'Edgar Allan Poe',
        url:'/in_3.png'
    },
    {
        name: 'Jane Austen',
        url:'/in_4.svg'
    },
    {
        name: 'Herman Melville',
        url:'/in_5.png'
    }
];
