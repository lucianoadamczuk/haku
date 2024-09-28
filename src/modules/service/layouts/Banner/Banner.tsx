import { Title } from '@/modules/shared';
import styles from './Banner.module.css';
export default function Banner() {
	return (
		<div className={styles.banner}>
			<Title tag='span' color='light' size='2xl' text='Lo que contiene' />
		</div>
	);
}
