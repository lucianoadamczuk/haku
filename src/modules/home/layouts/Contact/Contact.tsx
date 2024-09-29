import { Button, Form, Icon, Input, Textarea, Title } from '@/modules/shared';
import styles from './Contact.module.css';
interface Props {
	title: string;

	nameAndSurnameLabel: string;
	nameAndSurnameError: string;

	companyNameLabel: string;
	companyNameError: string;

	textareaLabel: string;
	textareaError: string;
}
export default function Contact({
	title,
	nameAndSurnameLabel,
	nameAndSurnameError,
	companyNameLabel,
	companyNameError,
}: Props) {
	return (
		<section className={styles.contact}>
			<Title
				tag='h3'
				size='xl'
				color='secondary'
				className={styles.title}
				text='¡Hablemos!'
			/>

			<Form className={styles.form}>
				<Input
					label='Nombre y apellido'
					type='text'
					error='Campo obligatorio'
				/>

				<Input
					label='Nombre de su empresa'
					type='text'
					error='Campo obligatorio'
				/>

				<Textarea label='Consulta' error='error' />

				<Button alwaysFull text='Enviar' onClick={console.log('clicked')} />
			</Form>

			<Icon as='talk' full color='primary' className={styles.icon} />
		</section>
	);
}
