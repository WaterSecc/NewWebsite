import { Value } from "@/types/value";
import { BadgeCheck, Scale, Eye, ShieldCheck, BarChart3, Cloud  } from "lucide-react";

const valuesData: Value[] = [
  {
    id: 1,
    icon: <BadgeCheck size={40} className="text-blue-600" />,
    title: "Quality",
    paragraph:
      "We hold our product and services to the highest standards of quality, and strive to take good care of all our stakeholders.",
  },
  {
    id: 2,
    icon: <Scale size={40} className="text-blue-600" />,
    title: "Integrity",
    paragraph:
      "We do the right thing, even in the face of adversity. We are committed to preserving integrity at all organizational levels.",
  },
  {
    id: 3,
    icon: <Eye size={40} className="text-blue-600" />,
    title: "Transparency",
    paragraph:
      "We are open about how we do what we do. We aim to maintain relationships of transparency not only within our team but also with our clients and other stakeholders.",
  },
];
export default valuesData;
