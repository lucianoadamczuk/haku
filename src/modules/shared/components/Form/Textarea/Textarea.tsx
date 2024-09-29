import { UseFormRegisterReturn } from "react-hook-form";
import Text from "../../Text/Text";
import styles from "./Textarea.module.css";
interface Props {
  label: string;
  register: UseFormRegisterReturn;
  error: string;
}
export default function Textarea({ label, register, error }: Props) {
  return (
    <div className={styles.box}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <textarea {...register} className={styles.textarea}></textarea>
      <Text tag="small" size="sm" color="secondary-light" text={error} />
    </div>
  );
}
