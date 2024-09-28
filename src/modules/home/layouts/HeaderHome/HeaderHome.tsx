import { Title } from '@/modules/shared';
import styles from './HeaderHome.module.css';
import { useTranslation } from '@/app/i18n/configuration/server';

interface Props {
	language: string;
}
export default async function HeaderHome({ language }: Props) {
	const { t } = await useTranslation(language, 'home/header');
	const subtitle = t('subtitle', { ns: 'home/header' });

	return (
		<header className={styles.headerHome}>
			<div className={styles.image}></div>

			<div className={styles.textContainer}>
				<Title tag='h1' text='HAKU' size='2xl' />
				<Title tag='h2' color='secondary' text={subtitle} />
			</div>
		</header>
	);
}
