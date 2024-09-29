import Contact from '../layouts/Contact/Contact';

interface Props {
	language: string;
}
export default function ContactContainer({ language }: Props) {
	return <Contact />;
}
