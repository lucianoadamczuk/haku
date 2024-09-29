import Text from '../../Text/Text';
import styles from './Textarea.module.css';
interface Props {
	label: string;
	error: string;
}
export default function Textarea({ label, error }: Props) {
	return (
		<div className={styles.box}>
			<label htmlFor={label} className={styles.label}>
				{label}
			</label>
			<textarea name={label} className={styles.textarea}></textarea>
			<Text tag='small' size='sm' text={error} />
		</div>
	);
}
