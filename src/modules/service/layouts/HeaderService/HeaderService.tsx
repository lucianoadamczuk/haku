import { Text, Title } from '@/modules/shared';
import styles from './HeaderService.module.css';
import Image from 'next/image';
import { useTranslation } from '@/app/i18n/configuration/server';
import { redirect } from 'next/navigation';

interface Props {
	language: string;
	serviceName: string;
}
export default async function HeaderService({ language, serviceName }: Props) {
	const { t } = await useTranslation(language, 'global/services');
	const services = t('services', {
		ns: 'global/services',
		returnObjects: true,
	});

	const serviceFound = services.find((service) => service.slug === serviceName);

	if (!serviceFound) {
		redirect(`/${language}`);
	}

	const serviceIndex =
		services.findIndex((service) => service.slug === serviceName) + 1;

	const japaneseTitle = serviceFound.japaneseTitle;
	const title = serviceFound.title;
	const text = serviceFound.text;
	const src = `/images/shared/service-${serviceIndex}.svg`;
	const alt = serviceFound.alt;

	return (
		<header className={styles.headerService}>
			<div>
				<Title tag='span' size='lg' text={japaneseTitle} />
				<Title tag='h1' size='2xl' text={title} />
				<Text tag='p' text={text} />
			</div>

			<Image
				src={src}
				alt={alt}
				width={300}
				height={300}
				className={styles.image}
			/>
		</header>
	);
}
