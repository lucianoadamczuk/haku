import { Title } from '@/modules/shared';
import styles from './WhatWeOffer.module.css';
import CardService from '../../components/CardService/CardService';
import { useTranslation } from '@/app/i18n/configuration/server';

interface Props {
	language: string;
}
export default async function WhatWeOffer({ language }: Props) {
	const { t } = await useTranslation(language, [
		'global/services',
		'global/buttons',
		'global/routes',
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
					const key = `service_${s.slug}`;
					const href = `${language}/service/${s.slug}`;
					const japaneseTitle = s.japaneseTitle;
					const title = s.title;
					const text = s.text;
					const src = `/images/shared/service-${index + 1}.svg`;
					const alt = s.alt;

					return (
						<CardService
							key={key}
							href={href}
							japaneseTitle={japaneseTitle}
							title={title}
							text={text}
							src={src}
							alt={alt}
							button={button}
						/>
					);
				})}
			</div>
		</section>
	);
}
