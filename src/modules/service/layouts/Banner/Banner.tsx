'use client';

import { Title } from '@/modules/shared';
import { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import { useDevice } from '@/utilities';

interface Props {
	title: string;
}
export default function Banner({ title }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const { isDesktop } = useDevice();
	const [scale, setScale] = useState<number>(0.5);

	useEffect(() => {
		function handleScroll() {
			if (ref.current) {
				const { scrollY } = window;
				const bannerHeight = ref.current.clientHeight;
				const newScale = Math.min(3, 0.5 + scrollY / bannerHeight);
				setScale(newScale);
			}
		}

		if (isDesktop) {
			handleScroll();
			window.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (isDesktop) {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	}, [isDesktop]);

	return (
		<div className={styles.banner} ref={ref}>
			<Title
				tag='span'
				color='light'
				size='2xl'
				style={{ transform: isDesktop ? `scale(${scale})` : '' }}
				text={title}
			/>
		</div>
	);
}
