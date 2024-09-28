interface Props {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
	text: string;
	size?: '2xl' | 'xl' | 'lg';
	color?:
		| 'light'
		| 'secondary'
		| 'plan-sakura'
		| 'plan-fuji'
		| 'plan-bushido'
		| 'plan-tenka';
	fontFamily?: 'japanese';
	className?: string;
}

export default function Title({
	tag: Tag,
	size,
	text,
	color,
	fontFamily,
	className,
}: Props) {
	const sizeStyle = `var(--font-size-${size})`;
	const colorStyle = `var(--color-${color})`;
	const fontFamilyStyle =
		fontFamily === 'japanese'
			? 'var(--font-family-japanese'
			: 'var(--font-family-title)';
	return (
		<Tag
			className={className}
			style={{
				fontSize: sizeStyle,
				color: colorStyle,
				fontFamily: fontFamilyStyle,
				textTransform: 'uppercase',
			}}
		>
			{text}
		</Tag>
	);
}
