import './globals.css'
import React from 'react'
import {
  Monoton,
  Josefin_Sans as Josefin,
  Montserrat_Alternates as MontserratAlter,
} from 'next/font/google'

const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton',
})

const josefin = Josefin({
  subsets: ['latin'],
  weight: '200',
  variable: '--font-josefin',
})

const montserratAlter = MontserratAlter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mont',
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
        className={`${monoton.variable} ${josefin.variable} ${montserratAlter.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
