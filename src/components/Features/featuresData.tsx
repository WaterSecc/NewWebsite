import { Feature } from "@/types/feature";
import {
  Clock4,
  BarChart2,
  Bell,
  FileText,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Clock4 size={60} className="w-10 h-10" />,
    title: "Monitoring",
    paragraph: "Realtime visualisation of the water usage of each source",
  },
  {
    id: 2,
    icon: <BarChart2 size={60} className="w-10 h-10" />,
    title: "Usage Prediction",
    paragraph: "Forecast user water consumption and billing status over a defined period of time",
  },
  {
    id: 3,
    icon: <Bell size={60} className="w-10 h-10" />,
    title: "Anomaly Detection",
    paragraph: "Notify the user if the current water usage is bypassing the defined threshold, thus detecting leaks",
  },
  {
    id: 4,
    icon: <FileText size={60} className="w-10 h-10" />,
    title: "Reporting",
    paragraph: "A daily, weekly or monthly reporting of your water consumption and billing is available",
  },
];

export default featuresData;
