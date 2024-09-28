import styles from './Icon.module.css';
import {
	close,
	meta,
	instagram,
	linkedIn,
	menu,
	people,
	rocket,
	target,
	x,
} from './constants/constants';
import { Icons } from './types/Icon';

interface Props {
	as: Icons;
	className?: string;
	color?: 'primary' | 'light';
	hover?: boolean;
	onClick?: () => void;
}
export default function Icon({ as, color, hover, className, onClick }: Props) {
	/* --------------------------------- styles --------------------------------- */
	return (
		<div
			className={`${styles.icon} ${styles[color ? color : 'light']} ${hover && styles.hover} ${className}`}
			onClick={onClick}
		>
			{as === 'instagram' && instagram}
			{as === 'linkedIn' && linkedIn}
			{as === 'meta' && meta}
			{as === 'x' && x}
			{as === 'menu' && menu}
			{as === 'close' && close}
			{as === 'people' && people}
			{as === 'rocket' && rocket} {as === 'target' && target}
		</div>
	);
}
