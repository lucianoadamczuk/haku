'use client';

import { CSSProperties, useState } from 'react';
import Anchor from '../../components/Anchor/Anchor';
import Icon from '../../components/Icon/Icon';
import Title from '../../components/Title/Title';
import styles from './NavbarClient.module.css';

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

	return (
		<nav className={styles.navbarClient}>
			<select name='' id=''>
				<option value=''>ES</option>
				<option value=''>EN</option>
			</select>
			<Title tag='span' color='secondary' text='texto' />
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
