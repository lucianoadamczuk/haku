import { useTranslation } from '@/app/i18n/configuration/server';
import Contact from '../layouts/Contact/Contact';

interface Props {
	language: string;
}

export default async function ContactContainer({ language }: Props) {
	const { t } = await useTranslation(language, [
		'global/routes',
		'home/contact',
	]);

	const id = t('routes.contact.pathname', { ns: 'global/routes' });
	const title = t('title', { ns: 'home/contact' });
	const nameAndSurnameLabel = t('nameAndSurnameLabel', { ns: 'home/contact' });
	const nameAndSurnameError = t('nameAndSurnameError', { ns: 'home/contact' });
	const companyNameLabel = t('companyNameLabel', { ns: 'home/contact' });
	const companyNameError = t('companyNameError', { ns: 'home/contact' });
	const commentLabel = t('commentLabel', { ns: 'home/contact' });
	const commentError = t('commentError', { ns: 'home/contact' });
	const socialMediaTitle = t('socialMediaTitle', { ns: 'home/contact' });
	const button = t('button', { ns: 'home/contact' });

	const messageTemplate = t('message', {
		ns: 'home/contact',
		nameAndSurname: '{{nameAndSurname}}',
		companyName: '{{companyName}}',
		comment: '{{comment}}',
	});

	return (
		<Contact
			id={id}
			title={title}
			nameAndSurnameLabel={nameAndSurnameLabel}
			nameAndSurnameError={nameAndSurnameError}
			companyNameLabel={companyNameLabel}
			companyNameError={companyNameError}
			commentLabel={commentLabel}
			commentError={commentError}
			socialMediaTitle={socialMediaTitle}
			button={button}
			messageTemplate={messageTemplate}
		/>
	);
}
