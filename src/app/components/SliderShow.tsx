import React from 'react'
// import LargeMusicalObject from './LargeMusicalObject'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import {
  slidesToShowFull,
  slidesToShowLG,
  slidesToShowMD,
  slidesToShowXL,
} from '@/utils/constants'
interface SliderShowProps {
  children: React.ReactNode
}

export default function SliderShow({ children }: SliderShowProps) {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShowFull,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesToShowXL,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: slidesToShowLG,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: slidesToShowMD,
        },
      },
    ],
  }
  return <Slider {...settings}>{children}</Slider>
}
