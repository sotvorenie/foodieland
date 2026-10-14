'use client'

import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import './IndexBanner.module.scss'

import IndexBannerItem from "@/components/blocks/index/IndexBannerItem";

function IndexBanner() {
    const [isDesktop, setIsDesktop] = useState<boolean>(false)

    useEffect(() => {
        const media = window.matchMedia('(min-width: 1320px)')
        setIsDesktop(media.matches)

        const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [])

    return (
        <div className="index-banner mt-5 lg:mt-10">
            <div className={isDesktop ? '' : 'container'}>
                <Swiper modules={[Autoplay]}
                        slidesPerView='auto'
                        spaceBetween={40}
                        centeredSlides={true}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                >
                    {Array.from({length: 6}).map((_, index) => (
                        <SwiperSlide key={index} className="select-none">
                            <IndexBannerItem/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default IndexBanner;