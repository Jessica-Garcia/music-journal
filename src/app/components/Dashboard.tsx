import React from 'react'
import SectionLargeObjects from './SectionLargeObjects'
import SectionSmallObjects from './SectionSmallObjects'

export default function Dashboard() {
  const array = [1, 2, 3, 4, 5, 6]
  return (
    <main className="mx-auto mt-[15vh] flex w-11/12 max-w-7xl flex-col justify-center gap-7 border-2 border-solid border-red-300 bg-gray-900 pt-11">
      <SectionLargeObjects list={array} />
      <SectionSmallObjects list={array} />
    </main>
  )
}
