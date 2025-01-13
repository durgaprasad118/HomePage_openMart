import Accordion from '@/components/Accordion';
import Backed from '@/components/Backed';
import { Footer } from '@/components/Footer';
import { InfiniteMovingCardsDemo } from '@/components/InfiniteScroll';
import Navbar from '@/components/Nabar';
import PricingCard from '@/components/PricingCard';
import TabComponent from '@/components/Tabs';
import TryOpen from '@/components/TryOpen';
import TabSection from '@/components/Usecases';

export default function Home() {
    return (
        <div className="">
            <Navbar />
            <div>
                <h1 className="mb-4 md:mb-8 text-4xl text-center md:text-5xl font-semibold text-black">
                    Use cases
                </h1>
                <TabSection />
            </div>
            <Accordion />
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    Backgrounds
                </p>
            </div>
            <div className="md:px-32 px-4">
                <div className="flex flex-col items-center justify-center">
                    <div className="my-6 flex flex-col items-center justify-center md:w-[60%] px-4">
                        <h1 className="mb-3 text-3xl text-center md:text-5xl font-semibold text-black">
                            Here&apos;s what our users are saying
                        </h1>
                        <p className="my-2 md:my-3 text-center text-md md:text-xl  font-normal text-gray-500">
                            Join hundreds of the world&apos;s leading growth,
                            sales, and marketing teams—like Clipboard Health,
                            Alibaba, Whatnot, and Snackpass—to sell to the lower
                            mid-market more efficiently.
                        </p>
                    </div>
                </div>
                <TabComponent />
            </div>
            <Backed />
            <InfiniteMovingCardsDemo />
            <Footer />
            <div className=" w-[80%] mx-auto">
                <TryOpen />
            </div>
            <div>
                <div className="flex flex-col items-center  justify-center">
                    <div className="my-6 flex flex-col items-center justify-center md:w-[50%] px-4">
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
                            {
                                text: 'Signal-based selling tools',
                                isBold: true
                            },
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
        </div>
    );
}
