import Accordion from '@/components/Accordion';
import { Footer } from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import TryOpen from '@/components/TryOpen';

export default function Home() {
    return (
        <div className="">
            <Accordion />
            <Footer />
            <div className=' w-[80%] mx-auto'>
            <TryOpen />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="my-6 flex flex-col items-center justify-center md:w-[40%] px-4">
                    <h1 className="mb-3 text-3xl text-center md:text-5xl font-semibold text-black">
                        Plans for teams of all Sizes
                    </h1>
                    <p className="my-2 md:my-3 text-center text-md md:text-xl  font-normal text-gray-500">
                        No matter where you are in your growth or the world,
                        Openmart is designed to save you time and money
                    </p>
                </div>
            </div>
            <div className="px-4 md:px-0 gap-y-5 flex md:flex-row md:justify-center md:gap-x-4 flex-col ">
                <PricingCard
                    title="Scale Plan"
                    price={'$ 999'}
                    perMonth={true}
                    features={[
                        {
                            text: '30,000 credits per month (for verified email, enrichments, export)',
                            isBold: false
                        },
                        {
                            text: '5 AI filters for high-quality leads',
                            isBold: false
                        },
                        {
                            text: '1M+ business information globally, including decision maker contacts',
                            isBold: false
                        },
                        { text: 'Signal-based selling tools', isBold: true },
                        { text: 'Newly opened businesses', isBold: true },
                        { text: '3 platform Users', isBold: true },
                        { text: 'CRM Integration', isBold: true }
                    ]}
                    tag="For those looking for intent signals and access "
                />

                <PricingCard
                    title="Custom"
                    price={'Contact Us'}
                    perMonth={false}
                    features={[
                        {
                            text: 'Everything is Scale Plan',
                            isBold: true
                        },
                        {
                            text: 'Pre-open businesses (select geographies)',
                            isBold: true
                        },
                        {
                            text: 'Ad spend Signals',
                            isBold: true
                        },
                        { text: 'Hiring Signals', isBold: true },
                        { text: 'Spot trending businesses', isBold: true },
                        { text: 'Spot Trending Businesses', isBold: true }
                    ]}
                    tag="Custom signals based on your needs"
                />
            </div>
        </div>
    );
}
