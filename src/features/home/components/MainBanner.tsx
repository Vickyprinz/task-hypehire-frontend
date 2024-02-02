import { useEffect } from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, FreeMode, Pagination } from "swiper/modules"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getMainBannerAsync } from "../homeAsync"

export default function MainBanner() {
  const dispatch = useAppDispatch()
  const { mainBanner } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getMainBannerAsync())
  }, [dispatch])

  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="sm:block md:hidden h-[187.5px] "
      >
        {mainBanner.map(banner => {
          return (
            <SwiperSlide key={banner.mainBannerId}>
              <img
                src={banner.pcImageUrl}
                alt={banner.title}
                className="h-full w-full "
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        slideNextClass="opacity-50"
        slidePrevClass="opacity-50"
        slideActiveClass="w-10"
        slidesPerView={1.9}
        spaceBetween={10}
        loop={true}
        freeMode={true}
        centeredSlides
        centerInsufficientSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="h-[323px] mySwiper hidden md:block"
      >
        {mainBanner.map(banner => {
          return (
            <SwiperSlide key={banner.mainBannerId}>
              <img
                src={banner.pcImageUrl}
                alt={banner.title}
                className="h-full object-cover"
              />
            </SwiperSlide>
          )
        })}
        <SwiperCustomNavButtons />
      </Swiper>
    </div>
  )
}

export const SwiperCustomNavButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="text-white">
      <button
        className="absolute bottom-36 z-50 left-[28rem] bg-[#33333380] rounded-full p-2"
        onClick={() => swiper.slidePrev()}
      >
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
      <button
        className="absolute  bottom-36 z-50 right-[28rem] bg-[#33333380] rounded-full p-2"
        onClick={() => swiper.slideNext()}
      >
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
