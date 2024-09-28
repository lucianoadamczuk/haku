'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { useTranslation } from '@/app/i18n/configuration/client';
import { Icons } from '@/modules/shared';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import SlideWhoWeAre from '../../components/SlideWhoWeAre/SlideWhoWeAre';

import './WhoWeAre.css';

interface Props {
	language: string;
}
export default function WhoWeAre({ language }: Props) {
	const { t } = useTranslation(language, 'home/whoWeAre');
	const content = t('slides', { returnObjects: true });
	const slideIcons = ['people', 'target', 'rocket'];

	return (
		<section>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className='WhoWeAre'
			>
				{content.map((item, index) => {
					const key = `slide_whoWeAre_${item.title}`;
					const title = item.title;
					const text = item.text;
					const icon = slideIcons[index];

					return (
						<SwiperSlide key={key}>
							<SlideWhoWeAre
								title={title}
								text={text}
								index={index}
								icon={icon as Icons}
								noGrid={content.length - 1 === index && true}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}
