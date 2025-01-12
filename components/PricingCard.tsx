import { Check } from 'lucide-react';
import React from 'react';

interface PricingCardProps {
    title: string;
    tag: string;
    price: string;
    features: { text: string; isBold: boolean }[];
    perMonth: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    features,
    tag,
    perMonth
}) => {
    return (
        <div className="w-full hover:border-blue-500 hover:border-2 max-w-lg p-6 bg-white border border-gray-200 rounded-[40px] shadow sm:p-8 flex flex-col items-center">
            <h5 className="mb-3 text-3xl font-semibold text-black">{title}</h5>
            <p className="my-3 text-center text-lg md:text-xl font-normal text-gray-500">
                {tag}

            </p>
            <div className="flex items-baseline text-gray-900">
                <span className="text-2xl md:text-5xl font-extrabold tracking-tight">
                    {price}
                </span>
                {perMonth && (
                    <span className="ms-1 text-xl font-normal text-gray-500">
                        /month
                    </span>
                )}
            </div>
            <p className="my-3 text-xl font-normal text-gray-500">
                Billed Annually
            </p>
            <button
                type="button"
                className="text-white bg-blue-600 my-4 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
                Get Started
            </button>
            <ul role="list" className="space-y-5 my-5">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className={`flex items-center ${
                            feature.isBold ? '' : ''
                        }`}
                    >
                        <Check className="h-5 w-6 text-blue-600 font-bold" />
                        {feature.isBold ? (
                            <span className="text-base font-semibold leading-tight text-gray-900 ms-3">
                                {feature.text}
                            </span>
                        ) : (
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                                {feature.text}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;
