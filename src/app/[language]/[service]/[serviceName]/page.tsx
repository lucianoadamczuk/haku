import { HeaderService } from '@/modules/service';
import { AppParams } from '@/modules/types';

interface Props {
	params: AppParams;
}
export default function pageService({ params }: Props) {
	const language = params.language;
	const serviceName = params.serviceName;
	return (
		<>
			<HeaderService language={language} serviceName={serviceName} />
		</>
	);
}
