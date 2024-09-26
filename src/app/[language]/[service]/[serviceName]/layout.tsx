import { AppParams } from '@/modules/types';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface Service {
	slug: string;
	title: string;
	text: string;
}

/* ----------------- find service and handle unmatched route ---------------- */
async function findService(language: string, serviceName: string) {
	const t: { services: Service[] } = await import(
		`../../../i18n/locales/${language}/global/services.json`
	);

	const serviceFound: Service | undefined = t.services.find(
		(service) => service.slug === serviceName
	);

	if (!serviceFound) {
		return redirect(`/${language}`);
	}

	return serviceFound;
}

export async function generateMetadata({ params }: { params: AppParams }) {
	const language = params.language;
	const serviceName = params.serviceName;

	const service = await findService(language, serviceName);

	const title = `HAKU - ${service.title} `;
	const description = service.text;
	return { title, description };
}

interface Props {
	children: ReactNode;
}
export default function layout({ children }: Props) {
	return children;
}
