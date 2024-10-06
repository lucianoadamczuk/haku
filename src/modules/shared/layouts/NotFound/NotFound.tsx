"use client";

import { useTranslation } from "@/app/i18n/configuration/client";
import { AppParams } from "@/modules/types";
import { useRouter } from "next/navigation";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import styles from "./NotFound.module.css";

interface Props {
  language: AppParams["language"];
}
export default function NotFound({ language }: Props) {
  const router = useRouter();

  const { t } = useTranslation(language, "global/errors");

  const title = t("notFound.title", { ns: "global/errors" });
  const text = t("notFound.text", { ns: "global/errors" });
  const button = t("notFound.button", { ns: "global/errors" });

  return (
    <section className={styles.notFound}>
      <div className={styles.contentContainer}>
        <Title tag="span" size="lg" text={title} />
        <Text tag="p" text={text} />
      </div>

      <Button text={button} onClick={() => router.replace(`/${language}`)} />
    </section>
  );
}
