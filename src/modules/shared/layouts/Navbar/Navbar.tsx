'use client';

import { ChangeEvent, CSSProperties, useState } from 'react';
import Anchor from '../../components/Anchor/Anchor';
import Icon from '../../components/Icon/Icon';
import Title from '../../components/Title/Title';
import styles from './Navbar.module.css';
import { languages } from '@/app/i18n/configuration/settings';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { AppParams } from '@/modules/types';

interface Props {
	routes: { name: string; pathname: string }[];
	language: string;
}

export default function Navbar({ routes, language }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	function toggle() {
		setIsOpen(!isOpen);
	}

	const menuStyle = {
		left: isOpen ? '0px' : '100%',
		borderRadius: isOpen ? '0px' : '100%',
		opacity: isOpen ? 1 : 0,
	} as CSSProperties;

	const params = useParams<AppParams>();
	const pathname = usePathname();
	const router = useRouter();

	function changeLanguage(e: ChangeEvent<HTMLSelectElement>) {
		const newLanguage = e.target.value;
		const splitedPathname = pathname.split('/').filter(Boolean);
		splitedPathname[0] = newLanguage;
		const newURL = `/${splitedPathname.join('/')}`;
		router.replace(newURL);
	}

	return (
		<nav className={styles.navbar}>
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

			<Title tag='span' color='secondary' text='HAKU' className={styles.logo} />

			<>
				{isOpen ? (
					<Icon
						as='close'
						color='light'
						className={styles.icon}
						onClick={() => toggle()}
					/>
				) : (
					<Icon
						as='menu'
						color='light'
						className={styles.icon}
						onClick={() => toggle()}
					/>
				)}
			</>

			<div className={styles.linksContainer} style={menuStyle}>
				{routes.map((r) => {
					const key = `route_${r.pathname}`;
					const href = `/${language}/#${r.pathname}`;
					const text = r.name;
					return (
						<Anchor
							key={key}
							color='light'
							href={href}
							text={text}
							onClick={toggle}
						/>
					);
				})}
			</div>
		</nav>
	);
}
