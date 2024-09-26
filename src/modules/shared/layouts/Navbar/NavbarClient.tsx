'use client';

import { ChangeEvent, CSSProperties, useState } from 'react';
import Anchor from '../../components/Anchor/Anchor';
import Icon from '../../components/Icon/Icon';
import Title from '../../components/Title/Title';
import styles from './NavbarClient.module.css';
import { languages } from '@/app/i18n/configuration/settings';
import { useParams, useRouter } from 'next/navigation';
import { StaticParams } from '@/modules/types';

interface Props {
	routes: { name: string; pathname: string }[];
}

export default function NavbarClient({ routes }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	function toggle() {
		setIsOpen(!isOpen);
	}

	const menuStyle = {
		left: isOpen ? '0px' : '100%',
		borderRadius: isOpen ? '0px' : '100%',
	} as CSSProperties;

	const params = useParams<StaticParams>();

	const router = useRouter();
	function changeLanguage(e: ChangeEvent<HTMLSelectElement>) {
		const event = e.target.value;
		router.replace(`/${event}`);
	}

	return (
		<nav className={styles.navbarClient}>
			<select
				className={styles.select}
				value={params.language}
				onChange={changeLanguage}
			>
				{languages.map((lang) => {
					const key = `language_available_${lang}`;
					return (
						<option key={key} value={lang}>
							{lang}
						</option>
					);
				})}
			</select>

			<Title tag='span' color='secondary' text='HAKU' />

			{isOpen ? (
				<Icon as='close' color='light' onClick={() => toggle()} />
			) : (
				<Icon as='menu' color='light' onClick={() => toggle()} />
			)}

			<div className={styles.linksContainer} style={menuStyle}>
				{routes.map((r) => {
					const key = `route_${r.pathname}`;
					const href = `#${r.pathname}`;
					const text = r.name;
					return <Anchor key={key} href={href} text={text} />;
				})}
			</div>
		</nav>
	);
}
