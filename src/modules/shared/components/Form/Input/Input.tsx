import Text from '../../Text/Text';
import styles from './Input.module.css';

interface Props {
	label: string;
	type: 'text' | 'email';
	error: string;
}
export default function Input({ label, type, error }: Props) {
	return (
		<div className={styles.box}>
			<label htmlFor={label} className={styles.label}>
				{label}
			</label>
			<input type={type} name={label} className={styles.input} />
			<Text tag='small' size='sm' color='light' text={error} />
		</div>
	);
}
