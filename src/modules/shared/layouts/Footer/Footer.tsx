import { hakuInformation } from '@/modules/constants';
import styles from './Footer.module.css';
import Icon from '../../components/Icon/Icon';
import Link from 'next/link';
import { Icons } from '../../components/Icon/types/Icon';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';

/* ---------------------------------- haku ---------------------------------- */
const HakuBox = () => {
	return (
		<div className={styles.hakuBox}>
			<Title tag='span' color='secondary' size='xl' text='HAKU' />
			<Text
				tag='small'
				size='sm'
				color='light-transparent'
				text='Tu socio estratégico'
			/>
		</div>
	);
};

/* --------------------------------- contact -------------------------------- */
const ContactBox = () => {
	return (
		<div className={styles.contactBox}>
			<Title tag='h6' color='light' text='Contacto' />

			<div className={styles.contactBoxesContainer}>
				<Text
					tag='span'
					size='sm'
					color='light-transparent'
					text={`Phone: ${hakuInformation.phone}`}
				/>
				<Text
					tag='span'
					size='sm'
					color='light-transparent'
					text={`Email: ${hakuInformation.email}`}
				/>
			</div>
		</div>
	);
};

/* ------------------------------ social medias ----------------------------- */
const SMBox = () => {
	return (
		<div className={styles.smBox}>
			<Title tag='span' color='light' text='Social media' />

			<div className={styles.smContainer}>
				{Object.entries(hakuInformation.socialMedias).map(([icon, href]) => {
					const key = `social_media_${icon}`;

					return (
						<Link key={key} href={href} target='_blank'>
							<Icon as={icon as Icons} color='light' hover />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

/* -------------------------------- copyright ------------------------------- */
const CopyrightBox = () => {
	return (
		<div className={styles.copyrightBox}>
			<Text
				tag='span'
				size='sm'
				color='primary-light'
				text='HAKU | todos los derechos reservados'
			/>
		</div>
	);
};

export default function Footer() {
	return (
		<footer className={styles.footer}>
			{HakuBox()}
			{ContactBox()}
			{SMBox()}
			{CopyrightBox()}
		</footer>
	);
}
