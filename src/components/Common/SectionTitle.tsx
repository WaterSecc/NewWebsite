const SectionTitle = ({
  title,
  paragraph,
  width = "900px",
  center = false,   // default false
  mb = "50px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : "text-left"}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="ml-8 mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="ml-8 text-base md:text-lg text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
