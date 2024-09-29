import { useTranslation } from '@/app/i18n/configuration/server';
import Banner from '../layouts/Banner/Banner';

interface Props {
	language: string;
}
export default async function BannerContainer({ language }: Props) {
	const { t } = await useTranslation(language, 'service/banner');
	const title = t('title', { ns: 'service/banner' });
	return <Banner title={title} />;
}
