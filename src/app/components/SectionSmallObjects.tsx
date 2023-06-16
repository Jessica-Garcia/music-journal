import React from 'react'
// import { TrackObject } from '../@types/track-object'
import { slidesToShowFull } from '@/utils/constants'
import SectionSlider from './SectionSlider'
import SliderShow from './SliderShow'
import CardsContainer from './CardsContainer'
import CardColumn from './CardColumn'
import SmallMusicalObject from './SmallMusicalObject'

interface SectionSmallObjectsProps {
  list: number[]
  // list: TrackObject[]
}

export default function SectionSmallObjects({
  list,
}: SectionSmallObjectsProps) {
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const newArray = (arr: any, len: any) => {
    const arrays = []
    let i = 0
    const n = arr.length
    while (i < n) {
      arrays.push(arr.slice(i, (i += len)))
    }
    return arrays
  }

  const listArrays = newArray(list, 4)

  return (
    <>
      {listArrays.length > slidesToShowFull ? (
        <SectionSlider>
          <SliderShow>
            {listArrays.map((a, i) => {
              return (
                <CardColumn key={i}>
                  {a.map((obj: any) => {
                    return <SmallMusicalObject key={obj} />
                  })}
                </CardColumn>
              )
            })}
          </SliderShow>
        </SectionSlider>
      ) : (
        <SectionSlider>
          <CardsContainer>
            {listArrays.map((a, i) => {
              return (
                <CardColumn key={i}>
                  {a.map((obj: any) => {
                    return <SmallMusicalObject key={obj} />
                  })}
                </CardColumn>
              )
            })}
          </CardsContainer>
        </SectionSlider>
      )}
    </>
  )
}
