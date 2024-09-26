import { useTranslation } from '@/app/i18n/configuration/server';
import NavbarClient from './NavbarClient';

interface Props {
	language: string;
}

export default async function Navbar({ language }: Props) {
	const { t } = await useTranslation(language, 'global/routes');
	const object = t('routes', { ns: 'global/routes', returnObjects: true });

	const routes = Object.values(object);
	return <NavbarClient routes={routes} />;
}
