import { useTranslation } from "@/app/i18n/configuration/server";
import {
  BannerContainer,
  HeaderService,
  ServiceItemsContainer,
} from "@/modules/service";
import { AppParams } from "@/modules/types";
import { notFound } from "next/navigation";

interface Props {
  params: AppParams;
}

export default async function PageService({ params }: Props) {
  const language = params.language;
  const slug = params.slug;

  const { t } = await useTranslation(language, "global/services");

  const services = t("services", {
    ns: "global/services",
    returnObjects: true,
  });

  /* ----------------------------- find a service ----------------------------- */
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <>
      <HeaderService service={service} />
      <main>
        <BannerContainer language={language} />
        <ServiceItemsContainer service={service} />
      </main>
    </>
  );
}
