import { Panel } from './Panel';
const data = [
    {
        title: 'How do I sign up and get access to Openmart?',
        description: 'Get Started.',
        id: 3
    },
    {
        title: 'Do you provide free trails?',
        description: 'Yes.',
        id: 0
    },
    {
        title: "Is a credit card requried to sign up for Openmart's free trail?",
        description:
            "Yes, a credit or debit card is required to sign up for Openmart's free trial. This allows us to verify your account's authenticity and prevent fraud.",
        id: 1
    },
    {
        title: "What's a verified email?",
        description:
            'After enriching decision maker emails they will either be labeled as verified or unknown. Verified emails are emails that have been checked by our system and that it can be delivered. Unknown emails are ones that are not able to be fully verified but are able to be delivered to around 80% of the time.',
        id: 2
    },

    {
        title: 'How can I find more information on my leads? e.g. find dental clinics that are closed on Saturdays',
        description: 'There are two ways: use Ai leads and add enrichment.',
        id: 4
    },
    {
        title: 'How do we verify emails and phone numbers for leads?',
        description:
            'Email and phone numbers are verified by cross-referencing a number of different data vendors.',
        id: 5
    },

    {
        title: 'Why are there fewer results in my list even though I exported a lot of them?',
        description:
            'When you export from the AI Leads Finder, the total number of leads is sometimes just an estimate rather than an exact count.',
        id: 6
    }
];

const Accordion = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
            <div className="flex justify-center flex-col items-center gap-y-2">
                <h1 className="md:text-3xl text-gray-900  font-bold">FAQs</h1>
                {data.map((x) => {
                    return (
                        <Panel
                            key={x.id}
                            title={x.title}
                            id={x.id}
                            description={x.description}
                        ></Panel>
                    );
                })}
            </div>
        </div>
    );
};
export default Accordion;
