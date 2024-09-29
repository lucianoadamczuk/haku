import { useTranslation } from '@/app/i18n/configuration/server';
import Navbar from '../layouts/Navbar/Navbar';

interface Props {
	language: string;
}
export default async function NavbarContainer({ language }: Props) {
	const { t } = await useTranslation(language, 'global/routes');
	const routesObject = t('routes', {
		ns: 'global/routes',
		returnObjects: true,
	});
	const routes = Object.values(routesObject);

	return <Navbar language={language} routes={routes} />;
}
