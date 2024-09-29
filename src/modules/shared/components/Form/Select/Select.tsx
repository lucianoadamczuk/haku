import { sanitizeString } from "@/utilities";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Select.module.css";

interface Props {
  label: string;
  options: string[];
  register: UseFormRegisterReturn;
}
export default function Select({ label, options, register }: Props) {
  return (
    <div className={styles.box}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <select {...register} className={styles.select}>
        {options.map((o) => {
          const key = `formValue_select_${sanitizeString(o)}`;
          const value = o;
          return (
            <option key={key} value={value} className={styles.option}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
