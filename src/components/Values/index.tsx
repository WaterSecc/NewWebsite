import SectionTitle from "../Common/SectionTitle";
import SingleValue from "./singleValue";
import valuesData from "./valuesData";
import { useTranslations } from "next-intl";

const Values = () => { 
    const t = useTranslations("About"); 
    return (
        <>
            <section id="features" className="pt-6 pb-10 md:pt-8 md:pb-10 lg:pt-10 lg:pb-18">
                <div className="container">
                    <SectionTitle
                        title={t("values")}
                        paragraph=""
                        center
                    />

                   <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3 place-items-center">
                        {valuesData().map((value) => (
                            <SingleValue key={value.id} value={value} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Values;
