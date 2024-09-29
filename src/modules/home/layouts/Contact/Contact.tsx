'use client';
import { hakuInformation } from '@/modules/constants';
import { Button, Form, Icon, Input, Textarea, Title } from '@/modules/shared';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.css';

interface Props {
	title: string;
	// person
	nameAndSurnameLabel: string;
	nameAndSurnameError: string;
	//company
	companyNameLabel: string;
	companyNameError: string;
	// comment
	commentLabel: string;
	commentError: string;
	//others
	socialMediaTitle: string;
	button: string;
	messageTemplate: string;
}

//form data
interface FormData {
	nameAndSurname: string;
	companyName: string;
	comment: string;
	socialMedia: string;
}

export default function Contact({
	title,
	nameAndSurnameLabel,
	nameAndSurnameError,
	companyNameLabel,
	companyNameError,
	commentLabel,
	commentError,
	socialMediaTitle,
	button,
	messageTemplate,
}: Props) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>();

	function onSubmit(data: FormData) {
		const phone = hakuInformation.phone;

		// transpolate values
		const message = messageTemplate
			.replace('{{nameAndSurname}}', data.nameAndSurname)
			.replace('{{companyName}}', data.companyName)
			.replace('{{comment}}', data.comment)
			.replace('{{socialMedia}}', data.socialMedia);

		// replace empty spaces
		function sanitizeURL(message: string) {
			return message.replace(/\s+/g, '%20');
		}

		const sanitizedURL = sanitizeURL(message);
		const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${sanitizedURL}`;

		// send
		window.open(whatsappURL, '_blank');
	}

	return (
		<section className={styles.contact}>
			{/* ---------------------------------- title --------------------------------- */}
			<Title
				tag='h3'
				size='xl'
				color='secondary'
				className={styles.title}
				text={title}
			/>

			{/* ---------------------------------- form ---------------------------------- */}
			<Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{/* person */}
				<Input
					label={nameAndSurnameLabel}
					type='text'
					register={register('nameAndSurname', {
						required: nameAndSurnameError,
					})}
					error={errors.nameAndSurname?.message || ''}
				/>

				{/* company */}
				<Input
					label={companyNameLabel}
					type='text'
					register={register('companyName', { required: companyNameError })}
					error={errors.companyName?.message || ''}
				/>

				{/* comment */}
				<Textarea
					label={commentLabel}
					register={register('comment', { required: commentError })}
					error={errors.comment?.message || ''}
				/>

				{/* social media */}
				<Input
					type='url'
					label={socialMediaTitle}
					register={register('socialMedia')}
					error=''
				/>

				<Button alwaysFull text={button} />
			</Form>

			{/* ---------------------------------- icon ---------------------------------- */}
			<Icon as='talk' full color='primary' className={styles.icon} />
		</section>
	);
}
