"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LanguageSwitcher = ({ currentLang, className = "" }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleLanguageChange = () => {
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', newLang);
        router.push(`${pathname}?${params.toString()}`);
    };

    // Determine which flag to show
    const showFrenchFlag = currentLang === 'en';
    const flagImage = showFrenchFlag ? '/images/flags/fr.png' : '/images/flags/en.png';
    const altText = showFrenchFlag ? 'Switch to French' : 'Switch to English';
    const targetLang = showFrenchFlag ? 'fr' : 'en';

    return (
        <button
  onClick={handleLanguageChange}
  className={`p-0 rounded-full transition-all hover:opacity-100 transition-transform duration-300 hover:scale-110 ${className}`}
  aria-label={`Switch to ${targetLang === 'fr' ? 'French' : 'English'}`}
>
           <Image
  src={flagImage}
  alt={altText}
  width={30}
  height={30}
  className="!w-10 !h-10 sm:!w-12 sm:!h-12 object-contain"
/>
        </button>
    );
};

export default LanguageSwitcher;