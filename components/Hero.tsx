import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 my-20 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-loose leading-relaxed  text-gray-900 md:text-5xl lg:text-[80px] dark:text-white md:w-[50%] mx-auto">
                    Find newly <br />
                    <p className="my-4">Opened local </p>
                    <p className="">businesses</p>
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    Join 100+ leading SMB tech companies to do sales more
                    efficiently :)
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Button text="Book a demo" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
