import stlyes from './Button.module.css';
interface Props {
	text: string;
	alwaysFull?: boolean;
	onClick?: () => void;
}
export default function Button({ text, alwaysFull, onClick }: Props) {
	return (
		<button
			type='submit'
			className={`${stlyes.button} ${alwaysFull ? stlyes.alwaysFull : ''}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
