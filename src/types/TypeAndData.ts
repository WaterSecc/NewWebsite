type UseCase = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

export const useCases: UseCase[] = [
  {
    id: 1,
    image: "/images/testimonials/smartBuilding.png",
    title: "Revolutionizing Smart Buildings",
    description:
      "In the battle against the unseen threats of water leaks, WaterSec’s precision becomes the beacon guiding smart buildings toward a more water-secure future.",
    link: "https://watersec.medium.com/revolutionizing-smart-building-water-management-through-precise-leak-detection-283a766bc540",
  },
  {
    id: 2,
    image: "/images/testimonials/csr.png",
    title: "Reinforcing CSR strategies",
    description:
      "Integrating solutions like WaterSec is not just strategic but a shared responsibility for a sustainable future. These technology-driven initiatives becoming integral in shaping corporate sustainability.",
    link: "https://watersec.medium.com/leading-the-way-in-csr-with-sustainable-water-management-solutions-b84d94110811",
  },
  {
    id: 3,
    image: "/images/testimonials/hospitality.png",
    title: "Transforming Hospitality",
    description:
      "Sustainability has become a cornerstone of the hospitality sector, and innovative solutions like WaterSec are leading the charge.",
    link: "https://watersec.medium.com/transforming-hospitality-with-sustainable-tech-innovation-38bcb72d8a87",
  },
];
