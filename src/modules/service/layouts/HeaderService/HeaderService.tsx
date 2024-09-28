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
	const src = service.src;
	const alt = service.alt;

	return (
		<header className={styles.headerService}>
			<div>
				<Title
					tag='span'
					size='lg'
					color={slug as ColorPlans}
					text={japaneseTitle}
				/>
				<Title tag='h1' size='2xl' text={title} />
				<Text tag='p' text={text} />
			</div>

			<Image
				src={src}
				alt={alt}
				width={300}
				height={300}
				className={styles.image}
			/>
		</header>
	);
}
