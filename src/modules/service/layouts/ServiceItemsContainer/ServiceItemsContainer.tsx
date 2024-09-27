import { Service } from '@/modules/types';
import ServiceItem from '../../components/ServiceItem/ServiceItem';
import styles from './ServiceItemsContainer.module.css';
import { sanitizeString } from '@/utilities';

interface Props {
	service: Service;
}
export default function ServiceItemsContainer({ service }: Props) {
	return (
		<section className={styles.serviceItemsContainer}>
			{service.items.map((item, i) => {
				const key = sanitizeString(item.title + item.text);
				const index = i + 1;
				const title = item.title;
				const text = item.text;

				return (
					<ServiceItem key={key} index={index} title={title} text={text} />
				);
			})}
		</section>
	);
}
