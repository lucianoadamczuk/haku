import { HeaderHome, WhatWeOffer, WhoWeAre } from '@/modules/home';
import { StaticParams } from '@/modules/types';

export default async function PageHome({ params }: { params: StaticParams }) {
	const language = params.language;
	return (
		<>
			<HeaderHome language={language} />
			<WhoWeAre language={language} />
			<WhatWeOffer language={language} />
		</>
	);
}
