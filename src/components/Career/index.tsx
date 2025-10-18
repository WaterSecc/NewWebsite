import Image from "next/image";

const Career = () => {
    return (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    {/* LEFT COLUMN - IMAGE */}
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12 mb-10 lg:mb-0">
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                            <Image
                                src="/images/about/about1.png" // Replace with your image path
                                alt="Request a demo"
                                width={900}
                                height={900}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN - FORM */}
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div className="rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]">
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Start a new career with WaterSec!
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                WaterSec is looking for bold people who can build with heart, and will chase solutions with fearless optimism.
                            </p>
                            <form>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="Full Name"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none appearance-none autofill:bg-white autofill:text-black dark:autofill:bg-[#2C303B] dark:autofill:text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="Email"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-watersecblue dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-watersecblue dark:focus:shadow-none appearance-none autofill:bg-white autofill:text-black dark:autofill:bg-[#2C303B] dark:autofill:text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="documents"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Upload Documents
                                            </label>
                                            <div className="relative border-dashed border-2 border-gray-300 rounded-xs bg-[#f8f8f8] dark:bg-[#2C303B] p-6 text-center cursor-pointer hover:border-watersecblue transition">
                                                <input
                                                    type="file"
                                                    id="documents"
                                                    name="documents"
                                                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                                                    multiple
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mx-auto mb-2 h-10 w-10 text-watersecblue"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l8-8 8 8M12 4v12" />
                                                </svg>
                                                <p className="text-body-color text-sm">
                                                    Drag and drop files here, or click to upload <br />
                                                    <span className="text-xs text-gray-400">(Max 2 files, 5MB each)</span>
                                                </p>
                                            </div>
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

export default Career;
