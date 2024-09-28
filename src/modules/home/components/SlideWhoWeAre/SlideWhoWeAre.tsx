import { Icon, Icons, Text, Title } from '@/modules/shared';
import styles from './SlideWhoWeAre.module.css';

interface Props {
	title: string;
	text: string;
	index: number;
	icon?: Icons;
	noGrid?: boolean;
}
export default function SlideWhoWeAre({
	title,
	text,
	index,
	icon,
	noGrid,
}: Props) {
	return (
		<div className={`${styles.slideWhoWeAre} ${noGrid ? styles.noGrid : ''}`}>
			<div>
				<Title tag='h3' size='xl' color='secondary' text={title} />
				<Text tag='p' color='light' text={text} />
			</div>

			{icon && (
				<div className={styles.iconContainer}>
					<Icon
						as={icon}
						full
						className={`${styles.icon} ${styles[`animation-${index + 1}`]} `}
					/>
				</div>
			)}
		</div>
	);
}
