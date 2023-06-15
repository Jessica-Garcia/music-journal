import React from 'react'
import SliderShow from './SliderShow'
import Head from 'next/head'
import LargeMusicalObject from './LargeMusicalObject'

export default function SectionRow() {
  const array = [1, 2, 3, 4, 5]

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <section className="relative ml-12 mr-4 flex flex-col border-2 border-solid border-red-500">
        <div className="flex h-14 items-center border-2 border-solid border-blue-500">
          <h1>Title</h1>
          <div>outra coisa</div>
        </div>
        {array.length > 4 ? (
          <SliderShow>
            {array.map((a) => {
              return <LargeMusicalObject key={a} />
            })}
          </SliderShow>
        ) : (
          <div className="flex gap-[30px] border-2 border-solid border-red-500 pr-[30px]">
            {array.map((a) => {
              return <LargeMusicalObject key={a} />
            })}
          </div>
        )}
      </section>
    </>
  )
}
