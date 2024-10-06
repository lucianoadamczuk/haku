import Link from "next/link";
import Icon from "../../components/Icon/Icon";
import { Icons } from "../../components/Icon/types/Icon";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import styles from "./Footer.module.css";

/* ---------------------------------- haku ---------------------------------- */
interface HakuBoxProps {
  phrase: string;
}
const HakuBox = ({ phrase }: HakuBoxProps) => {
  return (
    <div className={styles.hakuBox}>
      <Title tag="span" color="secondary" size="xl" text="HAKU" />
      <Text tag="small" size="sm" color="light-transparent" text={phrase} />
    </div>
  );
};

/* --------------------------------- contact -------------------------------- */
interface ContactBoxProps {
  contactTitle: string;
  phone: string;
  email: string;
}
const ContactBox = ({ contactTitle, phone, email }: ContactBoxProps) => {
  return (
    <div className={styles.contactBox}>
      <Title tag="h6" color="light" text={contactTitle} />

      <div className={styles.contactBoxesContainer}>
        <Text tag="span" size="sm" color="light-transparent" text={phone} />
        <Text tag="span" size="sm" color="light-transparent" text={email} />
      </div>
    </div>
  );
};

/* ------------------------------ social medias ----------------------------- */
interface SMBoxProps {
  socialMediasTitle: string;
  socialMedias: { [key: string]: string };
}
const SMBox = ({ socialMediasTitle, socialMedias }: SMBoxProps) => {
  return (
    <div className={styles.smBox}>
      <Title tag="span" color="light" text={socialMediasTitle} />

      <div className={styles.smContainer}>
        {Object.entries(socialMedias).map(([icon, href]) => {
          const key = `social_media_${icon}`;

          return (
            <Link key={key} href={href} target="_blank">
              <Icon as={icon as Icons} color="light" hover />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

/* -------------------------------- copyright ------------------------------- */
interface CopyrightBoxProps {
  copyrightTitle: string;
}
const CopyrightBox = ({ copyrightTitle }: CopyrightBoxProps) => {
  return (
    <div className={styles.copyrightBox}>
      <Text tag="span" size="sm" color="primary-light" text={copyrightTitle} />
    </div>
  );
};

interface Props {
  phrase: string;
  contactTitle: string;
  email: string;
  phone: string;
  socialMediasTitle: string;
  socialMedias: { [key: string]: string };
  copyrightTitle: string;
}
export default async function Footer({
  phrase,
  contactTitle,
  phone,
  email,
  socialMediasTitle,
  socialMedias,
  copyrightTitle,
}: Props) {
  return (
    <footer className={styles.footer}>
      <HakuBox phrase={phrase} />
      <ContactBox contactTitle={contactTitle} email={email} phone={phone} />
      <SMBox
        socialMediasTitle={socialMediasTitle}
        socialMedias={socialMedias}
      />
      <CopyrightBox copyrightTitle={copyrightTitle} />
    </footer>
  );
}
