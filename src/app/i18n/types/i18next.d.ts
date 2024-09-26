import 'i18next';

/* --------------------------------- global --------------------------------- */
import metadata from '../locales/es/global/metadata.json';
import routes from '../locales/es/global/routes.json';
import services from '../locales/es/global/services.json';
import buttons from '../locales/es/global/buttons.json';
/* ---------------------------------- home ---------------------------------- */
import headerHome from '../locales/es/home/header.json';
import whoWeAre from '../locales/es/home/whoWeAre.json';
declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			/* --------------------------------- global --------------------------------- */
			'global/metadata': typeof metadata;
			'global/routes': typeof routes;
			'global/services': typeof services;
			'global/buttons': typeof buttons;
			/* ---------------------------------- home ---------------------------------- */
			'home/header': typeof headerHome;
			'home/whoWeAre': typeof whoWeAre;
		};
	}
}
