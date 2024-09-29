import { FormEventHandler, ReactNode } from 'react';
import styles from './Form.module.css';
interface Props {
	children: ReactNode;
	className?: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
}
export default function Form({ children, className, onSubmit }: Props) {
	return (
		<form
			className={`${styles.form} ${className ? className : ''}`}
			onSubmit={onSubmit}
		>
			{children}
		</form>
	);
}
