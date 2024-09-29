import { useTranslation } from '@/app/i18n/configuration/server';
import HeaderHome from '../layouts/HeaderHome/HeaderHome';

interface Props {
	language: string;
}
export default async function HeaderHomeContainer({ language }: Props) {
	const { t } = await useTranslation(language, [
		'home/header',
		'global/routes',
	]);
	const subtitle = t('subtitle', { ns: 'home/header' });
	const id = t('routes.beginning.pathname', { ns: 'global/routes' });

	return <HeaderHome id={id} subtitle={subtitle} />;
}
