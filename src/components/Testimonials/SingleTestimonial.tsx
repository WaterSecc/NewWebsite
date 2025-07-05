import Image from "next/image";

const SingleUseCase = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="rounded-lg bg-white/90 p-4 shadow-sm transition hover:shadow-md dark:bg-white/5">
      <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl">

        <Image
          src={image}
          alt={title}
          height={50}
          width={500}

          className="object-cover"
        />
      </div>

      <h3 className="mb-2 text-xl font-extrabold text-black dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-base text-body-color dark:text-white">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-waterseclight text-sm font-medium hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default SingleUseCase;
