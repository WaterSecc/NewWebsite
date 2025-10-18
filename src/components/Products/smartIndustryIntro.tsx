
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);
const SmartIndustryIntro = () => {



    return (
        <section id="about" className="mt-12 pt-16 md:pt-20 lg:pt-28">
            <div className="w-full px-4 lg:px-20 xl:px-32 2xl:px-40">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-7/8"> 
                            <SectionTitle
                                title="Smart Industry Dashboard Introduction"
                                paragraph=""
                                mb="44px"
                            />
                            <p className="text-lg">
                               The Smart Industry Dashboard is designed to empower manufacturers with real-time insights into their water usage. By monitoring consumption across production lines and detecting anomalies instantly, the platform helps reduce waste, optimize operational efficiency, and support sustainability goals. Whether you're managing a pharmaceutical facility or a food processing plant, our intelligent dashboard brings transparency, control, and performance to your fingertips.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );

};

export default SmartIndustryIntro;