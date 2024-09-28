import { Text, Title } from '@/modules/shared';
import { sanitizeString } from '@/utilities';
import Image from 'next/image';
import styles from './CardService.module.css';
interface Props {
	href: string;
	japaneseTitle: string;
	title: string;
	text: string;
	src: string;
	alt: string;
	button: string;
}
export default function CardService({
	href,
	title,
	japaneseTitle,
	text,
	src,
	alt,
	button,
}: Props) {
	function splitJapaneseTitle(textParam: string) {
		const japaneseText = textParam.split('');

		return japaneseText.map((letter, index) => {
			const key = sanitizeString(
				`japanese_title_${textParam}_${letter}_${index}`
			);
			const text = letter;

			return (
				<Title
					key={key}
					tag='span'
					fontFamily='japanese'
					size='lg'
					text={text}
				/>
			);
		});
	}

	return (
		<a href={href} className={styles.cardService}>
			<div className={styles.contentContainer}>
				<div className={styles.circle}></div>
				<div className={styles.japaneseTitleContainer}>
					{splitJapaneseTitle(japaneseTitle)}
				</div>
				<Title tag='h4' size='lg' className={styles.title} text={title} />
				<Text tag='p' size='sm' className={styles.text} text={text} />
				<Image
					src={src}
					alt={alt}
					fill
					loading='lazy'
					className={styles.image}
				/>
			</div>
			<Text tag='span' className={styles.seeMore} text={button} />
		</a>
	);
}
