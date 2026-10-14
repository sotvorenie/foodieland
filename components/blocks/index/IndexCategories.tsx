'use client'

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

import ButtonUi from "@/components/ui/ButtonUi";
import Link from "next/link";

interface CategoryType {
    label: string
    href: string
    bg: string
    imageSrc: string
}

interface CategoryProps {
    category: CategoryType
}

function Category({category}: CategoryProps) {
    return (
        <Link href={category.href}
              className="block relative pt-8 md:pt-12.5"
        >
            <Image src={category.imageSrc}
                   alt=""
                   width={100}
                   height={100}
                   className="aspect-1 w-20 md:w-25 abs-x top-0 z-2"
            />
            <Image src={category.imageSrc}
                   alt=""
                   width={100}
                   height={100}
                   className="aspect-1 w-20 md:w-25 absolute top-8 md:top-5 right-5 blur-[1.25rem] z-1 opacity-40"
            />

            <div className="h-30 md:h-38 rounded-2xl md:rounded-[30px] flex items-end justify-center text-center"
                 style={{ background: category.bg }}
            >
                <div className="mb-7.5 md:text-lg font-semibold -tracking-[0.02em] leading-none">
                    {category.label}
                </div>
            </div>
        </Link>
    )
}

function IndexCategories() {
    const categories: CategoryType[] = [
        {
            label: 'Breakfast',
            href: '#',
            bg: 'linear-gradient(#70824600 0%, #7082461A 100%)',
            imageSrc: '/images/index/categories-1.png',
        },
        {
            label: 'Vegan',
            href: '#',
            bg: 'linear-gradient(#6CC63F00 0%, #6CC63F1A 100%)',
            imageSrc: '/images/index/categories-2.png',
        },
        {
            label: 'Meat',
            href: '#',
            bg: 'linear-gradient(#CC261B00 0%, #CC261B1A 100%)',
            imageSrc: '/images/index/categories-3.png',
        },
        {
            label: 'Dessert',
            href: '#',
            bg: 'linear-gradient(#F09E0000 0%, #F09E001A 100%)',
            imageSrc: '/images/index/categories-4.png',
        },
        {
            label: 'Lunch',
            href: '#',
            bg: 'linear-gradient(#00000000 0%, #0000000D 100%)',
            imageSrc: '/images/index/categories-5.png',
        },
        {
            label: 'Chocolate',
            href: '#',
            bg: 'linear-gradient(#00000000 0%, #0000000D 100%)',
            imageSrc: '/images/index/categories-6.png',
        },
    ]

    return (
        <div className="mt-10 md:mt-20 lg:mt-40">
            <div className="container">
                <div className="flex gap-5 items-center justify-between mb-10 md:mb-15 lg:mb-20">
                    <h2>Categories</h2>

                    <ButtonUi text="View All Categories" mode="light" />
                </div>

                <Swiper slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            767: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            }
                        }}
                >
                    {categories.map(category => (
                        <SwiperSlide key={category.label}>
                            <Category category={category}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default IndexCategories;