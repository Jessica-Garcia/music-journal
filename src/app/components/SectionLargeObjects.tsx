import React from 'react'
// import { TrackObject } from '../@types/track-object'
import { slidesToShowFull } from '@/utils/constants'
import SectionSlider from './SectionSlider'
import SliderShow from './SliderShow'
import LargeMusicalObject from './LargeMusicalObject'
import CardsContainer from './CardsContainer'

interface SectionLargeObjectsProps {
  list: number[]
  // list: TrackObject[]
}

export default function SectionLargeObjects({
  list,
}: SectionLargeObjectsProps) {
  return (
    <>
      {list.length > slidesToShowFull ? (
        <SectionSlider>
          <SliderShow>
            {list.map((a, i) => {
              return <LargeMusicalObject key={i} />
            })}
          </SliderShow>
        </SectionSlider>
      ) : (
        <SectionSlider>
          <CardsContainer>
            {list.map((a, i) => {
              return <LargeMusicalObject key={i} />
            })}
          </CardsContainer>
        </SectionSlider>
      )}
    </>
  )
}
