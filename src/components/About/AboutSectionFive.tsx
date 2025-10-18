"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ── Data ────────────────────────────────────────────────────────────── */
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
    linkedin:
      "https://www.linkedin.com/in/darine-ameyed-a9526124/?originalSubdomain=ca",
  },
];

/* ── Tall chevron identical to other sections ────────────────────────── */
function Chevron({ dir = "left" }: { dir?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 160"
      className="h-[230px] w-[16px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={dir === "left" ? "M14 10 L6 80 L14 150" : "M6 10 L14 80 L6 150"} />
    </svg>
  );
}

const NextArrow = ({ onClick }: any) => (
  <button
    type="button"
    aria-label="Next"
    onClick={onClick}
    className="advisors-chev advisors-chev--right"
  >
    <Chevron dir="right" />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    type="button"
    aria-label="Previous"
    onClick={onClick}
    className="advisors-chev advisors-chev--left"
  >
    <Chevron dir="left" />
  </button>
);

/* ── Slick settings ──────────────────────────────────────────────────── */
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // desktop: 4 per your original
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const AdvisorsSection = () => {
  return (
    <section className="relative z-10 bg-white py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
          Advisors
        </h2>

        <div className="advisors-slider relative overflow-visible">
          <Slider {...settings}>
            {advisors.map((member, index) => (
              <div key={index} className="px-3 text-center">
                {/* relative so chevrons align to the circle edge */}
                <div className="relative mx-auto mb-6 h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={224}
                    height={224}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-watersecblue">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.title}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-gray-400 transition hover:text-watersecblue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 2.77 2.23 5 5 5h14c2.77 0 5-2.23 5-5v-14c0-2.77-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z" />
                  </svg>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* arrow placement + list overflow like the other sections */}
      <style jsx global>{`
        .advisors-slider .slick-list { overflow: visible; }
        .advisors-slider .slick-slide > div { position: relative; }

        .advisors-chev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(148, 163, 184, 0.65); /* light slate */
          transition: color 0.2s ease;
          z-index: 10;
          pointer-events: auto;
          filter: drop-shadow(0 0 1px rgba(0,0,0,.08));
        }
        .advisors-chev:hover { color: rgba(148, 163, 184, 0.9); }
        .advisors-chev--left  { left: -18px; }
        .advisors-chev--right { right: -18px; }
      `}</style>
    </section>
  );
};

export default AdvisorsSection;
