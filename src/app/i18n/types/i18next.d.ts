import 'i18next';

/* --------------------------------- global --------------------------------- */
import metadata from '../locales/es/global/metadata.json';
import routes from '../locales/es/global/routes.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			'global/metadata': typeof metadata;
			'global/routes': typeof routes;
		};
	}
}
