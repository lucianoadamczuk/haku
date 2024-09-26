export const fallbackLng = 'es';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'global';
export const cookieName = 'i18next';

export function getOptions(
	lng = fallbackLng,
	ns: string | string[] = defaultNS
) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	};
}
