import { useTranslation } from '@/app/i18n/configuration/server';
import { AppParams } from '@/modules/types';
import { notFound } from 'next/navigation';

interface LayoutProps {
	children: React.ReactNode;
	params: AppParams;
}

export async function FindService(language: string, slug: string) {
	// translations
	const { t } = await useTranslation(language, 'global/services');
	const services = t('services', {
		ns: 'global/services',
		returnObjects: true,
	});

	// find service
	const serviceFound = services.find((s) => s.slug === slug);
	if (!serviceFound) {
		return notFound();
	}
	return serviceFound;
}

export async function generateMetadata({ params }: { params: AppParams }) {
	// execute function to find a service and generate dynamic metadata
	const service = await FindService(params.language, params.slug);

	const title = `HAKU - ${service.title}`;
	return { title };
}

export default async function Layout({ children }: LayoutProps) {
	return children;
}
