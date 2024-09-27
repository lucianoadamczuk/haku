import { Navbar } from '@/modules/shared';
import { AppParams } from '@/modules/types';
import { dir } from 'i18next';
import { ReactNode } from 'react';
import '../../modules/theme/index.css';
import { languages } from '../i18n/configuration/settings';

/* ------------------------------ static params ----------------------------- */
export async function generateStaticParams() {
	return languages.map((language) => ({ language }));
}

/* -------------------------------- metadata -------------------------------- */
export async function generateMetadata({ params }: { params: AppParams }) {
	try {
		const t = await import(
			`../i18n/locales/${params.language}/global/metadata.json`
		);
		const title = t.title;
		const description = t.description;

		return { title, description };
	} catch (error) {
		console.log(error);
	}
}

interface Props {
	children: ReactNode;
	params: AppParams;
}

export default function RootLayout({ children, params }: Props) {
	const { language } = params;

	return (
		<html lang={language} dir={dir(language)}>
			<body>
				<Navbar language={language} />
				{children}
			</body>
		</html>
	);
}
