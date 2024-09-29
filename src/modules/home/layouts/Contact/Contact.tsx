import { Icon, Title } from "@/modules/shared";
import FormContact from "../../components/FormContact/FormContact";
import { IFormcontact } from "../../interfaces/IFormContact";
import styles from "./Contact.module.css";

interface Props {
  id: string;
  title: string;
  formValues: IFormcontact;
}

export default async function Contact({ id, title, formValues }: Props) {
  return (
    <section className={styles.contact} id={id}>
      {/* ---------------------------------- title --------------------------------- */}
      <Title
        tag="h3"
        size="xl"
        color="secondary"
        className={styles.title}
        text={title}
      />

      {/* ---------------------------------- form ---------------------------------- */}
      <FormContact formValues={formValues} className={styles.form} />

      {/* ---------------------------------- icon ---------------------------------- */}
      <Icon as="talk" full color="primary" className={styles.icon} />
    </section>
  );
}
