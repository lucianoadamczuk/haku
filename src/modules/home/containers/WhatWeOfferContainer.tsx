import { useTranslation } from '@/app/i18n/configuration/server';
import WhatWeOffer from '../layouts/WhatWeOffer/WhatWeOffer';

interface Props {
	language: string;
}
export default async function WhatWeOfferContainer({ language }: Props) {
	const { t } = await useTranslation(language, [
		'global/routes',
		'global/services',
		'home/whatWeOffer',
		'global/buttons',
	]);

	const services = t('services', {
		ns: 'global/services',
		returnObjects: true,
	});

	const id = t('routes.services.pathname', { ns: 'global/routes' });
	const title = t('title', { ns: 'home/whatWeOffer' });
	const button = t('seeMore', { ns: 'global/buttons' });

	return (
		<WhatWeOffer
			language={language}
			id={id}
			title={title}
			services={services}
			button={button}
		/>
	);
}
