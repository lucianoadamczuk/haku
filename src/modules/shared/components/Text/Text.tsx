interface Props {
	tag: 'p' | 'small' | 'span';
	text: string;
	size?: 'sm';
	color?: 'light' | 'secondary';
}

export default function Text({ tag: Tag, size, text, color }: Props) {
	const sizeStyle = `var(--font-size-${size})`;
	const colorStyle = `var(--color-${color})`;
	return <Tag style={{ fontSize: sizeStyle, color: colorStyle }}>{text}</Tag>;
}
