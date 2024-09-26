import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export interface AppParams extends Params {
	language: string;
	service: string;
	serviceName: string;
}
