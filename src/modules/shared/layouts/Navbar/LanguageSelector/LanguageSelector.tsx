"use client";
import { languages } from "@/app/i18n/configuration/settings";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import styles from "./LanguageSelector.module.css";
import { AppParams } from "@/modules/types";

interface Props {
  className: string;
}
export default function LanguageSelector({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<AppParams>();

  function changeLanguage(e: ChangeEvent<HTMLSelectElement>) {
    const newLanguage = e.target.value;
    const splitedPathname = pathname.split("/").filter(Boolean);
    splitedPathname[0] = newLanguage;
    const newURL = `/${splitedPathname.join("/")}`;
    router.replace(newURL);
  }

  return (
    <select
      className={`${styles.select} ${className}`}
      value={params.language}
      onChange={changeLanguage}
    >
      {languages.map((lang) => {
        const key = `language_available_${lang}`;
        return (
          <option key={key} value={lang}>
            {lang}
          </option>
        );
      })}
    </select>
  );
}
