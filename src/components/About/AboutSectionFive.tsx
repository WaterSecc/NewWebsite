import Image from "next/image";
import Link from "next/link";

const advisors = [
    {
        name: "Slim Ben Ammar",
        title: "Mentor",
        image: "/images/advisors/SlimBenAmmar.jpeg",
        linkedin: "https://www.linkedin.com/in/slim-ben-ammar-ceo/",
    },
    {
        name: "Rim Baouendi",
        title: "Advisor",
        image: "/images/advisors/RimBawendi.jpeg",
        linkedin: "https://www.linkedin.com/in/rymbaouendi/",
    },
    {
        name: "Neila Ben Zina",
        title: "Advisor",
        image: "/images/advisors/NeilaBenZina.jpeg",
        linkedin: "https://www.linkedin.com/in/neila-benzina/",
    },
    {
        name: "Darine Amayed",
        title: "Advisor",
        image: "/images/advisors/DarineAmayed.jpeg",
        linkedin: "https://www.linkedin.com/in/darine-ameyed-a9526124/?originalSubdomain=ca",
    },
];

const AdvisorsSection = () => {
    return (
        <section className="py-7 md:py-5 lg:py-8">
            <div className="border-b border-body-color/[.15] pb-30 dark:border-white/[.15] md:pb-20 lg:pb-28">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap items-center">

                        <div className="w-full px-4 lg:w-1/2">
                            <div className="max-w-[470px]">
                                <div className="mb-9">
                                    <h1 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] mb-8">
                                        Our Advisors
                                    </h1>
                                </div>

                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                                {advisors.map((advisor, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col items-center ${index % 2 !== 0 ? "mt-6" : ""
                                            }`}
                                    >
                                        <div className="mb-4 h-68 w-56 overflow-hidden rounded-lg border border-watersecblue shadow-lg">
                                            <Image
                                                src={advisor.image}
                                                alt={advisor.name}
                                                width={174}
                                                height={130}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <h4 className="text-lg font-semibold text-black dark:text-white">{advisor.name}</h4>
                                        <p className="text-sm text-gray-400 mb-2">{advisor.title}</p>
                                        <Link
                                            href={advisor.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-watersecblue hover:underline text-sm"
                                        >
                                            
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 16"
                                            className="fill-current"
                                        >
                                            <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                                        </svg>
                                   
                                        </Link>

                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvisorsSection;
