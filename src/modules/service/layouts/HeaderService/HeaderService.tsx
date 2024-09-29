import { Text, Title } from '@/modules/shared';
import { Service } from '@/modules/types';
import Image from 'next/image';
import styles from './HeaderService.module.css';

interface Props {
	service: Service;
}

type ColorPlans = 'plan-sakura' | 'plan-fuji' | 'plan-bushido' | 'plan-tenka';

export default async function HeaderService({ service }: Props) {
	const slug = service.slug;
	const japaneseTitle = service.japaneseTitle;
	const title = service.title;
	const text = service.text;
	const src = `/images/shared/${service.slug}.svg`;
	const alt = service.alt;

	return (
		<header className={styles.headerService}>
			<Image
				priority
				src={src}
				alt={alt}
				width={300}
				height={300}
				className={styles.image}
			/>
			<div>
				<Title tag='h1' size='2xl' text={title} />
				<Text tag='p' text={text} />
				<Title
					tag='span'
					size='lg'
					color={slug as ColorPlans}
					text={japaneseTitle}
				/>
			</div>
		</header>
	);
}
