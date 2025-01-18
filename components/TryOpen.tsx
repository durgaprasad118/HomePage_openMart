import React from 'react';

const TryOpen = () => {
    return (
        <div className="bg-[#F2F9FF] md:my-20  rounded-[28px] md:p-20 p-4 flex  flex-col justify-center md:gap-y-4 gap-y-2 items-center">
            <div className="flex flex-col items-center justify-center md:w-[70%]">
                <h1 className="mb-3 text-3xl text-center md:text-5xl font-bold text-black">
                    Try Openmart for free
                </h1>
                <p className="my-5  text-center text-lg md:text-xl tracking-wide leading-relaxed  font-normal text-gray-500">
                    Join hundreds of the world’s leading growth, sales, and
                    marketing teams—like Clipboard Health, Alibaba, Whatnot, and
                    Snackpass—to sell to the lower mid-market more efficiently.
                </p>
            </div>
            <form className="flex md:flex-row flex-col gap-y-2 gap-x-3 items-center w-full max-w-lg md:my-3 ">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="branch-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="Enter Email"
                        required
                    />
                </div>
                <button
                    type="button"
                    className="text-white bg-blue-600 my-4 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full md:w-40 text-center"
                >
                    Try for free
                </button>
            </form>
        </div>
    );
};

export default TryOpen;
