import styles from './Icon.module.css';
import {
	close,
	facebook,
	instagram,
	linkedIn,
	menu,
	x,
} from './constants/constants';
import { Icons } from './types/Icon';

interface Props {
	as: Icons;
	color?: 'primary' | 'light';
	hover?: boolean;
	onClick?: () => void;
}
export default function Icon({ as, color, hover, onClick }: Props) {
	/* --------------------------------- styles --------------------------------- */
	return (
		<div
			className={`${styles.icon} ${styles[color ? color : 'light']} ${hover ? styles.hover : ''}`}
			onClick={onClick}
		>
			{as === 'instagram' && instagram}
			{as === 'linkedIn' && linkedIn}
			{as === 'facebook' && facebook}
			{as === 'x' && x}
			{as === 'menu' && menu}
			{as === 'close' && close}
		</div>
	);
}
