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
    image: "/images/testimonials/enda-ytCover.jpeg",
    title: "Enda Inter Arabe",
    description:
      "“ We now have access to a comprehensive dashboard that enables us to monitor real-time water consumption across all our sites. ” - Noureddine Khalfi, Logistics Manager",
    link: "https://www.youtube.com/watch?v=p9Y2CkJWS38",
  },
  {
    id: 2,
    image: "/images/testimonials/pluxee-ytCover.jpeg",
    title: "Pluxee Tunisia",
    description:
      "“ With WaterSec, we've recieved personalized recommendations and ongoing support to streamline our water consumption and ensure detailed monitoring. ” - Mohamed Jemaa, Marketing & Product Manager",
    link: "https://www.youtube.com/watch?v=Dn4Mv2QA-Zs",
  },
  {
    id: 3,
    image: "/images/testimonials/darDaida-ytCover.jpeg",
    title: "Dar Daida Guesthouse",
    description:
      "“ This partnership not only enhanced our operational efficiency but also enabled us to attract a new breed of environmentally-concious tourists. ” - Karim Zayeni, Sales Manager",
    link: "https://www.youtube.com/watch?v=QgXh1GjPL4U",
  },
];
