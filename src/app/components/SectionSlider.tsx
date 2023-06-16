import React from 'react'
import Head from 'next/head'

interface SectionSliderProps {
  children: React.ReactNode
}

export default function SectionSlider({ children }: SectionSliderProps) {
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

      <section className="relative ml-12 mr-4 flex flex-col overflow-x-hidden border-2 border-solid border-red-500">
        <div className="flex h-14 items-center gap-4 border-2 border-solid border-blue-500">
          <h1>Title</h1>
          <div>outra coisa</div>
        </div>

        {children}
      </section>
    </>
  )
}
