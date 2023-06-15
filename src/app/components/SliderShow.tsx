import React from 'react'
// import LargeMusicalObject from './LargeMusicalObject'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
interface SliderShowProps {
  children: React.ReactNode
}

export default function SliderShow({ children }: SliderShowProps) {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return <Slider {...settings}>{children}</Slider>
}
