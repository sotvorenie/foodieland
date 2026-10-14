import Image from "next/image";

import ButtonUi from "@/components/ui/ButtonUi";

interface ChipProps {
    text: string
    iconHref: string
}

function Chip({text, iconHref}: ChipProps) {
    return (
        <div className="flex items-center gap-2 md:gap-3 bg-light rounded-[1.875rem] px-3 py-1.5 md:px-5 md:py-2.5 w-fit">
           <Image src={iconHref}
                  alt=""
                  width={24}
                  height={24}
                  className="w-4.5 md:w-6 aspect-1"
           />

            <span className="font-semibold text-xs md:text-sm">{text}</span>
        </div>
    )
}

interface InfoBadgeProps {
    text: string
    iconHref: string
}

function InfoBadge({text, iconHref}: InfoBadgeProps) {
    return (
        <div className="flex items-center gap-2.5 py-1.5 md:py-2 px-2.5 md:px-4 bg-dark-5 rounded-[1.875rem]">
           <Image src={iconHref}
                  alt=""
                  width={24}
                  height={24}
                  className="aspect-1 w-5 md:w-6"
           />

            <span className="text-dark-60 text-sm font-medium -tracking-[0.02em] leading-none">
                {text}
            </span>
        </div>
    )
}

interface PersonProps {
    avatarUrl: string
    name: string
    date: string
}

function Person({avatarUrl, name, date}: PersonProps) {
    return (
        <div className="flex items-center gap-3 md:gap-4">
            <div className="img-container square-10 md:square-12.5 rounded-full">
                <Image src={avatarUrl}
                       alt={name}
                       fill
                />
            </div>

            <div className="flex flex-col gap-1 md:gap-2 -tracking-[0.02em]">
                <p className="font-bold leading-none">
                    {name}
                </p>

                <p className="font-medium text-sm text-dark-60 leading-none">
                    {date}
                </p>
            </div>
        </div>
    )
}

function IndexBannerItem() {
    return (
        <div className="flex flex-col-reverse lg:grid grid-cols-[620fr_660fr] rounded-[1.5rem] lg:rounded-[2.375rem] overflow-hidden md:pt-40 lg:pt-0 lg:min-h-150">
            <div className="p-4 md:p-6 xl:p-12.5 bg-blue flex flex-col md:rounded-[1.5rem] lg:rounded-none">
                <Chip text="Hot Recipes"
                      iconHref="/images/index/banner-chip.png"
                />

                <h1 className="mt-4 md:mt-8">
                    Spicy delicious chicken wings
                </h1>

                <p className="text-dark-60 mt-4 md:mt-6">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </p>

                <div className="flex gap-2 md:gap-4 flex-wrap mt-4 md:mt-7.5">
                    <InfoBadge text="30 Minutes" iconHref="/icons/clock.svg"/>
                    <InfoBadge text="Chicken" iconHref="/icons/cutlery.svg"/>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center justify-between mt-auto pt-6 md:pt-7.5">
                    <Person avatarUrl="/images/index/banner-avatar.png"
                            name="John Smith"
                            date="15 March 2022"
                    />

                    <ButtonUi text="View Recipes"
                              afterChildren={
                                <Image src="/icons/play.svg"
                                       alt=""
                                       width={24}
                                       height={24}
                                />
                              }
                    />
                </div>
            </div>
            
            <div className="img-container aspect-1/1 md:abs-x lg:!relative lg:aspect-auto md:border border-gray lg:border-0 w-full md:w-50 top-0 md:rounded-4xl lg:rounded-none lg:w-full lg:h-full">
                <Image src="/images/index/banner-food.png"
                       alt=""
                       fill
                />
            </div>
        </div>
    )
}

export default IndexBannerItem;