import Image from "next/image";

const TechSectionTwo = () => {
  const videoId = "04eAoA461sk";

  return (
    <section className="overflow-hidden pt-4 pb-4">
      <div className="container mx-auto px-4">
        {/*<h1 className="mb-8 text-2xl text-center font-bold text-black sm:text-4xl dark:text-white">
          The Dashboard
        </h1>*/}

        {/* ✅ Centered smaller video thumbnail */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[800px] aspect-video overflow-hidden rounded-md">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Dashboard Video"
              fill
              className="object-cover"
            />
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center hover:bg-black/40 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          </div>

        </div>


      </div>
    </section>
  );
};

export default TechSectionTwo;
