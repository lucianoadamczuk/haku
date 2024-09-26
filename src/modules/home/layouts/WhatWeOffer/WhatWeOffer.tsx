import { Title } from '@/modules/shared';
import styles from './WhatWeOffer.module.css';
import CardService from '../../components/CardService/CardService';
import { useTranslation } from '@/app/i18n/configuration/server';
import { sanitizeString } from '@/utilities';

interface Props {
	language: string;
}
export default async function WhatWeOffer({ language }: Props) {
	const images = [
		'/images/shared/service-1.svg',
		'/images/shared/service-2.svg',
		'/images/shared/service-3.svg',
		'/images/shared/service-4.svg',
	];

	const { t } = await useTranslation(language, [
		'global/services',
		'global/buttons',
	]);

	const services = t('services', {
		ns: 'global/services',
		returnObjects: true,
	});

	const button = t('seeMore', { ns: 'global/buttons' });

	return (
		<section className={styles.whatWeOffer}>
			<Title tag='h3' size='xl' text='Lo que ofrecemos' />

			<div className={styles.cardsContainer}>
				{services.map((s, index) => {
					const sanitizeTitle = sanitizeString(s.title);
					const key = `service_${sanitizeString}`;
					const href = `${language}/${sanitizeTitle}`;
					const japaneseTitle = s.japaneseTitle;
					const title = s.title;
					const text = s.text;
					const alt = s.alt;

					return (
						<CardService
							key={key}
							href={href}
							japaneseTitle={japaneseTitle}
							title={title}
							text={text}
							src={images[index]}
							alt={alt}
							button={button}
						/>
					);
				})}
			</div>
		</section>
	);
}
