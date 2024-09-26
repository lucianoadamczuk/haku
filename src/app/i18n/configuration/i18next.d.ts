import 'i18next';

/* --------------------------------- global --------------------------------- */
import routes from '../locales/es/global/routes.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			'global/routes': typeof routes;
		};
	}
}
