import Image from "next/image";
import NewsLetterBox from "./NewsLetterBox";

const Demo = () => {
    return (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    {/* LEFT COLUMN - IMAGE */}
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12 mb-10 lg:mb-0">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/images/demo/demo.png" // Replace with your image path
                                alt="Request a demo"
                                width={700}
                                height={700}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN - FORM */}
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div className="rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]">
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Fill out this form to request a demo
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Discover how WaterSec can help you improve your water-use efficiency, contribute to water conservation, and optimize your bill.
                            </p>
                            <form>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="First Name"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your first name"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="Last Name"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your last name"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="phoneNumber"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="phoneNumber"
                                                placeholder="Enter your phone number"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="company-name"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your company's name "
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="company-industry"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Company Indsutry
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your company's industry"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="job-position"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Job Position
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your job position "
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="company-size"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Company Size
                                            </label>
                                            <select
                                                id="company-size"
                                                name="company-size"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            >
                                                <option value="">Select size</option>
                                                <option value="1">1</option>
                                                <option value="2-10">2-10</option>
                                                <option value="11-30">11-30</option>
                                                <option value=">30">&gt;30</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="message"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Enter your Message"
                                                className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <button className="rounded-xs bg-watersecblue px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-watersecblue/90 dark:shadow-submit-dark">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
