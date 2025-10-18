import { Dashboard } from "@/types/dashboard";
import Image from "next/image";
import Link from "next/link";

const SingleDashboard = ({ dashboard }: { dashboard: Dashboard }) => {
    const { title, image, paragraph, tags, link } = dashboard;
    return (
        <>
            <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
                <Link
                    href={tags}
                    className="relative block aspect-37/22 w-full"
                >
                    <Image src={image} alt="image" fill />
                </Link>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                        <Link
                            href={tags}
                            className="hover:text-watersecblue dark:hover:text-watersecblue mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
                        >
                            {title}
                        </Link>
                    </h3>
                    <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
                        {paragraph}
                    </p>
                    <div className="flex items-center">

                        <Link
                            href={link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-watersecblue hover:underline text-sm font-medium"
                        >
                            Visit
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleDashboard;
