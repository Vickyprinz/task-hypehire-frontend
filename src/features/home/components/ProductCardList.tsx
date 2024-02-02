import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import type {
  Item,
  Item2,
  Items2,
  Items3,
  Items4,
  Items5,
  Items6,
  Items7,
  Items8,
  Items9,
} from "../types"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "swiper/swiper-bundle.css"

interface CardProp {
  items: Item2
}

export const ProductCardList = ({ items }: CardProp) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="md:flex mt-[56px] relative ">
        <div className="md:w-[240px] md:h-[326px]">
          <p className="text-[24px] leading-[32px] text-[#333333]">
            {items && items.title}
          </p>
          <p className="w-[240px] mt-[8px] text-[12px] text-grayTextColor font-[400px]">
            {items && items.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 md:hidden">
          {items &&
            items.items.map(item => {
              return <ProductCard item={item} />
            })}
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="hidden md:block"
        >
          {items &&
            items.items.map(item => {
              return (
                <SwiperSlide
                  key={item.uuid}
                  className="flex items-center justify-cente hover:cursor-pointer gap-2"
                >
                  <ProductCard item={item} />
                </SwiperSlide>
              )
            })}
          <SwiperCustomNavButtons />
        </Swiper>
      </div>
    </div>
  )
}

export const SwiperCustomNavButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="absolute bottom-0 left-0 z-50 text-grayTextColor">
      <button onClick={() => swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}

interface ProductCardProps {
  item:
    | Item
    | Items2
    | Items3
    | Items4
    | Items5
    | Items6
    | Items7
    | Items8
    | Items9
}

export const ProductCard = ({ item }: ProductCardProps) => {
  const options = { style: "decimal" }
  const numberFormat = new Intl.NumberFormat("en-US", options)
  return (
    <div className="text-start h-full">
      <div className="relative ">
        <img
          src={item.publication.media[0].uri}
          alt={item.name}
          className="object-cover rounded-[4px]"
        />
        {item.publication.tagsOnImage[0] && (
          <div className="absolute bottom-1 left-1 bg-greenBg px-2 rounded-sm flex">
            <img
              className="mr-[2px]"
              src="https://www.testvalley.kr/common/return-new.svg"
              alt=""
            />
            <p className="text-[12px] text-white">
              {item.publication.tagsOnImage[0]}
            </p>
          </div>
        )}
      </div>
      <p className="text-[11px] md:text-[15px] text-grayTextColor line-clamp-2 text-ellipsis font-normal leading-[21px] mt-[4px]">
        {item.publication.title}
      </p>
      <div className="flex">
        <p className="text-textRed">
          {item.publication.priceInfo.discountRate}%
        </p>
        <div>
          <p className="text-md">
            {numberFormat.format(item.publication.priceInfo.price)}
          </p>
        </div>
      </div>
      <p className="text-textRed text-sm">{item.publication.tagsOnDesc[0]}</p>
      <div className="flex">
        <img
          src="https://www.testvalley.kr/star/star-darkgray.svg"
          alt="star"
        />
        <p className="text-[12px]">{item.publication.rating}</p>
      </div>
      {item.publication.prefaceIconUrl && (
        <div className="flex">
          <div className="flex items-center gap-1 border px-2">
            <img
              src={item.publication.prefaceIconUrl}
              alt="preface"
              className="h-[14px] w-[14px]"
            />
            <p className="text-[12px]">{item.publication.preface}</p>
          </div>
        </div>
      )}
    </div>
  )
}
