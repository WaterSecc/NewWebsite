import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);



const AboutSectionFour = () => { 
    const TeamMembers = [
        {
            name: "Mohamed GUENBRI",
            title: "Project Manager",
            linkedin: "https://www.linkedin.com/in/mohamed-guenbri-73601169/",
            email: "mguenbri@water-sec.com",
            image: "/images/about/mohamed.png", // Place the image inside /public/images/team/
        },
        {
            name: "Yasmine BEN MILOUD",
            title: "Product Manager",
            linkedin: "https://www.linkedin.com/in/yasmine-ben-miloud-04567683/",
            email: "ybenmiloud@water-sec.com",
            image: "/images/about/yassmine.png",
        },
        {
            name: "Slim BOUAKEZ",
            title: "Business Manager",
            linkedin: "https://www.linkedin.com/in/ahmed-slim-bouakez/",
            email: "sbouakez@water-sec.com",
            image: "/images/about/slim.png",
        },
        {
            name: "Zoubeir ZARROUK",
            title: "Technical Manager",
            linkedin: "https://www.linkedin.com/in/zoubeirzarrouk/",
            email: "zzarrouk@water-sec.com",
            image: "/images/about/zoubeir.png",
        },
        {
            name: "Khoubeib TLILI",
            title: "Software Manager",
            linkedin: "https://www.linkedin.com/in/khoubeib-tlili-56b2a579/",
            email: "ktlili@water-sec.com",
            image: "/images/about/khoubeib.png",
        },
    ];
    return (
        <section id="about" className="pt-8 md:pt-10 lg:pt-5">
            <div className="border-b border-body-color/[.15] pb-30 dark:border-white/[.15] md:pb-20 lg:pb-28">
                <div className="container">



                    {/* Our Team Section */}
                    <div className="mt-10 mb-30">
                        <h1 className="text-center text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] mb-8">
                            Our Founders
                        </h1>
                        <p className="text-center font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                            WaterSec is the fruit of 5 engineers who came together to look for solutions to face water scarcity in Tunisia and across the MENA region. 
                            As we cannot manage or optimize what we don't measure, monitoring consumption was the solution selected to initiate the project. 
                        </p>

                    </div>
                    {/* Team Members */}
                    <div className="mt-2 flex flex-wrap justify-center gap-10">

                        {TeamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="w-full max-w-[400px] rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg dark:bg-dark"
                            >
                                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-watersecblue shadow-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={112}
                                        height={112}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-dark dark:text-white">
                                    {member.name}
                                </h3>
                                <div className="mb-2 flex items-center justify-center text-sm font-medium text-body-color">
                                    <span>{member.title}</span>&nbsp;
                                    <a
                                        href={member.linkedin}
                                        aria-label="LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 inline-flex items-center"
                                    >
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 16"
                                            className="fill-current"
                                        >
                                            <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSectionFour;
