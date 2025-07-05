import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/hero/sensor.jpeg')", // make sure this image exists
        }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1200px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  Smart Water Management Solutions
                </h1>
                <p className="mb-12 text-base leading-relaxed text-white sm:text-lg md:text-xl">
                  It is time to take control of your water consumption!
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/demo"
                    className="inline-block rounded-xs bg-white px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-gray-100"
                  >
                    Request a DEMO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
