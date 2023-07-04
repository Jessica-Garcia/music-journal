import React from 'react'
import './globals.css'
import {
  Carter_One as CarterOne,
  Josefin_Sans as Josefin,
  Montserrat_Alternates as MontserratAlternates,
} from 'next/font/google'
import { Provider } from './components/Provider'

const alt = CarterOne({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alt',
})

const josefin = Josefin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-josefin',
})

const montserratAlter = MontserratAlternates({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Diário de Músicas',
  description:
    'Um diário de músicas construído com React, Next.js, TailwindCSS e Typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${alt.variable} ${montserratAlter.variable} ${josefin.variable} bg-gray-800 font-sans text-gray-100`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
