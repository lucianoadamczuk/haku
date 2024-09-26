import { Title } from '@/modules/shared';
import styles from './HeaderHome.module.css';
interface Props {}
export default function HeaderHome({}: Props) {
	return (
		<header className={styles.HeaderHome}>
			<div className={styles.image}></div>

			<div className={styles.textContainer}>
				<Title tag='h1' text='HAKU' size='2xl' />
				<Title
					tag='h2'
					size='lg'
					color='secondary'
					text='Tu socio estratégico'
				/>
			</div>
		</header>
	);
}
