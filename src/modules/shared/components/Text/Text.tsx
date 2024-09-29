interface Props {
	tag: 'p' | 'small' | 'span';
	text: string;
	size?: 'sm';
	color?:
		| 'primary-light'
		| 'light'
		| 'light-transparent'
		| 'secondary'
		| 'secondary-light';
	className?: string;
}

export default function Text({
	tag: Tag,
	size,
	text,
	color,
	className,
}: Props) {
	const sizeStyle = `var(--font-size-${size})`;
	const colorStyle = `var(--color-${color})`;
	return (
		<Tag
			className={className}
			style={{ fontSize: sizeStyle, color: colorStyle }}
		>
			{text}
		</Tag>
	);
}
