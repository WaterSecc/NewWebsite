"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = ({ className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const newLocale = locale === "en" ? "fr" : "en";
  const altText = locale === "en" ? "Switch to French" : "Switch to English";

  const handleLanguageChange = () => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale; // replace current locale in URL
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className={`p-2 text-gray-500 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-transform duration-200 hover:scale-110 ${className}`}
      aria-label={altText}
      title={altText}
    >
      {/* Globe Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20" />
        <path d="M12 2a15 15 0 0 0 0 20" />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;
