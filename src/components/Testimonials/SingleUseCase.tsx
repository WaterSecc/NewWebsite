import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const SingleUseCase = ({ image, title, description, link }: Props) => {
  return (
    <article
      className={`relative w-full h-full overflow-hidden rounded-[32px] shadow-md bg-white md:grid md:grid-cols-12 `}
    >
      {/* Left: blue text panel (≈40%) */}
      <div className="md:col-span-5 h-full bg-[#0A66FF] text-white px-8 sm:px-10 py-8 sm:py-10 flex flex-col justify-between rounded-[32px] md:rounded-r-none">
        <header>
          <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
            {title}
          </h3>
          <p className="text-white/95 text-lg leading-8">
            {description}
          </p>
        </header>

        <div className="pt-8">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-[#0A66FF] font-semibold shadow-sm hover:shadow transition"
          >
            Watch Video
          </Link>
        </div>
      </div>

      {/* Right: image panel (≈60%) */}
      <div className="md:col-span-7 relative h-[260px] md:h-auto rounded-[32px] md:rounded-l-none">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(min-width:1024px) 56vw, (min-width:768px) 60vw, 100vw"
        />
        {/* Curved seam highlight */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-black/12 to-transparent hidden md:block rounded-l-[32px]" />
      </div>
    </article>
  );
};

export default SingleUseCase;