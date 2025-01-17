import Image from 'next/image';
import React from 'react';

const Backed = () => {
    return (
        <div className="flex  md:gap-x- gap-y-12  md:justify-center flex-col md:flex-row px-4   md:px-32 items-center py-3 w-full justify-center">
            <div className="flex flex-wrap md:flex-nowrap md:gap-x-12 justify-center gap-y-8 md:gap-y-0">
                <Image src="/back_1.png" alt="Back" height={40} width={200} />
                <Image src="/back_2.png" alt="Back" height={40} width={200} />
            </div>
            <div className="flex-wrap md:flex-nowrap flex md:gap-x-12 gap-x-10  gap-y-8 md:gap-y-0  w-[50%]  justify-between md:justify-center">
                <Image src="/feat_1.png" alt="Back" height={20} width={160} />
                <Image src="/feat_2.png" alt="Back" height={20} width={160} />
            </div>
        </div>
    );
};

export default Backed;
