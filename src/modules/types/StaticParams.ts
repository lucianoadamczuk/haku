import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export interface StaticParams extends Params {
	language: string;
}
