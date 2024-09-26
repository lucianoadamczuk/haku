import { useTranslation } from '@/app/i18n/configuration/server';
import { AppParams } from '@/modules/types';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	params: AppParams;
}
export default async function layout({ children, params }: Props) {
	const { t } = await useTranslation(params.language, 'global/routes');
	const serviceRoute = t('subRoutes.service', { ns: 'global/routes' });

	/* ------------------------- handle unmatched route ------------------------- */
	if (serviceRoute !== params.service) {
		return redirect(`/${params.language}`);
	}

	return children;
}
