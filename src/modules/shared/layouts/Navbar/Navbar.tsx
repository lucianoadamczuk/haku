"use client";

import { useDevice } from "@/utilities";
import { useEffect, useState } from "react";
import Anchor from "../../components/Anchor/Anchor";
import Icon from "../../components/Icon/Icon";
import Title from "../../components/Title/Title";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import styles from "./Navbar.module.css";

interface Props {
  routes: { name: string; pathname: string }[];
  language: string;
}

export default function Navbar({ routes, language }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDesktop } = useDevice();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollY } = window;
      return setIsScrolled(scrollY > 300);
    }

    if (isDesktop) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (isDesktop) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isDesktop]);

  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: !isDesktop
          ? "var(--color-primary)"
          : isScrolled
            ? "var(--color-primary)"
            : "transparent",
      }}
    >
      {/* select */}
      <LanguageSelector className={styles.languageSelector} />

      {/* title */}
      <Title tag="span" color="secondary" text="HAKU" className={styles.logo} />

      {/* icons on mobile */}
      <>
        {isOpen ? (
          <Icon
            as="close"
            color="light"
            className={styles.icon}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Icon
            as="menu"
            color="light"
            className={styles.icon}
            onClick={() => setIsOpen(true)}
          />
        )}
      </>

      {/* links */}
      <div
        className={styles.linksContainer}
        style={{
          left: !isDesktop && isOpen ? "0px" : "100%",
          borderRadius: !isDesktop && isOpen ? "0px" : "100%",
          opacity: !isDesktop && isOpen ? 1 : 0,
        }}
      >
        {routes.map((r) => {
          const key = `route_${r.pathname}`;
          const href = `/${language}/#${r.pathname}`;
          const text = r.name;
          return (
            <Anchor
              key={key}
              color={
                !isDesktop
                  ? "light"
                  : isDesktop && isScrolled
                    ? "light"
                    : "primary"
              }
              href={href}
              text={text}
              onClick={() => setIsOpen(false)}
            />
          );
        })}
      </div>
    </nav>
  );
}
