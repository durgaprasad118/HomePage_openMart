import React from 'react';

const Feats = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 md:col-span-2">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Maps search engine
                        </h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Maps search designed specifically for sales.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 md:col-span-1">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Connect with Your CRM
                        </h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Deduplicate leads from your CRM to ensure new
                            results.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 md:col-span-1">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            AI Leads finder
                        </h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Enter custom criteria such as annual revenue and
                            geographic location to find qualified leads.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10 md:col-span-2">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                            Custom Enrichments
                        </h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Add custom enrichments to get more in-depth
                            information on your leads.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feats;
