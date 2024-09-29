import { Title } from "@/modules/shared";
import styles from "./HeaderHome.module.css";
import Image from "next/image";

interface Props {
  id: string;
  subtitle: string;
}
export default async function HeaderHome({ id, subtitle }: Props) {
  return (
    <header className={styles.headerHome} id={id}>
      <Image
        src="../icon.svg"
        alt="icon"
        width={300}
        height={300}
        className={styles.image}
      />

      <div className={styles.textContainer}>
        <Title tag="h1" color="secondary" text="HAKU" size="2xl" />
        <Title tag="h2" text={subtitle} />
      </div>
    </header>
  );
}
