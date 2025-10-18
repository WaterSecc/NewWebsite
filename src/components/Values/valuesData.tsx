import { Value } from "@/types/value";
import { BadgeCheck, Scale, Eye } from "lucide-react";
import { useTranslations } from "next-intl";

export default function useValuesData(): Value[] {
  const t = useTranslations("About");

  return [
    {
      id: 1,
      icon: <BadgeCheck size={40} className="w-10 h-10" />,
      title: t("Quality"),
      paragraph: t("Qualitypara"),
    },
    {
      id: 2,
      icon: <Scale size={40} className="w-10 h-10" />,
      title: t("Integrity"),
      paragraph: t("Integritypara"),
    },
    {
      id: 3,
      icon: <Eye size={40} className="w-10 h-10" />,
      title: t("Transparency"),
      paragraph: t("Transparencypara"),
    },
  ];
}
