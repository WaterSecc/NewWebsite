import SectionTitle from "../Common/SectionTitle";
import SingleValue from "./singleValue";
import valuesData from "./valuesData";

const Values = () => {
    return (
        <>
            <section id="features" className="pt-6 pb-10 md:pt-8 md:pb-10 lg:pt-10 lg:pb-18">
                <div className="container">
                    <SectionTitle
                        title="Our Values"
                        paragraph=""
                        center
                    />

                    <div className="grid grid-cols-1 gap-x-10 gap-y-28 md:grid-cols-3 lg:grid-cols-3 rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                        {valuesData.map((value) => (
                            <SingleValue key={value.id} value={value} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Values;
