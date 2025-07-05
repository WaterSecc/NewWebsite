import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
  bgImage,
}: {
  pageName: string;
  description: string;
  bgImage?: string;
}) => {
  const textClass = bgImage ? "text-white" : "text-black dark:text-white";
  const descriptionClass = bgImage ? "text-white" : "text-body-color dark:text-white";
  const breadcrumbLinkClass = bgImage ? "text-white" : "text-body-color dark:text-white";
  const breadcrumbArrowClass = bgImage ? "border-white" : "border-body-color dark:border-white";

  return (
    <section
      className={`relative z-10 overflow-hidden ${bgImage
        ? "min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
        : "pt-28 lg:pt-[150px]"
        }`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {/* Overlay for readability */}
      {bgImage && <div className="absolute inset-0 bg-black/40 z-0" />}

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className={`mb-5 text-2xl font-bold sm:text-3xl ${textClass}`}>
                {pageName}
              </h1>
              <p className={`text-base font-medium leading-relaxed ${descriptionClass}`}>
                {description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className={`pr-1 text-base font-medium hover:text-watersecblue ${breadcrumbLinkClass}`}
                  >
                    Home
                  </Link>
                  <span
                    className={`mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 ${breadcrumbArrowClass}`}
                  ></span>
                </li>
                <li className={`text-base font-medium ${textClass}`}>{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Optional SVG background if no bgImage */}
      {!bgImage && (
        <div>
          <span className="absolute top-10 left-8 z-0 opacity-30">
            <svg
              width="48"
              height="72"
              viewBox="0 0 48 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0C24 0 48 28.8 48 48C48 63.6 37.2 72 24 72C10.8 72 0 63.6 0 48C0 28.8 24 0 24 0Z"
                fill="#4A90E2"
                fillOpacity="0.2"
              />
            </svg>
          </span>

          {/* Water drop bottom right */}
          <span className="absolute bottom-8 right-10 z-0 opacity-30">
            <svg
              width="56"
              height="84"
              viewBox="0 0 48 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0C24 0 48 28.8 48 48C48 63.6 37.2 72 24 72C10.8 72 0 63.6 0 48C0 28.8 24 0 24 0Z"
                fill="#4A90E2"
                fillOpacity="0.15"
              />
            </svg>
          </span>
        </div>
      )}
    </section>
  );
};

export default Breadcrumb;
