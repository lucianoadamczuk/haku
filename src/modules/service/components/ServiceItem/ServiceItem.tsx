import { Text, Title } from '@/modules/shared';
import styles from './ServiceItem.module.css';

interface Props {
	index: number;
	title: string;
	text: string;
}
export default function ServiceItem({ index, title, text }: Props) {
	return (
		<div className={styles.serviceItem}>
			<Title tag='span' size='xl' color='secondary' text={`- ${index} -`} />
			<Title tag='h5' size='lg' text={title} />

			<Text tag='p' text={text} />
		</div>
	);
}
