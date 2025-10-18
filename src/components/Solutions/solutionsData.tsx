import { Solution } from "@/types/solution";
import { Server, ShieldCheck, BarChart3, Cloud } from "lucide-react";

const solutionsData: Solution[] = [
  {
    id: 1,
    icon: <Server size={40} className="w-10 h-10" />,
    title: "Real-Time Data Aquisition",
    paragraph:
      "Water Usage data is treated in real-time using cutting-edge technology.",
  },
  {
    id: 2,
    icon: <Cloud size={40} className="w-10 h-10" />,
    title: "Cloud-Based Architecture",
    paragraph:
      "Watersec’s communication pipeline is handled on the cloud to ensure scalability and high availability",
  },
  {
    id: 3,
    icon: <ShieldCheck size={40} className="w-10 h-10" />,
    title: "Data Integrity and Confidentiality",
    paragraph:
      "Exchanged data is secured and encrypted.",
  },
  {
    id: 4,
    icon: <BarChart3 size={40} className="w-10 h-10" />,
    title: "Patternization based on Data-Mining",
    paragraph:
      "Enhanced predictive experience provided to our users in order to check his water-usage pattern and help them a better decision.",
  },
];
export default solutionsData;
