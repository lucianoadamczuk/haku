'use client';

import { useParams, useRouter } from 'next/navigation';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';
import styles from './NotFound.module.css';
import { useTranslation } from '@/app/i18n/configuration/client';
import { AppParams } from '@/modules/types';

export default function NotFound() {
	const router = useRouter();
	const params: AppParams = useParams();
	const language = params.language;
	const { t } = useTranslation(language, 'global/errors');

	const title = t('notFound.title', { ns: 'global/errors' });
	const text = t('notFound.text', { ns: 'global/errors' });
	const button = t('notFound.button', { ns: 'global/errors' });

	return (
		<section className={styles.notFound}>
			<div>
				<Title tag='span' size='lg' text={title} />
				<Text tag='p' text={text} />
			</div>

			<Button text={button} onClick={() => router.push(`/${language}`)} />
		</section>
	);
}
