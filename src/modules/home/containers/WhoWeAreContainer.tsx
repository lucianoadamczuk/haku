import { useTranslation } from '@/app/i18n/configuration/server';
import WhoWeAre from '../layouts/WhoWeAre/WhoWeAre';

interface Props {
	language: string;
}
export default async function WhoWeAreContainer({ language }: Props) {
	const { t } = await useTranslation(language, [
		'home/whoWeAre',
		'global/routes',
	]);
	const id = t('routes.about.pathname', { ns: 'global/routes' });
	const content = t('slides', { returnObjects: true, ns: 'home/whoWeAre' });

	return <WhoWeAre id={id} content={content} />;
}
