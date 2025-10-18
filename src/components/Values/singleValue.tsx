import { Value } from "@/types/value";

const SingleValue = ({ value }: { value: Value }) => {
  const { icon, title, paragraph } = value;

  return (
    <div className="group inline-block align-top">
      {/* Card */}
      <div
        className="
          relative
          w-[min(300px,80vw)] h-[310px]
          rounded-[20px] border border-watersecblue bg-white
          p-5 text-watersecblue
          transition-colors duration-300 ease-in-out
          group-hover:bg-watersecblue group-hover:text-white
        "
      >
        {/* Icon + Title */}
        <div className="flex items-start gap-2">
          <div className="text-watersecblue transition-colors group-hover:text-white">
            {icon}
          </div>
          <h3 className="text-[18px] font-extrabold leading-snug transition-colors group-hover:text-white">
            {title}
          </h3>
        </div>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-watersecblue/60 transition-colors group-hover:bg-white/70" />

        {/* Text */}
        <p className="text-[14px] leading-6 text-watersecblue transition-colors group-hover:text-white">
          {paragraph}
        </p>

        {/* Decorative progress line */}
        <div className="absolute bottom-5 left-1/2  w-[40%]">
          <div className="relative h-[3px] rounded bg-current/30">
            <span className="absolute right-0 top-1/2 h-2.5 w-1.5 -translate-y-1/2 rounded-full bg-current" />
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        className="
          mt-3 block w-[min(240px,78vw)] mx-auto
          rounded-full border border-watersecblue bg-white
          py-2.5 text-[16px] font-semibold text-watersecblue
          transition-colors duration-300
          group-hover:bg-watersecblue group-hover:text-white group-hover:border-watersecblue
          hover:bg-watersecblue hover:text-white hover:border-watersecblue
        "
      >
        Read more
      </button>
    </div>
  );
};

export default SingleValue;
