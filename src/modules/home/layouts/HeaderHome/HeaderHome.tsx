import { Title } from '@/modules/shared';
import styles from './HeaderHome.module.css';

interface Props {
	id: string;
	subtitle: string;
}
export default async function HeaderHome({ id, subtitle }: Props) {
	return (
		<header className={styles.headerHome} id={id}>
			<div className={styles.image}></div>

			<div className={styles.textContainer}>
				<Title tag='h1' text='HAKU' size='2xl' />
				<Title tag='h2' color='secondary' text={subtitle} />
			</div>
		</header>
	);
}
