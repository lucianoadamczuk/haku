import stlyes from './Button.module.css';
interface Props {
	text: string;
	onClick: () => void;
}
export default function Button({ text, onClick }: Props) {
	return (
		<button className={stlyes.button} onClick={onClick}>
			{text}
		</button>
	);
}
