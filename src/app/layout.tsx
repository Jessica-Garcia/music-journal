import React from 'react'
import './globals.css'
import {
  Monoton,
  Josefin_Sans as Josefin,
  Montserrat_Alternates as MontserratAlternates,
} from 'next/font/google'

const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton',
})

const josefin = Josefin({
  subsets: ['latin'],
  weight: '300',
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
        className={`${monoton.variable} ${montserratAlter.variable} ${josefin.variable} bg-gray-800 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
