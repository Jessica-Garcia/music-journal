import React from 'react'
import SectionRow from './SectionRow'

export default function Dashboard() {
  return (
    <main className="mx-auto mt-[15vh] flex w-11/12 flex-col justify-center gap-7 border-2 border-solid border-red-300 bg-gray-900 pt-11">
      <SectionRow />
      <SectionRow />
      <SectionRow />
    </main>
  )
}
