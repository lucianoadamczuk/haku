import { dir } from 'i18next';
import { fallbackLng, languages } from '../i18n/configuration/settings';
import { ReactNode } from 'react';

import { redirect } from 'next/navigation';
import '../../modules/theme/index.css';
import { Navbar } from '@/modules/shared';
import { AppParams } from '@/modules/types';

/* ------------------------------ static params ----------------------------- */
export async function generateStaticParams() {
	return languages.map((language) => ({ language }));
}

/* -------------------------------- metadata -------------------------------- */
export async function generateMetadata({ params }: { params: AppParams }) {
	const t = await import(
		`../i18n/locales/${params.language}/global/metadata.json`
	);
	const title = t.title;
	const description = t.description;

	return { title, description };
}

interface Props {
	children: ReactNode;
	params: AppParams;
}

export default function RootLayout({ children, params }: Props) {
	const { language: currentLanguage } = params;

	/* ------------------------ handle unmatched language ----------------------- */
	if (!languages.includes(currentLanguage)) {
		return redirect(`/${fallbackLng}`);
	}

	return (
		<html lang={currentLanguage} dir={dir(currentLanguage)}>
			<body>
				<Navbar language={currentLanguage} />
				{children}
			</body>
		</html>
	);
}
