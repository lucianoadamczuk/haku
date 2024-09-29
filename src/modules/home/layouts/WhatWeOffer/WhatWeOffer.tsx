import { Title } from '@/modules/shared';
import { Service } from '@/modules/types';
import CardService from '../../components/CardService/CardService';
import styles from './WhatWeOffer.module.css';

interface Props {
	language: string;
	id: string;
	title: string;
	services: Service[];
	button: string;
}
export default async function WhatWeOffer({
	id,
	language,
	title,
	services,
	button,
}: Props) {
	return (
		<section className={styles.whatWeOffer} id={id}>
			<Title tag='h3' size='xl' text={title} />

			<div className={styles.cardsContainer}>
				{services.map((s, index) => {
					const key = `service_${s.slug}`;
					const href = `${language}/service/${s.slug}`;
					const japaneseTitle = s.japaneseTitle;
					const title = s.title;
					const text = s.text;
					const src = `/images/shared/${s.slug}.svg`;
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
