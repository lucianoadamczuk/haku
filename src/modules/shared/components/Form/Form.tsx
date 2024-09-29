import { ReactNode } from 'react';
import styles from './Form.module.css';
interface Props {
	children: ReactNode;
	className?: string;
}
export default function Form({ children, className }: Props) {
	return (
		<form className={`${styles.form} ${className ? className : ''}`}>
			{children}
		</form>
	);
}
