import Link from 'next/link';

interface Props {
	href: string;
	text: string;
	color?: 'light' | 'secondary';
}

export default function Anchor({ text, href, color }: Props) {
	const colorStyle = `var(--color-${color})`;
	return (
		<Link href={href} style={{ color: colorStyle }}>
			{text}
		</Link>
	);
}
