import { NotFound } from "@/modules/shared";
import { AppParams } from "@/modules/types";

interface Props {
  params: AppParams;
}
export default function page({ params }: Props) {
  const { language } = params;
  return <NotFound language={language} />;
}
