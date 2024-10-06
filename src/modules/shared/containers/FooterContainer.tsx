import { useTranslation } from "@/app/i18n/configuration/server";
import Footer from "../layouts/Footer/Footer";
import { hakuInformation } from "@/modules/constants";

interface Props {
  language: string;
}
export default async function FooterContainer({ language }: Props) {
  const { t } = await useTranslation(language, "global/footer");

  const phrase = t("footer.phrase", { ns: "global/footer" });
  const contactTitle = t("footer.contact", { ns: "global/footer" });
  const phone = hakuInformation.phone;
  const email = hakuInformation.email;
  const socialMediasTitle = t("footer.socialMedias", { ns: "global/footer" });
  const socialMedias = hakuInformation.socialMedias;
  const copyrightTitle = t("footer.copyright", { ns: "global/footer" });
  return (
    <Footer
      phrase={phrase}
      contactTitle={contactTitle}
      phone={phone}
      email={email}
      socialMediasTitle={socialMediasTitle}
      socialMedias={socialMedias}
      copyrightTitle={copyrightTitle}
    />
  );
}
