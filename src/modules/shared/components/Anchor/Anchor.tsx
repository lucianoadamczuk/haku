import Link from 'next/link';
import styles from './Anchor.module.css';
interface Props {
	href: string;
	text: string;
	color?: 'light' | 'secondary';
	onClick?: () => void;
}

export default function Anchor({ text, href, color, onClick }: Props) {
	const colorStyle = `var(--color-${color})`;
	return (
		<Link
			href={href}
			style={{ color: colorStyle }}
			className={styles.anchor}
			onClick={onClick}
		>
			{text}
		</Link>
	);
}
