import { HeaderHome, WhatWeOffer, WhoWeAre } from '@/modules/home';
import { AppParams } from '@/modules/types';

export default async function PageHome({ params }: { params: AppParams }) {
	const language = params.language;
	return (
		<>
			<HeaderHome language={language} />
			<WhoWeAre language={language} />
			<WhatWeOffer language={language} />
		</>
	);
}
