import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=" bg-gray-50  text-gray-800 w-full ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex flex-col items-center gap-y-4 md:justify-between">
                        <a href="#" className="flex items-center">
                            <Image
                                loading="lazy"
                                src="logo.svg"
                                alt="Openmart Logo"
                                height="100"
                                width="180"
                            />
                        </a>
                        <div className="flex flex-col gap-y-2">
                            <Image
                                loading="lazy"
                                src="footer1.svg"
                                alt="InkWell Logo"
                                height="100"
                                width="180"
                            />
                            <Image
                                loading="lazy"
                                src="/footer2.png"
                                alt="InkWell Logo"
                                height="100"
                                width="180"
                            />
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 grid grid-cols-1 md:place-items-start place-items-center  gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase">
                                Products
                            </h2>
                            <ul className="text-gray-700 flex flex-col gap-y-3 font-sm md:items-start items-center">
                                <li>Owner finder</li>
                                <li>Monitoring</li>
                                <li>Prospecting</li>
                                <li>Enrichments</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase">
                                Resources
                            </h2>
                            <ul className="text-gray-700 flex flex-col gap-y-3 font-sm items-center md:items-start">
                                <li>About</li>
                                <li>News</li>
                                <li>Wall of love</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase ">
                                Resources
                            </h2>
                            <ul className="text-gray-700 flex flex-col gap-y-3 font-sm md:items-start items-center">
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase ">
                                Information
                            </h2>
                            <ul className="text-gray-700 flex flex-col gap-y-3 font-sm md:items-start items-center">
                                <li>FAQs</li>
                                <li className="text-black font-semibold">
                                    sales@openmart.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between mt-8 ">
                    <span className="text-md text-gray-800 sm:text-center italic ">
                        OpenMart © {new Date().getFullYear()} . All Rights
                        Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0  items-center">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900 dark:hover:text-white italic"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900 dark:hover:text-white italic"
                        >
                            Terms & Conditions
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900 "
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900 "
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
