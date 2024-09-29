import { FieldValues, UseFormRegister } from 'react-hook-form';
import Text from '../../Text/Text';
import styles from './Input.module.css';

interface Props {
	label: string;
	type: 'text' | 'email' | 'url';
	register: UseFormRegister<FieldValues>;
	error: string;
}
export default function Input({ label, type, register, error }: Props) {
	return (
		<div className={styles.box}>
			<label htmlFor={label} className={styles.label}>
				{label}
			</label>
			<input type={type} {...register} className={styles.input} />
			<Text tag='small' size='sm' color='secondary-light' text={error} />
		</div>
	);
}
