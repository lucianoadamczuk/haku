interface Props {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
	text: string;
	size?: '2xl' | 'x2' | 'lg';
	color?: 'light' | 'secondary';
}

export default function Title({ tag: Tag, size, text, color }: Props) {
	const sizeStyle = `var(--font-size-${size})`;
	const colorStyle = `var(--color-${color})`;
	return <Tag style={{ fontSize: sizeStyle, color: colorStyle }}>{text}</Tag>;
}
