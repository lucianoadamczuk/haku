import { useTranslation } from "@/app/i18n/configuration/server";
import Contact from "../layouts/Contact/Contact";

interface Props {
  language: string;
}

export default async function ContactContainer({ language }: Props) {
  const { t } = await useTranslation(language, [
    "global/routes",
    "global/contact",
  ]);

  const id = t("routes.contact.pathname", { ns: "global/routes" });
  const title = t("title", { ns: "global/contact" });

  // form stuff
  const nameAndSurnameLabel = t("nameAndSurnameLabel", {
    ns: "global/contact",
  });
  const nameAndSurnameError = t("nameAndSurnameError", {
    ns: "global/contact",
  });
  const companyNameLabel = t("companyNameLabel", { ns: "global/contact" });
  const companyNameError = t("companyNameError", { ns: "global/contact" });
  const selectLabel = t("reasonLabel", { ns: "global/contact" });
  const options = t("options", { ns: "global/contact", returnObjects: true });
  const commentLabel = t("commentLabel", { ns: "global/contact" });
  const commentError = t("commentError", { ns: "global/contact" });
  const socialMediaTitle = t("socialMediaTitle", { ns: "global/contact" });
  const button = t("button", { ns: "global/contact" });
  const messageTemplate = t("message", {
    ns: "global/contact",
    nameAndSurname: "{{nameAndSurname}}",
    companyName: "{{companyName}}",
    comment: "{{comment}}",
  });

  const formValues = {
    nameAndSurnameLabel: nameAndSurnameLabel,
    nameAndSurnameError: nameAndSurnameError,
    companyNameLabel: companyNameLabel,
    companyNameError: companyNameError,
    reasonLabel: selectLabel,
    options: options,
    commentLabel: commentLabel,
    commentError: commentError,
    socialMediaTitle: socialMediaTitle,
    button: button,
    messageTemplate: messageTemplate,
  };

  return <Contact id={id} title={title} formValues={formValues} />;
}
