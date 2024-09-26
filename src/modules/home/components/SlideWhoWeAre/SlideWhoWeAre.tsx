import { Icon, Icons, Text, Title } from '@/modules/shared';
import styles from './SlideWhoWeAre.module.css';

interface Props {
	title: string;
	text: string;
	index: number;
	icon: Icons;
}
export default function SlideWhoWeAre({ title, text, index, icon }: Props) {
	return (
		<div className={styles.slideWhoWeAre}>
			<div>
				<Title tag='h3' size='xl' color='secondary' text={title} />
				<Text tag='p' color='light' text={text} />
			</div>

			<Icon
				as={icon}
				className={`${styles.icon} ${styles[`animation-${index + 1}`]} `}
			/>
		</div>
	);
}
